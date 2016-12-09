import React, {Component, PropTypes} from 'react';
import ListTodoMemos from '../components/ListTodoMemos';
import {connect} from 'react-redux';
import Header from '../components/Header';
import ListDoingMemos from '../components/ListDoingMemos';
import ListDoneMemos from '../components/ListDoneMemos';
import './index.less';
import '../static/css/reset.css';
import {addTodo, changeTodoToDoing, changeDoingToDone, search} from '../actions';
class App extends Component {
    constructor(props) {
        super(props);
    }
    handleFinsh(rows) {
        this.setState({todolist: rows});
        localStorage.setItem("todos", JSON.stringify(rows));
    }
    render() {
        const {dispatch, todolist} = this.props;
        return (
            <div>
                <Header onAdd ={text => dispatch(addTodo(text))} onSearch={text => dispatch(search(text))} todolist={todolist} onKeyUp={this.props.onKeyUp}/>
                <ListTodoMemos onDel={this.handleFinsh.bind(this)} todolist={todolist} onFinsh={this.handleFinsh.bind(this)}/>
                <ListDoingMemos todolist={todolist} onDel={this.handleFinsh.bind(this)} onFinsh={this.handleFinsh.bind(this)}/>
                <ListDoneMemos todolist={todolist}
                    onDel={this.handleFinsh.bind(this)} onFinsh={this.handleFinsh.bind(this)}/>
            </div>
        );
    }
}
App.propTypes = {
    todolist: PropTypes.arrayOf(PropTypes.shape({todo: PropTypes.string.isRequired, istodo: PropTypes.bool.isRequired, doing: PropTypes.bool.isRequired, done: PropTypes.bool.isRequired}))
};
function mapStateToProps(state) {
    return {todolist: state.todolist};
}
export default connect(mapStateToProps)(App);
