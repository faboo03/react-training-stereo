import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Todo from './Todo'; 

function TodoList(props) {
    const {search} = useParams();

    const [tasks, setTasks] = useState(props.tasks);

    let filteredTasks = tasks;

    if(search === "completed") {
        filteredTasks = tasks.filter(task => task.completed);
    }


    return (
        <>
            <h1 className="m-3">Liste de tâches</h1>
            <ul className="list-group m-3">
                { filteredTasks.map(
                    (task,key) => <Todo todo={task} key={key} />
                )}
            </ul>       
        </>
    )
}

export default TodoList;