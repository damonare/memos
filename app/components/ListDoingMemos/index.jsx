import React, {Component} from 'react';
class ListDoingMemos extends Component {
    constructor(props) {
        super(props);
    }
    handleDel(e) {
        let delindex = e.target.getAttribute("data-key");
        this.props.todolist.splice(delindex, 1);
        this.props.onDel(this.props.todolist);
    }
    handleChange(e){
        let changeIndex=e.target.getAttribute("data-key");
        console.log(changeIndex)
        this.props.todolist[changeIndex].istodo=!e.target.checked;
        this.props.todolist[changeIndex].doing=e.target.checked;
        this.props.onFinsh(this.props.todolist);
    }
    handleToDone(e){
        let changeIndex=e.target.getAttribute("data-key");
        this.props.todolist[changeIndex].doing=false;
        this.props.todolist[changeIndex].done=true;
        this.props.onFinsh(this.props.todolist);
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
                                    <input type="checkbox" checked={item.doing} onChange={this.handleChange.bind(this)} data-key={i}/>
                                    <p data-key={i} onClick={this.handleToDone.bind(this)}>{item.todo}</p>
                                    <button className="destroy" data-key={i} onClick={this.handleDel.bind(this)}>-</button>
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
