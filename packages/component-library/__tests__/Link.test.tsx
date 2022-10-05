import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Link from '../src/Link';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import { changeSelectorToObject } from '../../bcgov-theme/utils/test-helpers';

expect.extend(toHaveNoViolations);

describe('Link', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Link href="#link">some text</Link>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should render its children', async () => {
    const { container } = render(
      <Link href="#link">
        <p>test</p>
      </Link>
    );
    expect(container.textContent).toMatch('test');
  });

  it('Should pass through end-user props', () => {
    const handleClick = jest.fn();
    render(
      <Link href="#link" onClick={handleClick} id="test">
        some text
      </Link>
    );
    const link = document.getElementById('test');
    fireEvent.click(link);
    expect(handleClick).toHaveBeenCalled();
  });
});
