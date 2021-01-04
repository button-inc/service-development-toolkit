import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import Select from '../src/Select';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Select', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Select />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should render its children', async () => {
    const { container } = render(
      <Select size="tiny" name="select1" label="Select">
        <option value="option1">_Option1</option>
        <option value="option1">_Option2</option>
      </Select>
    );
    expect(container.textContent).toMatch('Select_Option1_Option2');
  });

  it('Should render without a legend', async () => {
    const { container } = render(
      <Select size="tiny" name="select1">
        <option value="option1">_Option1</option>
        <option value="option1">_Option2</option>
      </Select>
    );
    expect(container.textContent).toMatch('Option1_Option2');
  });

  it('Should accept fullWidth prop', async () => {
    render(<Select id="test-select" fullWidth />);
    const select = document.querySelector('#test-select');
    const style = window.getComputedStyle(select);
    expect(style.width).toBe('100%');
  });
});
