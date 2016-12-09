import React, {Component, PropTypes} from 'react';
import ListTodoMemos from '../components/ListTodoMemos';
import {connect} from 'react-redux';
import Header from '../components/Header';
import ListDoingMemos from '../components/ListDoingMemos';
import ListDoneMemos from '../components/ListDoneMemos';
import './index.less';
import '../static/css/reset.css';
import {
    addTodo,
    deleteTodo,
    changeTodoToDoing,
    changeDoingToDone,
    changeDoingToTodo,
    changeDoneToDoing,
    search} from '../actions';
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {dispatch, todolist} = this.props;
        return (
            <div>
                <Header
                    todolist={todolist}
                    onAdd ={text => dispatch(addTodo(text))}
                    onSearch={text => dispatch(search(text))}
                    onKeyUp={this.props.onKeyUp}/>
                <ListTodoMemos
                    todolist={todolist}
                    onDel={index=>dispatch(deleteTodo(index))}  onTodoToDoing={index=>dispatch(changeTodoToDoing(index))}
                    />
                <ListDoingMemos
                    todolist={todolist}
                    onDel={index=>dispatch(deleteTodo(index))} onDoingToDone={index=>dispatch(changeDoingToDone(index))}
                    onDoingToTodo={index=>dispatch(changeDoingToTodo(index))}
                    />
                <ListDoneMemos
                    todolist={todolist}
                    onDel={index=>dispatch(deleteTodo(index))} onDoneToDoing={index=>dispatch(changeDoneToDoing(index))}/>
            </div>
        );
    }
}
App.propTypes = {
    todolist: PropTypes.array.isRequired
};
function mapStateToProps(state) {
    return {todolist: state.todolist};
}
export default connect(mapStateToProps)(App);
