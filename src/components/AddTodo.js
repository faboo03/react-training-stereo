
function AddTodo() {
    return (
        <>
        <h1 className="m-3">Add Task</h1>

        <form class="container">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Todo : </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Add a todo" />
            </div>
        </form>
    </>
    )
}


export default AddTodo; 