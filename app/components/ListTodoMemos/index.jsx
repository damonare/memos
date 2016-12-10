import React, {Component,PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
class ListTodoMemos extends Component {
    constructor(props) {
        super(props);
        /*
        *  show属性控制本页面事项的上展开隐藏功能
        */
        this.state={
            show:true
        }
    }
    handleDel(e) {
        let delindex = e.target.getAttribute("data-key");
        this.props.onDel(delindex);
    }
    handleChange(e) {
        let changeIndex = e.target.getAttribute("data-key");
        this.props.onTodoToDoing(changeIndex);
    }
    handleClick(e) {
        this.setState({
            show:!this.state.show
        })
    }
    render() {
        let number = 0;
        this.props.todolist.map((item) => {
            if (item.istodo) {
                number++;
            }
        })
        return (
            <main>
                <h2 onClick={this.handleClick.bind(this)}>
                    <span>
                        新建事项
                    </span>
                    <span>
                        {number}
                    </span>
                </h2>
                <ul style={{display:this.state.show?"block":'none'}}>
                    {this.props.todolist.map((item, i) => {
                        if (item.istodo) {
                            return (
                                <li key={i} style={{
                                    opacity: item.istodo
                                        ? "0.7"
                                        : ''
                                }}>
                                    <input type="checkbox" checked={!item.istodo} onChange={this.handleChange.bind(this)} data-key={i}/>
                                    <p>{item.todo}</p>
                                    <button className="destroy" data-key={i} onClick={this.handleDel.bind(this)}>×</button>
                                </li>
                            )
                        }
                    })
                }
                </ul>
            </main>
        )
    }
}
ListTodoMemos.propTypes={
    onTodoToDoing: PropTypes.func.isRequired,
    onDel:PropTypes.func.isRequired
}
export default ListTodoMemos;
