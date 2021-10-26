import React, { Fragment } from 'react';

const Todo = ({ text, isCompleted, deleted, completed }) => {
    return (
        <Fragment>
            <div
                className={`todo-indicator ${
                    isCompleted ? 'bg-success' : 'bg-warning'
                }`}
            ></div>
            <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                    <div className="widget-content-right flex1">
                        <div className="widget-heading">
                            {isCompleted ? <del>{text}</del> : text}
                        </div>
                    </div>
                    <div className="widget-content-left">
                        {''}
                        <button
                            className="border-0 btn-transiton btn btn-outline-success"
                            onClick={completed}
                        >
                            {''}
                            <i className="fa fa-check"></i>
                        </button>{' '}
                        <button
                            className="border-0 btn-transition btn btn-outline-danger"
                            onClick={deleted}
                        >
                            {''}
                            <i className="fa fa-trash"></i>
                            {''}
                        </button>
                        {''}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Todo;
