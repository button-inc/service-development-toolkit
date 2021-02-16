import { getUrlPage } from '../src/helpers';

describe('getUrlPage', () => {
  it('grabs the correct url for the page', () => {
    let urlPage = getUrlPage('domain.com/one');
    expect(urlPage).toBe('one');
    urlPage = getUrlPage('domain.com/1.json?');
    expect(urlPage).toBe(1);
  });
});
