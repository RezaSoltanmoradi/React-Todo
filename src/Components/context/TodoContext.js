import { createContext } from 'react';
const TodoContext = createContext({
    todos: [],
    todo: ['', Date()],
    handleCreatNewTodo: () => {},
    handleTodoInput: () => {},
    handleCompletedTodo: () => {},
    handleDeleteTodo: () => {},
}); 

export default TodoContext;
