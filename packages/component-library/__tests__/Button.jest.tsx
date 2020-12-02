import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import Button from '../src/Button';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Button', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Button>Button</Button>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should re-use css classes', () => {
    const { getByText } = render(
      <>
        <Button primary>Button 1</Button>
        <Button primary>Button 2</Button>
      </>
    );

    const buttonOneClasses = getByText('Button 1').className;
    const buttonTwoClasses = getByText('Button 2').className;
    expect(buttonOneClasses).toEqual(buttonTwoClasses);
  });
});
