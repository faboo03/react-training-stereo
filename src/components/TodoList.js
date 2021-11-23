import Todo from './Todo'
import data from '../data.json'
import { useState } from 'react'
import AddTodo from './AddTodo.js'
import NavBar from './NavBar.js';

export const statusEnum = {
    LIST: "list",
    COMPLETED:"completed",
    ADD: "add",
    REMOVE: "remove"
}

function TodoList() {
    const [tasks, setTasks] = useState(data);

    const [listStatus, setListStatus] = useState(statusEnum.LIST);

    let addTask = (task) => {
        setTasks([...tasks, task]);
        setListStatus(statusEnum.LIST);
    }

    let toggleCompleted = (taskId) => {
        let currentTask = tasks.map((task) => {
            if (task.id === taskId) {
                task.completed = !task.completed
            }
            return task;
        }
        )
        setTasks(currentTask);
    }

    let handleDelete = (task) => {
        let newTasks = [...tasks]; 
        newTasks.splice(tasks.indexOf(task),1);
        setTasks(newTasks);
    }

    let filteredTasks = tasks;

    if (listStatus === statusEnum.COMPLETED) {
        filteredTasks = tasks.filter(task => task.completed);
    }

    return (
        <section classID="todo">
            <h1 className="m-3">Liste de tâches</h1>
            <ul className="list-group m-3">
                {filteredTasks.length > 0 ?
                    filteredTasks.map(
                        (task, key) => <Todo {...task} toggleCompleted={toggleCompleted} handleDelete={handleDelete} status={listStatus} key={key} />
                    ) :
                    <li className="list-group-item d-flex align-items-center">Aucune Tâche</li>
                }
            </ul>

            {listStatus === statusEnum.ADD? <AddTodo addTask={addTask} />:""}
           
            <NavBar setListStatus={setListStatus} />
        </section>
    )
}

export default TodoList;