import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListDoneMemos from '../components/ListDoneMemos';
import {
    deleteTodo,
    changeDoneToDoing,
} from '../actions';
/*
 * @class DoneRoute `已完成`组件
 */
class DoneRoute extends Component {
    render() {
        const { dispatch, todolist } = this.props;
        return (
            <div>
                <ListDoneMemos
                    todolist={todolist}
                    onDel={index => dispatch(deleteTodo(index))}
                    onDoneToDoing={index => dispatch(changeDoneToDoing(index))}
                />
            </div>
        );
    }
}
DoneRoute.propTypes = {
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
export default connect(mapStateToProps)(DoneRoute);
