import React, {Component,PropTypes} from 'react';
/*
 * @class ListDoingMemos `正在进行`组件
 */
class ListDoingMemos extends Component {
    constructor(props) {
        super(props);
        /*
        *  show属性控制本页面事项的上展开隐藏功能
        */
        this.state={
            show:true
        }
    }
    /*
     * @method  handleDel 删除事项
     */
    handleDel(e) {
        let delindex = e.target.getAttribute("data-key");
        this.props.onDel(delindex);
    }
    /*
     * @method  handleToTodo 改变状态doing->todo
     */
    handleToTodo(e) {
        let changeIndex = e.target.getAttribute("data-key");
        this.props.onDoingToTodo(changeIndex);
    }
    /*
     * @method  handleToDone 改变状态doing->done
     */
    handleToDone(e){
        let changeIndex=e.target.getAttribute("data-key");
        this.props.onDoingToDone(changeIndex);
    }
    /*
     * @method  handleClick 事项内容 展开or隐藏
     */
    handleClick(e) {
        this.setState({
            show:!this.state.show
        })
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
                <h2 onClick={this.handleClick.bind(this)}>
                    <span>
                        正在进行
                    </span>
                    <span>
                        {number}
                    </span>
                </h2>
                <ul  style={{display:this.state.show?"block":'none'}}>
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
ListDoingMemos.propTypes={
    onDoingToDone: PropTypes.func.isRequired,
    onDoingToTodo: PropTypes.func.isRequired,
    onDel:PropTypes.func.isRequired
}
export default ListDoingMemos;
