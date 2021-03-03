import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import Card from '../src/Card';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Card', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Card />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
