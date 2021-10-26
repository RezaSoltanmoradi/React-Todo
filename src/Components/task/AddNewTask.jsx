import React, { useContext, useEffect, useRef } from 'react';
import TodoContext from '../context/TodoContext';

const AddNewTask = () => {
    const context = useContext(TodoContext);
    const { handleTodoInput, handleCreatNewTodo,todo } = context;
    const inputRef=useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    })
    return (
        <div className="w-50 mx-auto fixed-tob mb-2 p-3 wrapper">
            <form
                className="form-inline justify-content-center"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="input-group w-100">
                    <input
                        type="text"
                        className="form-control rounded "
                        placeholder="اضافه کردن برنامه جدید"
                        value={todo}
                        onChange={handleTodoInput}
                        ref={inputRef}
                    />
                    <div className="input-group-prepend">
                        <button
                            type="submit"
                            className="btn btn-sm btn-success rounded fa fa-plus-square text-light"
                            onClick={handleCreatNewTodo}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddNewTask;
