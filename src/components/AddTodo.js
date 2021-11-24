import { useEffect, useRef, useState } from 'react';
import uniqid from 'uniqid'; 


function AddTodo({ addTask }) {

    const [value, setValue] = useState("");

    const inputEl = useRef(null);
    useEffect(() => {
        inputEl.current.focus();
    },[]);
    
    const handleChange = () => {
        setValue(inputEl.current.value);
    }

    const newTask = (e) => {
        e.preventDefault();
        addTask(
            {
                id: uniqid(),
                name: value,
                completed: false
            }
        )
    }

    return (
        <li className="list-group-item d-flex align-items-center">
            <form onSubmit={newTask}>
                <input ref={inputEl} type="text" onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="Add a todo" value={value} />
            </form>
        </li>

    )
}


export default AddTodo; 