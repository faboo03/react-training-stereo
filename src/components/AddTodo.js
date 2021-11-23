
function AddTodo() {
    return (
        <>
        <h1 className="m-3">Add Task</h1>

        <form className="container">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Todo : </label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Add a todo" />
            </div>
        </form>
    </>
    )
}


export default AddTodo; 