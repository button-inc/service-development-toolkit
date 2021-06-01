import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Callout from '../src/Callout';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Callout', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Callout />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should pass through end-user props', () => {
    const handleClick = jest.fn();
    render(<Callout onClick={handleClick} id="test" />);
    const callout = document.getElementById('test');
    fireEvent.click(callout);

    expect(handleClick).toHaveBeenCalled();
  });

  it('Should render its children', () => {
    const { getByText } = render(
      <Callout>
        <p>test text</p>
      </Callout>
    );
    getByText('test text');
  });

  it('Should render its content', () => {
    const { getByText } = render(<Callout content="test text" />);
    getByText('test text');
  });
});
