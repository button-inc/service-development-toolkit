import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import Header from '../src/Header';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Header', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Header title="header" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
