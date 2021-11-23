import Todo from './Todo'; 

function TodoList({todos}) {
    return (
        <>
            <h1 className="m-3">Liste de tâches</h1>
            <ul className="list-group m-3">
                { todos.map(
                    (todo) => <Todo todo={todo} />
                )}
            </ul>       
        </>
    )
}

export default TodoList;