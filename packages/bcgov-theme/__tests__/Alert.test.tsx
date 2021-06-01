import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Alert, { styles } from '../src/Alert';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
import { changeSelectorToObject } from '../utils/test-helpers';

expect.extend(toHaveNoViolations);

describe('Alert', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Alert />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should apply styles from props', () => {
    render(<Alert id="test" variant="info" />);
    const alert = document.getElementById('test');
    const stylesObject = changeSelectorToObject(styles.variant.info.container);
    expect(alert).toHaveStyle(stylesObject.base);
  });

  it('Should pass through end-user props', () => {
    const handleClick = jest.fn();
    render(<Alert onClick={handleClick} id="test" />);
    const alert = document.getElementById('test');
    fireEvent.click(alert);
    expect(handleClick).toHaveBeenCalled();
  });
});
