import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'

function App() {

    const [count, setCount] = useState(0)
    const [input, setInput] = useState("");
    const currentToDoList = [{id: 1, task: 'Acheter un balai (BOGDAN FDP)', complete: false},
        {id: 2, task: 'Acheter une poubelle de la bonne taille', complete: false},
        {id: 3, task: 'Test réaménagement salon', complete: false},
        {id: 4, task: 'Ping Pong Table', complete: false},
        {id: 5, task: 'Trouver étagère pour les verres', complete: false},
        {id: 6, task: 'Accroche-vélo', complete: false},
        {id: 7, task: 'Armoire de rangement BEBETTE', complete: false},
        {id: 8, task: 'Réarrangement matériel de cuisine', complete: false},
        {id: 9, task: 'Acheter un frigo', complete: false},
        {id: 10, task: 'Soirée Poker (rallye de kot)', complete: false},
        {id: 11, task: 'Pétanque', complete: false},
        {id: 12, task: 'Amsterdam Bebou', complete: false},
        {id: 13, task: 'Resto de Kot', complete: false},
        {id: 14, task: 'Escape Game', complete: false},
        {id: 15, task: 'Soirée jeux de société', complete: false},
        {id: 16, task: 'Cuisine du monde', complete: false},
        {id: 17, task: 'Aller au Fox', complete: false}]
    const [todoList, setTodoList] = useState(currentToDoList);
    useEffect(() => {
        axios.get('http://localhost:5000/api/todos')
            .then(response => {
                setTodoList(response.data);
            })
            .catch(error => {
                console.error('Error fetching data', error);
            });
    }, []);
    const handleClick = () => {
        handleSubmit();
    };

    const handleSubmit = () => {
        const id = todoList.length + 1;
        if (input.length > 0) {
            setTodoList((prev) => [
                ...prev,
                {
                    id: id,
                    task: input,
                    complete: false,
                },
            ]);
        }
        setInput("");
    };



    const handleComplete = (id) => {
        let updatedList = todoList.map((task) => {
            if (task.id === id) {
                return { ...task, complete: !task.complete };
            }
            return task;
        });
        setTodoList(updatedList);
    };


    return (
        <>
            <h1 className="p-2"><u>To Do List</u></h1>
            <h3>Qu'est-ce qui doit être fait pour améliorer la colloc?</h3>
            <div className="header p-4">
                <div className="row p-2">
                    <div className="col-8">
                        <form id="add_to_do" onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();}}
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
            </div>
            <table className="table table-dark table-striped table-hover">
                <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Etat
                    </th>
                </tr>
                </thead>
                <tbody>
                {todoList.map((todo, index) => (
                    <tr key={todo.id}>
                        <td>{index + 1}</td>
                        <td>{todo.task}</td>
                        <td>
                            <button onClick={() => handleComplete(todo.id)}>
                                {todo.complete ? "Fini" : "A faire"}
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default App
