import React, { useState } from 'react'
import "../ToDoList/Todo.css"

function ToDoApp() {

    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && inputValue.trim().length > 0) {
            setTasks([...tasks, inputValue.trim()]);
            setInputValue('');
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const clearAllTasks = () => {
        setTasks([]);
    };
    return (
        <>

            <div className="Todo__container">
                <h1>TODO LIST APP</h1>
                <div className="Todo__input-field">
                    <textarea
                        placeholder="Enter your new todo"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                    ></textarea>
                    {/* <i className="uil uil-notes note-icon"></i> */}
                </div>

                <ul className="Todo__todoLists">
                    {tasks.map((task, index) => (
                        <li key={index} className="list pending">
                            <input type="checkbox" />
                            <span className="task">{task}</span>
                            <i className="uil uil-trash" onClick={() => deleteTask(index)}></i>
                        </li>
                    ))}
                </ul>

                <div className="Todo__pending-tasks">
                    <span>
                        You have <span className="Todo__pending-num">{tasks.length}</span> tasks pending.
                    </span>
                    <button className="Todo__clear-button" onClick={clearAllTasks}>Clear All</button>
                </div>
            </div>


        </>
    )
}

export default ToDoApp
