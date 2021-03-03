import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import Checkbox from '../src/Checkbox';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Checkbox', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Checkbox label="checkbox" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
