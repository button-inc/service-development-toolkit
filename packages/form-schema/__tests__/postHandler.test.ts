import postMiddleware from '../src/postMiddleware';
import { handleFormEnd } from '../src/utils/validationUtils';
import { removePageFields, getCleanedFormData } from '../src/utils/cleanDataUtils';
import { getPageInfo, getUrlPage } from '../src/utils/urlUtils';

const urlArray = ['', '', '', '', ''];

jest.mock('../src/utils/validationUtils', () => ({
  handleFormEnd: jest.fn(),
}));

const urlPage = 5;
const nextPage = 6;

jest.mock('../src/utils/urlUtils', () => ({
  ...jest.requireActual('../src/utils/urlUtils'),
  getPageInfo: jest.fn(() => ({ nextPageNumber: nextPage, nextPagePostfix: nextPage, schemaIndex: 4 })),
  getUrlPage: jest.fn(() => {}),
}));

jest.mock('../src/utils/cleanDataUtils', () => ({
  removePageFields: jest.fn(givenData => givenData),
  getCleanedFormData: jest.fn((_args, givenData) => givenData),
}));

const mockReqJs = { body: { js: true, postData: { data: 'test' } }, session: {} };
const mockReqNonJs = { body: { data: 'test' }, session: {} };
const mockRes = { json: jest.fn(_data => {}), redirect: jest.fn(_data => {}) };

const sharedArgs = {
  getRoute: 'test',
  numForms: 5,
  schema: { properties: {} },
  schemasArray: [{ properties: {} }],
  uiSchema: {},
  postRoute: '',
  fieldsArray: [['']],
  validations: {},
  urlArray: [],
  useSession: true,
  onPost: undefined,
};

const dataCallback = jest.fn(() => ({ data: 'callback data' }));

afterEach(() => jest.clearAllMocks());

describe('postMiddleware with js', () => {
  it('Sends expected props if js is true and redirects otherwise', () => {
    postMiddleware(sharedArgs, mockReqJs, mockRes);
    expect(mockRes.json).toHaveBeenCalledWith({ nextPage, isLastPage: true });
    expect(mockRes.redirect).not.toHaveBeenCalled();
  });

  it('uses callback function instead of session if useSession is false', () => {
    postMiddleware(sharedArgs, mockReqJs, mockRes);
    expect(mockRes.json).toHaveBeenCalledWith({
      nextPage: urlPage + 1,
      isLastPage: true,
    });
  });
});

describe('postMiddleware without js', () => {
  it('Redirects to the correct route if js disabled', () => {
    postMiddleware(sharedArgs, mockReqNonJs, mockRes);
    expect(mockRes.redirect).toHaveBeenCalledWith(`test/${nextPage}`);
  });
});
