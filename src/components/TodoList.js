import Todo from './Todo'
import { useState } from 'react'
import AddTodo from './AddTodo.js'
import NavBar from './NavBar.js';

export const statusEnum = {
    LOADING:"loading",
    LIST: "list",
    ADD: "add",
    REMOVE: "remove"
}

export const filterEnum = {
    ALL: "all",
    TODO: "todo",
    COMPLETED:"completed"
}


function TodoList() {
    const [tasks, setTasks] = useState([]);

    const [listStatus, setListStatus] = useState(statusEnum.LIST);
    const [listFilter, setListFilter] = useState(filterEnum.ALL);

    //Handle Tasks states
    let addTask = (task) => {
        setTasks([...tasks, task]);
        setListStatus(statusEnum.LIST);
    }

    let toggleCompleted = (currentTask) => {
        let currentTasks = tasks.map((task) => {
            if (task.id === currentTask?.id) {
                task.completed = !task.completed
            }
            return task;
        }
        )
        setTasks(currentTasks);
    }

    let handleDelete = (currentTask) => {
        let newTasks = [...tasks]; 
        newTasks.splice(tasks.indexOf(currentTask),1);
        setTasks(newTasks);
    }
    
    // handle filter tasks
    let filteredTasks = tasks;
    switch (listStatus) {
        case filterEnum.COMPLETED:
            filteredTasks = tasks.filter(task => task.completed);
            break;
        case filterEnum.TODO:
            filteredTasks = tasks.filter(task => !task.completed);
            break;    
        default:
            filteredTasks = tasks;
            break;
    }

    return (
        <section classID="todo">
            <h1 className="m-3">Liste de tâches</h1>
            <ul className="list-group m-3">
                {statusEnum === filterEnum.LOADING ? 
                        <li className="list-group-item d-flex align-items-center">Loading</li>
                :
                    filteredTasks.length > 0 ?
                        filteredTasks.map(
                            (task, key) => <Todo task={task} toggleCompleted={toggleCompleted} handleDelete={handleDelete} listStatus={listStatus} key={key} />
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