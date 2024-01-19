import React, {useState} from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";


const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, newTodo])
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return(
        <div>
            <NewTodoForm createTodo={addTodo} />
            {todos.map(todo => (
                <Todo
                    key ={todo.id}
                    id={todo.id}
                    task={todo.task}
                    removeTodo={removeTodo}
                />
            ))}
        </div>
    );
}



export default TodoList