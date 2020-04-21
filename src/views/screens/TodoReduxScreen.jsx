import React from 'react';
import { connect } from 'react-redux'
import { todoInputHandler,todoInputUserHandler,todoInputList, AddTodoHandler } from '../../redux/actions'

class TodoReduxScreen extends React.Component {
    render() {
        return (
            <div>
                <h1 className='container'></h1>
                <h1>Todo Screen</h1>
                <input type="text"
                    className="form-control"
                    placeholder="Input Todo handler"
                    onChange={(e) => this.props.onChangeTodo(e.target.value)}
                />
                <input type="button"
                    className="btn btn-primary"
                    value="Add todo"
                    onClick={() => this.props.onAddTodo(this.props.todo.todoInput)}
                />
                {this.props.todo.todoList.map((val) => {
                    return <p>{val}</p>
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todo: state.todo,
        user: state.user
    }
}

const mapDispatchToProps = {
    onChangeTodo: todoInputHandler,
    onChangeUsername: todoInputUserHandler,
    onAddTodo: AddTodoHandler
}

export default connect(mapStateToProps,mapDispatchToProps) (TodoReduxScreen)