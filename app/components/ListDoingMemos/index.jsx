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
        this.props.todolist[changeIndex].done=e.target.checked;
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
                        this.props.todolist.filter((item)=>item.doing).map((item, i) => {
                        if(item.doing){
                            return (
                                <li key={i} style={{opacity:item.doing?"1":''}}>
                                    <input type="checkbox" checked={item.doing} disabled onChange={this.handleChange.bind(this)} data-key={i}/>
                                    <p>{item.todo}</p>
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
