import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import Notification from '../src/Notification';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Notification', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Notification />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
