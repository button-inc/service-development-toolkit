import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Fieldset from '../src/Fieldset';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Fieldset', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Fieldset />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
