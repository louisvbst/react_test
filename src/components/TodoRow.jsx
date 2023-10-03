import React from 'react';

const TodoRow = ({ index, todo, handleComplete, handleDelete }) => (
    <tr valign={'middle'}>
        <td>{index + 1}</td>
        <td>{todo.task}</td>
        <td>
            <button
                className={`btn ${todo.state ? "btn-success" : "btn-secondary"}`}
                onClick={() => handleComplete(todo.id)}>
                {todo.state ? "Fini" : "A faire"}
            </button>
        </td>
        <td>
            <i className="fa fa-trash trash-icon" onClick={() => handleDelete(todo.id)}></i>
        </td>
    </tr>
);

export default TodoRow;
