import { Component } from "react";

class Todo extends Component {

    constructor(props) {
        super(props);
        let {todo} = this.props;
        this.state = {
            isChecked: todo.isChecked,
            message: todo.message            
        };
    }

    checkTodo = () => {
        this.setState(
            (previousValue, props) =>  ({
                isChecked: !previousValue.isChecked
            })
        )
    }

    render() {
        return (
            <li className="list-group-item d-flex align-items-center">
                {this.state.message}
                <button onClick={this.checkTodo} className="btn btn-sm ms-auto btn-outline-success">&#x2713;</button>
            </li>
        );
    }
}

export default Todo;