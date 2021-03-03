import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import Accordion from '../src/Accordion';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Accordion', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Accordion />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
