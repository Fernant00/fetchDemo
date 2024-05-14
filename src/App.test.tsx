
import { render, screen } from '@testing-library/react';
import useEvent from "@testing-library/user-event";
import App from './App';
import { describe, it, expect } from 'vitest';

/* describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});

describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});
describe('App component', () => {
    it('renders correct heading', () => {
      render(<App />);
      expect(screen.getByRole("heading").textContent)
      .toMatch(/Our First Test/i);
      // compara con un encabezado, la i no importa si es mayuscula
    });
  }); */
  describe("App component", () =>{
    it("renders Default state", ()=>{
        const {container}= render(<App />);
        expect(container).toMatchSnapshot();
    });
    it("renders New text", async() =>{
        const user = useEvent.setup();
        render(<App />);
        const button = screen.getByRole("button",{name: "Click me!!"});
        await user.click(button);
        expect(screen.getByRole("heading").textContent).toMatch(/new text/i);
    });
  });

