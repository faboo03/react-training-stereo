import { useState } from 'react';
import uniqid from 'uniqid'; 


function AddTodo({ addTask }) {

    const [value, setValue] = useState("");

    const handleChange = (evt) => {
        setValue(evt.target.value);
    }

    const newTask = (evt) => {
        evt.preventDefault();
        addTask(
            {
                id: uniqid(),
                name: value,
                completed: false
            }
        )
    }

    return (
        <ul className="list-group m-3">
            <form onSubmit={newTask}>
                <input type="text" onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="Add a todo" value={value} />
            </form>
        </ul>
    )
}


export default AddTodo; 