import Todo from './Todo'; 

function TodoList({todos}) {
    return (
        <ul className="list-group m-3">
            { todos.map(
                (todo) => <Todo todo={todo} />
            )}
        </ul>       
    )
}

export default TodoList;