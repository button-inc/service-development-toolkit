import postMiddleware from '../src/postMiddleware';
import { validateFormData } from '../src/Utils/validationUtils';
import { removePageFields, matchPostBody } from '../src/Utils/cleanDataUtils';
import { getPageInfo, getUrlPage } from '../src/Utils/urlUtils';

const urlArray = ['', '', '', '', ''];

jest.mock('../src/Utils/validationUtils', () => ({
  validateFormData: jest.fn(() => ({ isValidated: true, isValid: true })),
}));

const urlPage = 5;
const nextPage = 6;

jest.mock('../src/Utils/urlUtils', () => ({
  ...jest.requireActual('../src/Utils/urlUtils'),
  getPageInfo: jest.fn(() => ({ nextPageNumber: nextPage, nextPagePostfix: nextPage, schemaIndex: 4 })),
  getUrlPage: jest.fn(() => {}),
}));

jest.mock('../src/Utils/cleanDataUtils', () => ({
  removePageFields: jest.fn(givenData => givenData),
  matchPostBody: jest.fn(givenData => givenData),
}));

const mockReqJs = { body: { js: true, postData: { data: 'test' } }, session: {} };
const mockReqNonJs = { body: { data: 'test' }, session: {} };
const mockRes = { json: jest.fn(_data => {}), redirect: jest.fn(_data => {}) };

const dataCallback = jest.fn(() => ({ data: 'callback data' }));

afterEach(() => jest.clearAllMocks());

describe('postMiddleware with js', () => {
  it('saves data to session if useSession is true and returns expected props', () => {
    postMiddleware(
      '',
      5,
      { properties: {} },
      [{ properties: {} }],
      [['']],
      {},
      urlArray,
      undefined,
      undefined,
      true,
      mockReqJs,
      mockRes
    );
    expect(mockRes.json).toHaveBeenCalledWith({ formData: mockReqJs.body.postData, nextPage, isLastPage: true });
    expect(mockRes.redirect).not.toHaveBeenCalled();
    expect(mockReqJs.session).toEqual({ formData: mockReqJs.body.postData });
  });

  it('uses callback function instead of session if useSession is false', () => {
    postMiddleware(
      '',
      5,
      { properties: {} },
      [{ properties: {} }],
      [['']],
      {},
      urlArray,
      () => {},
      dataCallback,
      false,
      mockReqJs,
      mockRes
    );
    expect(mockRes.json).toHaveBeenCalledWith({
      formData: { data: 'callback data' },
      nextPage: urlPage + 1,
      isLastPage: true,
    });
  });
});

describe('postMiddleware without js', () => {
  it('saves data to session if useSession is true and redirects correctly', () => {
    postMiddleware(
      'test',
      5,
      { properties: {} },
      [{ properties: {} }],
      [['']],
      {},
      urlArray,
      undefined,
      undefined,
      true,
      mockReqNonJs,
      mockRes
    );
    expect(mockRes.redirect).toHaveBeenCalledWith(`test/${nextPage}`);
    expect(mockReqNonJs.session).toEqual({ formData: mockReqNonJs.body });
  });

  it('uses callback function instead of session if useSession is false', () => {
    postMiddleware(
      '',
      5,
      { properties: {} },
      [{ properties: {} }],
      [['']],
      {},
      urlArray,
      () => {},
      dataCallback,
      false,
      mockReqNonJs,
      mockRes
    );
    expect(dataCallback).toHaveBeenCalled();
  });
});
