import React, {Component} from 'react';
class ListDoneMemos extends Component {
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
            if(item.done){
                number++;
            }
        })
        return (
            <main>
                <h2>
                    <span>
                        已完成
                    </span>
                    <span>
                        {number}
                    </span>
                </h2>

                <ul>
                    {
                        this.props.todolist.filter((item)=>item.done).map((item, i) => {
                        if(item.done){
                            return (
                                <li key={i} style={{textDecoration:item.done?"line-through":"",opacity:item.done?"0.5":''}}>
                                    <input type="checkbox" checked={item.done} onChange={this.handleChange.bind(this)} data-key={i}/>
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
export default ListDoneMemos;
