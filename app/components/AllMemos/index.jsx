import React, {Component, PropTypes} from 'react';
import ListTodoMemos from '../components/ListTodoMemos';
import {connect} from 'react-redux';
import Header from '../components/Header';
import ListDoingMemos from '../components/ListDoingMemos';
import ListDoneMemos from '../components/ListDoneMemos';
import './App.less';
import '../static/css/reset.css';
import {
    addTodo,
    deleteTodo,
    changeTodoToDoing,
    changeDoingToDone,
    changeDoingToTodo,
    changeDoneToDoing,
    search} from '../actions';

export default class AllMemos extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
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
        )
    }
}
