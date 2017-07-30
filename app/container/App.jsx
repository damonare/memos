import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { addTodo, search } from '../actions';
import './App.less';
// React.PropTypes is deprecated as of React v15.5

/*
 * @class App `APP`组件
 */
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }
    componentDidMount() {
        //  react setState 测试用例
        this.setState({ value: this.state.value + 1 });
        console.log(this.state.value);
        this.setState({ value: this.state.value + 1 });
        console.log(this.state.value);
        this.setState({ value: this.state.value + 1 });
        console.log(this.state.value);
        setTimeout(() => {
            this.setState({ value: this.state.value + 1 });
            console.log(this.state.value);
            this.setState({ value: this.state.value + 1 });
            console.log(this.state.value);
        }, 0);
    }
    render() {
        const { searchText, todolist, addTodos } = this.props;
        const allMemos = todolist.length;
        let [todoNumber, doingNumber, doneNumber] = [0, 0, 0];
        todolist.forEach((item) => {
            if (item.istodo) {
                todoNumber += 1;
            } else if (item.doing) {
                doingNumber += 1;
            } else {
                doneNumber += 1;
            }
        });
        return (
            <div>
                <Header
                    todolist={todolist}
                    onAdd={text => addTodos(text)}
                    onSearch={text => searchText(text)}
                    onKeyUp={this.props.onKeyUp}
                />
                <Navigation
                    allMemos={allMemos}
                    todoNumber={todoNumber}
                    doingNumber={doingNumber}
                    doneNumber={doneNumber}
                />
                {this.props.children}
            </div>
        );
    }
}
App.propTypes = {
    todolist: PropTypes.arrayOf(PropTypes.shape({
        todo: PropTypes.string.isRequired,
        istodo: PropTypes.bool.isRequired,
        doing: PropTypes.bool.isRequired,
        done: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
};

const mapStateToProps = (state) => {
    return { todolist: state.todolist };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodos: (text) => {
            dispatch(addTodo(text));
        },
				searchText: (text) => {
					dispatch(search(text))
				}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
