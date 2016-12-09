import React, {Component} from 'react';
class ListTodoMemos extends Component {
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
            if(item.istodo){
                number++;
            }
        })
        return (
            <main>
                <h2>
                    <span>
                        新建事项
                    </span>
                    <span>
                        {number}
                    </span>
                </h2>

                <ul>
                    {
                        this.props.todolist.map((item, i) => {
                        return (
                            <li key={i} style={{textDecoration:item.istodo?"line-through":"",opacity:item.istodo?"0.5":''}}>
                                <select className="" name="" data-key={i} onChange={this.handleChange.bind(this)}>
                            		<option >--请选择--</option>
                            		<option value="0">归为待办</option>
                            		<option value="1">正在进行</option>
                            		<option value="2">已完成</option>
                            	</select>
                                <p>{item.todo}</p>
                                <button className="destroy" data-key={i} onClick={this.handleDel.bind(this)}>-</button>
                            </li>
                        )
                    })
                }
                </ul>
            </main>
        )
    }
}
export default ListTodoMemos;
