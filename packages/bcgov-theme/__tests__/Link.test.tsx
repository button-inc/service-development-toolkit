import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import Link, { sizes } from '../src/Link';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Link', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Link content="link" href="#link" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should render content through prop or children', () => {
    const { getByText } = render(
      <>
        <Link content="my-first-link" href="#link" />
        <Link href="#link">my-second-link</Link>
      </>
    );
    getByText('my-first-link');
    getByText('my-second-link');
  });

  it('Should apply style props', () => {
    const { getByText } = render(<Link content="my-first-link" size="small" href="#link" />);
    const link = getByText('my-first-link');
    expect(link).toHaveStyle(`font-size: ${sizes['small']}`);
  });

  it('Should set target to blank when external prop is passed', () => {
    const { getByText } = render(<Link content="my-first-link" external href="#link" />);
    const link = getByText('my-first-link');
    expect(link).toHaveAttribute('target', '_blank');
  });
});
