function Todo({name, completed, id,  toggleCompleted}) {
    const onClick = () => {
        toggleCompleted(id);
    }

    return (
        <li className="list-group-item d-flex align-items-center">
            {name}
            <button onClick={onClick} className={completed?"btn btn-sm ms-auto btn-success":"btn btn-sm ms-auto btn-outline-success"} >&#x2713;</button>
        </li>
    );
}

export default Todo;