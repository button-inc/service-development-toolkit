import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import Button from '../src/Button';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Button', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Button>Click</Button>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
