import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", function() {
  render(<TodoList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it('allows the user to add a new todo', () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<TodoList />);
  
    // Simulate user typing a new todo task
    const input = getByPlaceholderText('New task');
    fireEvent.change(input, { target: { value: 'New Todo' } });

    // Simulate form submission
    const addButton = getByText('Add Todo');
    fireEvent.click(addButton);

    // Check for the presence of the new todo
    expect(queryByText('New Todo')).toBeInTheDocument();
  });


it('displays todos and can remove a todo', () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<TodoList />);

    // Add a todo
    const input = getByPlaceholderText('New task');
    fireEvent.change(input, { target: { value: 'Todo to be removed' } });
    fireEvent.click(getByText('Add Todo'));

    // Check if the todo is present
    expect(queryByText('Todo to be removed')).toBeInTheDocument();

    // Remove the added todo
    fireEvent.click(getByText('X'));

    // Verify the todo is removed
    expect(queryByText('Todo to be removed')).not.toBeInTheDocument();
 });