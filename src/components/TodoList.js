import { useParams } from 'react-router-dom';
import Todo from './Todo'; 

function TodoList({tasks, toggleCompleted}) {
    const {search} = useParams();

    let filteredTasks = tasks;

    if(search === "completed") {
        filteredTasks = tasks.filter(task => task.completed);
    }

    return (
        <>
            <h1 className="m-3">Liste de tâches</h1>
            <ul className="list-group m-3">
                { filteredTasks.length > 0 ? 
                    filteredTasks.map(
                        (task,key) => <Todo {...task} toggleCompleted={toggleCompleted} key={key} />
                    ) : 
                    <li className="list-group-item d-flex align-items-center">Aucune Tâche</li>
            }
            </ul>       
        </>
    )
}

export default TodoList;