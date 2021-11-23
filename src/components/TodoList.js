import Todo from './Todo'; 

function TodoList({tasks}) {
    console.log(tasks);
    return (
        <>
            <h1 className="m-3">Liste de tâches</h1>
            <ul className="list-group m-3">
                { tasks.map(
                    (task,key) => <Todo todo={task} key={key} />
                )}
            </ul>       
        </>
    )
}

export default TodoList;