import Todo from './Todo'; 

function TodoList({todos}) {
    return (
        <>
            <h1 className="m-3">Liste de tâches</h1>
            <ul className="list-group m-3">
                { todos.map(
                    (todo,key) => <Todo todo={todo} key={key} />
                )}
            </ul>       
        </>
    )
}

export default TodoList;