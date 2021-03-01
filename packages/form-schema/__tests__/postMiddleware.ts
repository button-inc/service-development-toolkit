import postMiddleware from '../src/postMiddleware';
import { redirectHandler } from '../src/utils/validationUtils';

const urlArray = ['', '', '', '', ''];

jest.mock('../src/utils/validationUtils', () => ({
  redirectHandler: jest.fn(),
}));

const mockReqJs = { body: { js: true, postData: { data: 'test' } }, session: {} };
const mockReqNonJs = { body: { data: 'test' }, session: {} };
const mockRes = {};

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
  validatedUrl: '/success',
  invalidUrl: '/error',
};

afterEach(() => jest.clearAllMocks());

describe('postMiddleware with js', () => {
  it('Uses the parsed body if js is enabled', () => {
    postMiddleware(sharedArgs, mockReqJs, mockRes);
    expect(redirectHandler).toHaveBeenCalledWith(sharedArgs, true, mockReqJs.body.postData, mockReqJs, mockRes);
  });
});

describe('postMiddleware without js', () => {
  it('Uses the body if js is disabled', () => {
    postMiddleware(sharedArgs, mockReqNonJs, mockRes);
    expect(redirectHandler).toHaveBeenCalledWith(sharedArgs, undefined, mockReqNonJs.body, mockReqNonJs, mockRes);
  });
});
