import getHandler from '../src/getHandler';

const page = 5;
const expectedIndex = page - 1;
const defaultUrlArray = ['', '', '', '', ''];

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
    const { formIndex } = getHandler(10, defaultUrlArray, true, mockReq);
    expect(formIndex).toBe(expectedIndex);
  });

  it('returns false for validPage if invalid', () => {
    let { validPage } = getHandler(4, defaultUrlArray, true, mockReq);
    expect(validPage).toBe(false);

    const newReq = { ...mockReq };
    newReq.url = `/testPath/0`;
    ({ validPage } = getHandler(4, defaultUrlArray, true, newReq));
    expect(validPage).toBe(false);

    newReq.url = `/testPath/test`;
    ({ validPage } = getHandler(4, defaultUrlArray, true, newReq));
    expect(validPage).toBe(false);

    newReq.url = `/testPath/happy-path`;
    ({ validPage } = getHandler(4, ['', '', '', 'happy-path', ''], true, newReq));
    expect(validPage).toBe(true);
  });

  it('Returns session data if no callback provided', () => {
    const result = getHandler(10, defaultUrlArray, true, mockReq);
    expect(result).toEqual(expectedResult);
  });
});
