import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import Link from '../src/Link';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Link', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Link href="#link" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
