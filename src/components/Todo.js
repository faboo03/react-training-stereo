import { Component } from "react";

class Todo extends Component {

    constructor(props) {
        super(props);
        let {todo} = this.props;
        this.state = {
            isChecked: todo.completed,
            name: todo.name            
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
        let className = "list-group-item d-flex align-items-center";        
        return (
            <li className={className + (this.state.isChecked?" bg-success":"")}>
                {this.state.name}
                <button onClick={this.checkTodo} className={this.state.isChecked?"btn btn-sm ms-auto btn-outline-success":"btn btn-sm ms-auto btn-success"} >&#x2713;</button>
            </li>
        );
    }
}

export default Todo;