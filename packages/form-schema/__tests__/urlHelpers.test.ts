import { getUrlPage, getPrevPageUrl } from '../src/utils/urlUtils';

const urlArray = ['', 'one', '', 'two'];

describe('getUrlPage', () => {
  it('grabs the correct url for the page', () => {
    let urlPage = getUrlPage('domain.com/one');
    expect(urlPage).toBe('one');
    urlPage = getUrlPage('domain.com/1.json?');
    expect(urlPage).toBe(1);
  });
});

describe('getPrevPageUrl', () => {
  it('grabs the correct url for the previous page', () => {
    let page = '/two';
    expect(getPrevPageUrl(page, urlArray)).toBe('/3');
    page = '/3';
    expect(getPrevPageUrl(page, urlArray)).toBe('/one');
    page = '/1';
    expect(getPrevPageUrl(page, urlArray)).toBe(-1);
  });
});
