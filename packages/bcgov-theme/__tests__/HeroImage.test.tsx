import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
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

  it('Should pass through end-user props', () => {
    const handleClick = jest.fn();
    render(<HeroImage onClick={handleClick} id="test" />);
    const heroimage = document.getElementById('test');
    fireEvent.click(heroimage);

    expect(handleClick).toHaveBeenCalled();
  });
});
