

function Todo({ todo }) {
    return (
        <li className="list-group-item d-flex align-items-center" id={todo.id}>
            { todo.message }
            {
                todo.isChecked ? 
                  <button className="btn btn-sm ms-auto btn-outline-canceled">&#x274C;</button>
                : <button className="btn btn-sm ms-auto btn-outline-success">&#x2713;</button>
            }           
        </li>
    )
}

export default Todo;