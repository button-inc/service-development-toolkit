import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import FilePicker from '../src/FilePicker';
import { styles } from '../src/Button';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import { changeSelectorToObject } from '../utils/test-helpers';

expect.extend(toHaveNoViolations);

describe('FilePicker', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<FilePicker />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should apply styles from props', () => {
    const { getByText } = render(
      <FilePicker rounded id="test">
        Choose File
      </FilePicker>
    );
    const dropdown = getByText('Choose File');
    const stylesObject = changeSelectorToObject(styles.variant.primary.button);
    expect(dropdown).toHaveStyle(stylesObject.base);
  });

  it('Should pass through end-user props', () => {
    const handleClick = jest.fn();
    const handleChange = jest.fn();
    render(<FilePicker onClick={handleClick} onChange={handleChange} id="test" />);
    const filepicker = document.getElementById('test');
    fireEvent.click(filepicker);
    fireEvent.change(filepicker, { target: { value: '' } });

    expect(handleClick).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalled();
  });
});
