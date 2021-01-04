import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import Fieldset from '../src/Fieldset';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';

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

  it('Should accept fullHeight and fullWidth props', async () => {
    render(<Fieldset id="test-fieldset" fullWidth fullHeight></Fieldset>);
    const fieldset = document.querySelector('#test-fieldset');
    const style = window.getComputedStyle(fieldset);
    expect(style.height).toBe('100%');
    expect(style.width).toBe('100%');
  });
});
