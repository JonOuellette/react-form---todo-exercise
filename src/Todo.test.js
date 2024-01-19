import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

it("renders without crashing", function() {
  render(<Todo />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});


it('renders a todo and can trigger remove', () => {
    const removeTodo = jest.fn();
    const { getByText } = render(
      <Todo id="todo-1" task="Test Todo" removeTodo={removeTodo} />
    );
  
    // Check if the todo task is displayed
    expect(getByText('Test Todo')).toBeInTheDocument();
  
    // Simulate clicking the remove button
    fireEvent.click(getByText('X'));
  
    // Check if the removeTodo function was called
    expect(removeTodo).toHaveBeenCalledWith('todo-1');
  });