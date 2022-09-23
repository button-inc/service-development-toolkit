import { axe, toHaveNoViolations } from 'jest-axe';
import { render, screen, fireEvent } from '@testing-library/react';
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

  it('Should render its children', async () => {
    const { container } = render(
      <Notification closable>
        <Notification.Header>Header1_</Notification.Header>
        <Notification.Content>Content1</Notification.Content>
      </Notification>
    );
    expect(container.textContent).toMatch('Header1_Content1');
  });

  it('Should call onClose handler', async () => {
    const handleClick = jest.fn();
    render(
      <Notification closable onClose={handleClick}>
        <Notification.Header>Header1_</Notification.Header>
        <Notification.Content>Content1</Notification.Content>
      </Notification>
    );
    fireEvent.click(screen.getByRole('checkbox'));
    expect(handleClick).toHaveBeenCalled();
  });
});
