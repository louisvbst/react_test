import React from 'react';

const TodoInput = ({ input, setInput, handleSubmit }) => {
    const handleClick = () => {
        handleSubmit();
    };
    return (
        <div className="row p-3 mb-2">
            <div className="col-8 input-form">
                <form action="/insert" id="add_to_do" onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
                >
                    <input className="form-control" placeholder="Add To Do..." value={input}
                           onInput={(e) => setInput(e.target.value)}
                    />
                </form>
            </div>
            <div className="col-4">
                <button className="btn-primary" onClick={handleClick}>
                    <span>Ajouter</span>
                </button>
            </div>
        </div>
    )
};

export default TodoInput;
