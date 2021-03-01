import { redirectHandler, handleFormEnd } from '../src/utils/validationUtils';
import { getPageInfo } from '../src/utils/urlUtils';
import { getCleanedFormData } from '../src/utils/cleanDataUtils';

jest.mock('../src/utils/validationUtils', () => ({
  ...jest.requireActual('../src/utils/validationUtils'),
  handleFormEnd: jest.fn(() => {}),
}));

const nextPage = 2;

jest.mock('../src/utils/cleanDataUtils', () => ({
  removePageFields: jest.fn(givenData => givenData),
  getCleanedFormData: jest.fn((_args, givenData) => givenData),
}));

const mockReq = { session: {}, url: '/1' };
const mockRes = { json: jest.fn(_data => {}), redirect: jest.fn(_data => {}) };
const errorPage = 'error';
const successPage = 'success';

const sharedArgs = {
  getRoute: 'test',
  numForms: 3,
  schema: { properties: {} },
  schemasArray: [{ properties: {} }],
  uiSchema: {},
  postRoute: '',
  fieldsArray: [['']],
  validations: {},
  urlArray: [],
  useSession: true,
  onPost: undefined,
  validatedUrl: successPage,
  invalidUrl: errorPage,
};

const dataCallback = jest.fn(() => ({ data: 'callback data' }));

afterEach(() => jest.clearAllMocks());

describe('handleRedirect with js', () => {
  it('Sends expected page with no urls defined', () => {
    redirectHandler(sharedArgs, true, {}, mockReq, mockRes);
    expect(mockRes.json).toHaveBeenCalledWith({ nextPage });
    expect(mockRes.redirect).not.toHaveBeenCalled();
  });

  it('Uses redirect url if its the last page', () => {
    sharedArgs.numForms = 1;
    const nextPage = successPage;
    redirectHandler(sharedArgs, true, {}, mockReq, mockRes);
    expect(mockRes.json).toHaveBeenCalledWith({ nextPage });
    expect(mockRes.redirect).not.toHaveBeenCalled();
  });
});

describe('postMiddleware without js', () => {
  it('Sends expected page with no urls defined', () => {
    sharedArgs.numForms = 3;
    redirectHandler(sharedArgs, undefined, {}, mockReq, mockRes);
    expect(mockRes.json).not.toHaveBeenCalled();
    expect(mockRes.redirect).toHaveBeenCalledWith(`${sharedArgs.getRoute}/2`);
  });

  it('Uses redirect url if its the last page', () => {
    sharedArgs.numForms = 1;
    const nextPage = successPage;
    redirectHandler(sharedArgs, undefined, {}, mockReq, mockRes);
    expect(mockRes.json).not.toHaveBeenCalled();
    expect(mockRes.redirect).toHaveBeenCalledWith(`${sharedArgs.getRoute}/${successPage}`);
  });
});
