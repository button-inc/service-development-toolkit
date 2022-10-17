import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import HeroImage from '../src/HeroImage';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('HeroImage', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<HeroImage />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
