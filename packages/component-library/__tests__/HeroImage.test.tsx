import { render, fireEvent } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import React from "react";
import HeroImage from '../src/HeroImage';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('HeroImage', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<HeroImage/>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should render its children', async () => {
    const { container } = render(
      <HeroImage>
        <p>test</p>
      </HeroImage>
    );

    expect(container.textContent).toMatch('test');
  });

  it('Should have a background image when passed a URL', async () => {
    const testProp = '"../testImg.png"';
    const { container } = render(<HeroImage url={testProp}/>);
    
    expect(container.firstChild).toHaveStyle(`background-image: url(${testProp})`)
    // expect(container.firstChild).toHaveStyle(`background-image: url(${testProp})`)
    
  });

  it('Should pass through end-user props', () => {
    const handleClick = jest.fn();
    render(<HeroImage onClick={handleClick} id="test"/>);
    const heroimage = document.getElementById('test');
    fireEvent.click(heroimage);

    expect(handleClick).toHaveBeenCalled();
  });
});