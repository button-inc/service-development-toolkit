import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Accordion from '../src/Accordion';
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom/extend-expect';

expect.extend(toHaveNoViolations);

describe('Accordion', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(
      <Accordion title="Lorem ipsum dolor sit amet">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
        nec mi eu.
      </Accordion>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should pass through end-user props', () => {
    const handleClick = jest.fn();
    render(
      <Accordion onClick={handleClick} id="test">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
        nec mi eu.
      </Accordion>
    );
    const accordion = document.getElementById('test');
    fireEvent.click(accordion);

    expect(handleClick).toHaveBeenCalled();
  });
});
