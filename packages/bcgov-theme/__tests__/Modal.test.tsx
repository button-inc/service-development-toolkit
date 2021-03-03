import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import Modal from '../src/Modal';
import 'regenerator-runtime/runtime';

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
      </>
    );
  };

  it('Should have no accessibility violations for an example', async () => {
    const { container } = render(<Example />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
