import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import Input from '../src/Input';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Input', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Input label="input" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
