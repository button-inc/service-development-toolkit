import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import Radio from '../src/RadioButton';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Checkbox', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Radio label="radio" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
