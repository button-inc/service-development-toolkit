import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Alert from '../src/Alert';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Alert', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Alert />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
