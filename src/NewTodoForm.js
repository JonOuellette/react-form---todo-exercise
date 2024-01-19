import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function NewTodoForm({ createTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    createTodo({ id: uuidv4(), task });
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="New task"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
