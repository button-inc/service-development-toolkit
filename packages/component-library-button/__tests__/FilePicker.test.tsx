import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import FilePicker from '../src/FilePicker';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('FilePicker', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<FilePicker />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
