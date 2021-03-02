import getHandler from '../src/getHandler';

const page = 5;
const expectedIndex = page - 1;

const sharedArgs = { numForms: 10, urlArray: ['', '', '', '', ''], useSession: true };

const mockReq = { session: { formData: { data: 'test' } }, url: `/testpath/${page}` };
const expectedResult = {
  formIndex: expectedIndex,
  formData: mockReq.session.formData,
  validPage: true,
  prevPageUrl: '/4',
};

const mockCallback = formIndex => ({ formIndex });

describe('getHandler', () => {
  it('Gets correct index from page in url', () => {
    const { formIndex } = getHandler(sharedArgs, mockReq);
    expect(formIndex).toBe(expectedIndex);
  });

  it('returns false for validPage if invalid', () => {
    sharedArgs.numForms = 4;
    let { validPage } = getHandler(sharedArgs, mockReq);
    expect(validPage).toBe(false);

    const newReq = { ...mockReq };
    newReq.url = `/testPath/0`;
    ({ validPage } = getHandler(sharedArgs, newReq));
    expect(validPage).toBe(false);

    newReq.url = `/testPath/test`;
    ({ validPage } = getHandler(sharedArgs, newReq));
    expect(validPage).toBe(false);

    newReq.url = `/testPath/happy-path`;
    sharedArgs.urlArray = ['', '', '', 'happy-path', ''];
    ({ validPage } = getHandler(sharedArgs, newReq));
    expect(validPage).toBe(true);
  });

  it('Returns session data if useSession is true', () => {
    sharedArgs.urlArray = ['', '', '', '', ''];
    sharedArgs.numForms = 10;
    const result = getHandler(sharedArgs, mockReq);
    expect(result).toEqual(expectedResult);
  });
});
