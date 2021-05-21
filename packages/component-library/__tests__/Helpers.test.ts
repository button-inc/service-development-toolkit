import React from 'react';
import Textarea from '../src/Textarea';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import { processStyle } from '../src/helpers';

const stringStyles = {
  primary: `color: red;`,
  secondary: `color: blue;`,
};

const arrayStyles = {
  primary: [`color: red;`, `background-color: blue;`],
  secondary: {
    string: 'font-weight: bold;',
    deep: ['color: green;', 'background-color: yellow;'],
  },
};

const expectedArrayResult = {
  primary: 'color: red;background-color: blue;',
  secondary: {
    string: 'font-weight: bold;',
    deep: 'color: green;background-color: yellow;',
  },
};

describe('process style', () => {
  it('Should return the same object if there are no arrays', () => {
    const stringResult = processStyle(stringStyles);
    expect(stringStyles).toEqual(stringResult);
  });
  it('Should return concatenated strings if using arrays', () => {
    const arrayResult = processStyle(arrayStyles);
    expect(arrayResult).toEqual(expectedArrayResult);
  });
});
