import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Fieldset from '../src/Fieldset';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import { changeSelectorToObject } from '../../bcgov-theme/utils/test-helpers';

expect.extend(toHaveNoViolations);

describe('Fieldset', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Fieldset title="legend" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should render its children', async () => {
    const { container } = render(
      <Fieldset title="legend">
        <p>test</p>
      </Fieldset>
    );
    expect(container.textContent).toMatch('test');
  });

  it('Should display a legend with its title', async () => {
    render(<Fieldset title="legend" />);
    const legend = document.querySelector('legend');
    expect(legend.textContent).toMatch('legend');
  });

  it('Should disable its children correctly', async () => {
    render(
      <Fieldset disabled>
        <input id="test-input" type="text" />
      </Fieldset>
    );
    const input: any = document.querySelector('#test-input');
    expect(input).toBeDisabled();
  });

  it('Should pass through end-user props', () => {
    const handleClick = jest.fn();
    render(<Fieldset onClick={handleClick} id="test" />);
    const fieldset = document.getElementById('test');
    fireEvent.click(fieldset);
    expect(handleClick).toHaveBeenCalled();
  });

  it('Should accept the fullWidth static prop', () => {
    render(<Fieldset id="test" fullWidth />);
    const fieldset = document.getElementById('test');
    expect(fieldset).toHaveStyle('width: 100%;');
  });
});
