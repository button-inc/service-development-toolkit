import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Modal from '../src/Modal';
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom/extend-expect';

expect.extend(toHaveNoViolations);

describe('Modal', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Modal />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  const Example = props => {
    return (
      <>
        <Modal {...props}>
          <Modal.Header>
            Lorem ipsum dolor sit amet <Modal.Close>X</Modal.Close>
          </Modal.Header>
          <Modal.Content>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </Modal.Content>
        </Modal>

        <a href="#test">click</a>
      </>
    );
  };

  it('Should have no accessibility violations for an example', async () => {
    const { container } = render(<Example />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should pass through props', async () => {
    const handleClick = jest.fn();
    render(<Example id="test" onClick={handleClick} />);
    const modal = document.getElementById('test');
    fireEvent.click(modal);
    expect(handleClick).toHaveBeenCalled();
  });
});
