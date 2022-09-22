import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Callout from '../src/Callout';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Callout', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Callout />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
