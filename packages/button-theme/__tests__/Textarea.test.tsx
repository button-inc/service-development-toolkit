import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Textarea from '../src/Textarea';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Textarea', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Textarea />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should pass through end-user props', () => {
    const handleClick = jest.fn();
    const handleChange = jest.fn();
    render(<Textarea onClick={handleClick} onChange={handleChange} id="test" />);
    const textarea = document.getElementById('test');
    fireEvent.click(textarea);
    fireEvent.change(textarea, { target: { value: 'test' } });

    expect(handleClick).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalled();
  });

  it('Should accept the fullWidth static prop', () => {
    render(<Textarea id="test" fullWidth />);
    const textarea = document.getElementById('test');
    expect(textarea).toHaveStyle('width: 100%;');
  });

  it('Should pass on user attributes', () => {
    render(<Textarea id="test" fullWidth rounded cols={5} />);
    const textarea = document.getElementById('test');
    expect(textarea).toHaveAttribute('cols', '5');
  });
});
