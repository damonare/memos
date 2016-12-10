import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Navigation from '../components/Navigation';
import ListDoingMemos from '../components/ListDoingMemos';
import {
    deleteTodo,
    changeDoingToDone,
    changeDoingToTodo,
} from '../actions';
/*
 * @class DoingRoute `正在进行`组件
 */
class DoingRoute extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {dispatch, todolist} = this.props;
        return (
            <div>
                <ListDoingMemos
                    todolist={todolist}
                    onDel={index=>dispatch(deleteTodo(index))} onDoingToDone={index=>dispatch(changeDoingToDone(index))}
                    onDoingToTodo={index=>dispatch(changeDoingToTodo(index))}
                    />
            </div>
        );
    }
}
DoingRoute.propTypes = {
    todolist:PropTypes.arrayOf(PropTypes.shape({
    todo: PropTypes.string.isRequired,
    istodo: PropTypes.bool.isRequired,
    doing: PropTypes.bool.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired).isRequired
};
function mapStateToProps(state) {
    return {todolist: state.todolist};
}
export default connect(mapStateToProps)(DoingRoute);
