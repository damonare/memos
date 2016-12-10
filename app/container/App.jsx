import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import {addTodo, search} from '../actions';
import './App.less';
/*
 * @class App `APP`组件
 */
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {dispatch, todolist} = this.props;
        let allMemos = todolist.length;
        let todoNumber=0,
            doingNumber=0,
            doneNumber=0;
        todolist.forEach((item) => {
            if (item.istodo) {
                todoNumber++;
            } else if (item.doing) {
                doingNumber++;
            } else {
                doneNumber++;
            }
        })
        return (
            <div>
                <Header todolist={todolist} onAdd ={text => dispatch(addTodo(text))} onSearch={text => dispatch(search(text))} onKeyUp={this.props.onKeyUp}/>
                <Navigation allMemos={allMemos} todoNumber={todoNumber} doingNumber={doingNumber} doneNumber={doneNumber}/>
                {this.props.children}
            </div>
        );
    }
}
App.propTypes = {
    todolist: PropTypes.arrayOf(PropTypes.shape({todo: PropTypes.string.isRequired, istodo: PropTypes.bool.isRequired, doing: PropTypes.bool.isRequired, done: PropTypes.bool.isRequired}).isRequired).isRequired
};
function mapStateToProps(state) {
    return {todolist: state.todolist};
}
export default connect(mapStateToProps)(App);
