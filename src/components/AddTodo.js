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
        <ul className="list-group m-3">
            <form onSubmit={newTask}>
                <input ref={inputEl} type="text" onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="Add a todo" value={value} />
            </form>
        </ul>
    )
}


export default AddTodo; 