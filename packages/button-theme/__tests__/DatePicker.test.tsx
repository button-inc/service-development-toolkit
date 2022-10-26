import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import DatePicker, { datepickerStyles } from '../src/DatePicker';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import { changeSelectorToObject } from '../../bcgov-theme/utils/test-helpers';

expect.extend(toHaveNoViolations);

describe('DatePicker', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<DatePicker />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should apply styles from props', () => {
    render(<DatePicker id="test" rounded />);
    const datepicker = document.getElementById('test');
    const stylesObject = changeSelectorToObject(datepickerStyles.rounded.input);
    expect(datepicker).toHaveStyle(stylesObject.base);
  });
});
