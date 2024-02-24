import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);
    //Act
    // ... nothing here
    //Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see you' if the button is not clicked", () => {
    render(<Greeting/>)
    const paragraphElement = screen.getByText("It's good to see you!")
    expect(paragraphElement).toBeInTheDocument()
  })

  test('renders Changed! if the button was clicked', () =>{
      //Arrange
      render(<Greeting />);
      //Act
      const buttonElement = screen.getByRole('button')
      userEvent.click(buttonElement)
      //Assert
      const paragraphElement = screen.getByText("Changed!", );
      expect(paragraphElement).toBeInTheDocument();
  })

  test('does not render "good to see you"  if the button was clicked', () =>{
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)
    //Assert
    const paragraphElement = screen.queryByText("good to see you", {exact: false});
    expect(paragraphElement).toBeNull();
})
});
