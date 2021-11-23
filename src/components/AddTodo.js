import { useNavigate } from "react-router-dom";
import objectHash from "object-hash";
import { now } from "jquery";


function AddTodo({ addTask }) {
    
    const navigate = useNavigate();

    /**
     * Prevent from submitting the form and redirect after that
     * @param {} evt 
     */
    const newTask = (evt) => {
        evt.preventDefault();
        addTask(
            {
                id: objectHash.MD5(evt.target[0].value + now()), 
                name: evt.target[0].value,
                completed: false
            }
        )
        navigate("/");
    }

    return (
        <>
        <h1 className="m-3">Add Task</h1>

        <form className="container" onSubmit={newTask}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Todo : </label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Add a todo" />
            </div>
        </form>
    </>
    )
}


export default AddTodo; 