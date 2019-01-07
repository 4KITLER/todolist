import React from 'react';

const TodoListItem = ({label, important = false}) => {

    const style = {
        color: important ? 'tomato' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };


    return (
        <div className = "todo-list-item">
            <span style={style}>
                { label }
                <button type="button"
                className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        </div>
    );
};

export default TodoListItem;