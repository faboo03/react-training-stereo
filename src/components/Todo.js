import { FaCheck, FaTrash } from "react-icons/fa";
import { statusEnum } from "./TodoList";


function Todo({task, toggleCompleted, listStatus, handleDelete}) {
    const onClick = () => {
        if(statusEnum.DELETE === listStatus) {
            handleDelete(task)
        } else {
            toggleCompleted(task);
        }
    }

    return (
        <li className="list-group-item d-flex align-items-center">
            {task.name}
            {
                listStatus === statusEnum.DELETE ?
                    <button onClick={onClick} className={"btn btn-sm ms-auto btn-outline-danger"} ><FaTrash/></button> : 
                    <button onClick={onClick} className={task.completed?"btn btn-sm ms-auto btn-success":"btn btn-sm ms-auto btn-outline-success"} ><FaCheck /></button> 
            }                
        </li>
    );
}

export default Todo;