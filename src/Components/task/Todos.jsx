import React, { useContext } from 'react';
import Todo from './Todo';
import TodoContext from './../context/TodoContext';

const Todos = () => {
    const context = useContext(TodoContext);
    const { todos, handleDeleteTodo, handleCompletedTodo } = context;
    //     console.log('Todos.jsx renderd()');
    return (
        <ul className="list-group list-group-flash mx-0 px-0 ">
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <li key={todo.id} className="list-group-item ">
                        <Todo
                            text={todo.text}
                            isCompleted={todo.completed}
                            deleted={() => {
                                handleDeleteTodo(todo.id);
                            }}
                            completed={() => {
                                handleCompletedTodo(todo.id);
                            }}
                        />
                    </li>
                ))
            ) : (
                <div className="alert alert-light mt-2 w-75 mx-auto">
                    <p className="text-center ">
                        <i className="	fa fa-close"></i>
                        شما هیچ برنامه ای برای امروز ندارید{' '}
                        <i className="	fa fa-close"></i>
                    </p>
                </div>
            )}
        </ul>
    );
};

export default Todos;
