import React, {Component} from 'react';
class ListDoingMemos extends Component {
    constructor(props) {
        super(props);
    }
    handleDel(e) {
        let delindex = e.target.getAttribute("data-key");
        this.props.onDel(delindex);
    }
    handleToTodo(e) {
        let changeIndex = e.target.getAttribute("data-key");
        this.props.onDoingToTodo(changeIndex);
    }
    handleToDone(e){
        let changeIndex=e.target.getAttribute("data-key");
        this.props.onDoingToDone(changeIndex);
    }
    render() {
        let number=0;
        this.props.todolist.map((item)=>{
            if(item.doing){
                number++;
            }
        })
        return (
            <main>
                <h2>
                    <span>
                        正在进行
                    </span>
                    <span>
                        {number}
                    </span>
                </h2>
                <ul>
                    {
                        this.props.todolist.map((item, i) => {
                        if(item.doing){
                            return (
                                <li key={i} style={{opacity:item.doing?"1":''}}>
                                    <input type="checkbox" checked={item.doing} onChange={this.handleToTodo.bind(this)} data-key={i}/>
                                    <p data-key={i} onClick={this.handleToDone.bind(this)}>{item.todo}</p>
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
export default ListDoingMemos;
