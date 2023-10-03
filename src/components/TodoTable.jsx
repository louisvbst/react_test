import React from 'react';
import TodoRow from './TodoRow.jsx'; // Don't forget to create this

const TodoTable = ({ filteredTodos, handleComplete, handleDelete }) => (
    <table className="table table-dark table-striped table-hover">
        {/* ... thead ... */}
        <tbody>
            {filteredTodos.map((todo, index) => (
                <TodoRow key={todo.id} index={index} todo={todo} handleComplete={handleComplete} handleDelete={handleDelete} />
            ))}
        </tbody>
    </table>
);

export default TodoTable;
