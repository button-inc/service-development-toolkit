import { generateUrlArray } from '../src/helpers';

const mockSchema: any = {
  title: 'Title',
  type: 'object',
  required: ['sectorOther'],
  properties: {
    firstQuestion: {
      type: 'object',
      urlPostfix: 'test-1',
      properties: {},
    },
    secondQuestion: {
      type: 'string',
      urlPostfix: 'test-2',
      properties: {},
    },
  },
};

const expectedResult = ['test-1', 'test-2'];

describe('generateUrlArray', () => {
  it('creates an array of postFixes from the given schema', () => {
    const urlArray = generateUrlArray(mockSchema);
    expect(urlArray).toEqual(expectedResult);
  });

  it('leaves empty string if no postfix provided', () => {
    mockSchema.properties.thirdQuestion = { type: 'string' };
    expectedResult.push('');
    const urlArray = generateUrlArray(mockSchema);
    expect(urlArray).toEqual(expectedResult);
  });
});
