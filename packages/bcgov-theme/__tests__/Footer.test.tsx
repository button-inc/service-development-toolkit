import { axe, toHaveNoViolations } from 'jest-axe';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Footer from '../src/Footer';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Footer', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should pass through end-user props', () => {
    const handleClick = jest.fn();
    render(<Footer id="test" style={{ background: 'red' }} onClick={handleClick} />);
    const footer = document.getElementById('test');
    expect(footer).toHaveStyle('background: red;');
    fireEvent.click(footer);
    expect(handleClick).toHaveBeenCalled();
  });
});
