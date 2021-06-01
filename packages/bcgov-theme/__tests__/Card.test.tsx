import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Card from '../src/Card';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Card', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Card />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should pass through end-user props', () => {
    const handleClick = jest.fn();
    render(<Card onClick={handleClick} id="test" />);
    const card = document.getElementById('test');
    fireEvent.click(card);
    expect(handleClick).toHaveBeenCalled();
  });

  it('Should render its children', () => {
    const { getByText } = render(
      <Card>
        <p>test text</p>
      </Card>
    );
    getByText('test text');
  });

  it('Should use its title', () => {
    const { getByText } = render(<Card title="test text" />);
    getByText('test text');
  });
});
