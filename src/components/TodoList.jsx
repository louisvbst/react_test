import { useState, useEffect } from 'react'
import "react-calendar/dist/Calendar.css";
import FilterDropdown from './FilterComponent';
import TodoInput from './TodoInput';
import TodoTable from './TodoTable';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
const hostName = '192.168.0.141'

function TodoList() {
    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get(`http://${hostName}:5000/api/todos`)
            .then(response => {
                setTodoList(response.data);
            })
            .catch(error => {
                console.error('Error fetching data', error);
            });
    }, []);
    const postTodos = async (path, toDo) => {
        try {
            axios.post(`http://${hostName}:5000/api/todos/${path}`, {
                id: toDo.id,
                task: toDo.task,
                state: toDo.state || false,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.error('Error posting todo', error);
        }
    };

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const filteredTodos = todoList.filter(todo => {
        if (filter === "completed") {
            return todo.state;
        } else if (filter === "pending") {
            return !todo.state;
        } else {
            return true;  // if no filter is applied, show all todos
        }
    });

    const handleSubmit = () => {
        const id = todoList.length + 1;
        if (input.length > 0) {
            setTodoList((prev) => [
                ...prev,
                {
                    id: id,
                    task: input,
                    state: false,
                },
            ]);
        }
        postTodos('insert', {
            task: input,
            state: false,
        });
        setInput("");
    };

    const handleComplete = (id) => {
        let updatedList = todoList.map((task) => {
            if (task.id === id) {
                return { ...task, state: !task.state };
            }
            return task;
        });

        const updatedTask = updatedList.find(task => task.id === id);
        console.log("Sending data:", { id: updatedTask.id, state: updatedTask.state });
        postTodos('update', {
            id: updatedTask.id,
            state: updatedTask.state
        });
        setTodoList(updatedList);

    };

    const handleDelete = (id) => {
        try {
            axios.delete(`http://${hostName}:5000/api/todos/delete`, {
                data: { id: id },
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setTodoList(prevTodos => prevTodos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error('Error posting todo', error);
        }
    };
    return (
        <div className="row">
            <FilterDropdown onFilterChange={handleFilterChange} />
            <div className="col-9">
                <h1 className="p-2"><u>To Do List</u></h1>
                <TodoInput input={input} setInput={setInput} handleSubmit={handleSubmit} />
                <TodoTable filteredTodos={filteredTodos} handleComplete={handleComplete} handleDelete={handleDelete} />
            </div>
        </div>
    );
}
export default TodoList;
