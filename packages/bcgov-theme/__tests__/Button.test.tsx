import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Button, { styles } from '../src/Button';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import { changeSelectorToObject } from '../utils/test-helpers';

expect.extend(toHaveNoViolations);

describe('Button', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Button>Click</Button>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should apply styles from props', () => {
    render(
      <Button id="test" variant="primary">
        Click
      </Button>
    );
    const button = document.getElementById('test');
    const stylesObject = changeSelectorToObject(styles.variant.primary.button);
    expect(button).toHaveStyle(stylesObject.base);
  });

  it('Should pass through end-user props', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} id="test">
        Click
      </Button>
    );
    const button = document.getElementById('test');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });

  it('Should accept static props', () => {
    render(
      <Button fullHeight fullWidth id="test">
        Click
      </Button>
    );
    const button = document.getElementById('test');
    expect(button).toHaveStyle('width: 100%;');
    expect(button).toHaveStyle('height: 100%;');
  });
});
