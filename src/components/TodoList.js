import Todo from './Todo'
import { useEffect, useMemo, useState } from 'react'
import AddTodo from './AddTodo.js'
import NavBar from './NavBar.js';
import FetchJson from '../utils/FetchJson';
import { useAxios } from '../utils/useAxios';

export const statusEnum = {
    LOADING: "loading",
    LIST: "list",
    ADD: "add",
    REMOVE: "remove"
}
 
export const filterEnum = {
    ALL: "all",
    TODO: "todo",
    COMPLETED: "completed"
}

function TodoList() {
    const [tasks, setTasks] = useState([]);

    const [listStatus, setListStatus] = useState(statusEnum.LIST);
    const [listFilter, setListFilter] = useState(filterEnum.ALL);

    const fetchData = new FetchJson('http://localhost:3001');

    const {response, error, loading} = useAxios({
        method: 'GET',
        url: '/todos',
        headers: { // no need to stringify
          accept: '*/*'
        }
    });

    useEffect(() => {
        setTasks(response); 
    }, [response]);

    let filteredTasks = useMemo(() => {
        switch (listFilter) {
            case filterEnum.COMPLETED:
                return tasks.filter(task => task.completed);
            case filterEnum.TODO:
                return tasks.filter(task => !task.completed);
            default:
                return tasks;
        }
    }, [listFilter, tasks]);



    //Handle Tasks states
    let addTask = (task) => {
        fetchData.postData(task)        
        setTasks([...tasks, task]);
        setListStatus(statusEnum.LIST);
    }

    let handleDelete = (currentTask) => {
        fetchData.deleteData(currentTask);
        let newTasks = [...tasks];
        newTasks.splice(tasks.indexOf(currentTask), 1);
        setTasks(newTasks);
    }

    let toggleCompleted = (currentTask) => {
        let currentTasks = tasks.map((task) => {
            if (task.id === currentTask?.id) {
                task.completed = !task.completed
            }
            return task;
        }
        )
        fetchData.putData(currentTask);
        setTasks(currentTasks);
    }

    return (
        <section classID="todo">
            <h1 className="m-3">Liste de t??ches : {listFilter}</h1>
            <ul className="list-group m-3">
                {loading ?
                    <li className="list-group-item d-flex align-items-center">Loading</li>
                    :
                    filteredTasks.length > 0 ?
                        filteredTasks.map(
                            (task, key) => <Todo 
                                                task={task} 
                                                toggleCompleted={toggleCompleted} 
                                                handleDelete={handleDelete} 
                                                listStatus={listStatus} 
                                                key={key} 
                                        />
                        ) :
                        <li className="list-group-item d-flex align-items-center">Aucune T??che</li>
                }
                {listStatus === statusEnum.ADD ? <AddTodo addTask={addTask} /> : ""}
            </ul>
            <NavBar setListStatus={setListStatus} setListFilter={setListFilter}  listFilter={listFilter} listStatus={listStatus}/>
        </section>
    )
}

export default TodoList;
