import React, { useState } from 'react';
import TodoContext from '../context/TodoContext';
import uuidv4 from '../../../node_modules/uuid/dist/bin/uuid';

const GlobalState = (props) => {
    const [getTodos, setTodos] = useState([]);
    const [getTodo, setTodo] = useState(['']);
    const handleCreatNewTodo = () => {
        const todos = [...getTodos];
        const todo = {
            id: [...uuidv4],
            text: getTodo,
            completed: false,
        };
        if (getTodo && getTodo !== ' ') {
            todos.push(todo);
            setTodos(todos);
            setTodo('');
        }
    };
    const handleCompletedTodo = (id) => {
        const todos = [...getTodos];
        const todoIndex = todos.findIndex((t) => t.id == id);
        const todo = todos[todoIndex];
        todo.completed = !todo.completed;
        setTodos(todos);
    };
    const handleDeleteTodo = (id) => {
        const todos = [...getTodos];
        const filterTodos = todos.filter((t) => t.id !== id);
        setTodos(filterTodos);
    };
    const handleTodoInput = (event) => {
        setTodo(event.target.value);
    };
    return (
        <TodoContext.Provider
            value={{
                todo: getTodo,
                todos: getTodos,
                handleCreatNewTodo: handleCreatNewTodo,
                handleTodoInput: handleTodoInput,
                handleCompletedTodo: handleCompletedTodo,
                handleDeleteTodo: handleDeleteTodo,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
};

export default GlobalState;
