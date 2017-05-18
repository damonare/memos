import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListTodoMemos from '../components/ListTodoMemos';
import {
    deleteTodo,
    changeTodoToDoing,
} from '../actions';
/*
 * @class TodoRoute `新建事项`组件
 */
class TodoRoute extends Component {
    render() {
        const { dispatch, todolist } = this.props;
        return (
            <div>
                <ListTodoMemos
                    todolist={todolist}
                    onDel={index=>dispatch(deleteTodo(index))}  onTodoToDoing={index=>dispatch(changeTodoToDoing(index))}
                />
            </div>
        );
    }
}
TodoRoute.propTypes = {
    todolist: PropTypes.arrayOf(
        PropTypes.shape({
            todo: PropTypes.string.isRequired,
            istodo: PropTypes.bool.isRequired,
            doing: PropTypes.bool.isRequired,
            done: PropTypes.bool.isRequired,
        }).isRequired).isRequired,
};
const mapStateToProps = (state) => {
    return { todolist: state.todolist };
};
export default connect(mapStateToProps)(TodoRoute);
