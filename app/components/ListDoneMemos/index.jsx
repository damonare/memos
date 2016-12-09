import React, {Component,PropTypes} from 'react';
class ListDoneMemos extends Component {
    constructor(props) {
        super(props);
        this.state={
            show:true
        }
    }
    handleDel(e) {
        let delindex = e.target.getAttribute("data-key");
        this.props.onDel(delindex);
    }
    handleToDoing(e){
        let changeIndex=e.target.getAttribute("data-key");
        this.props.onDoneToDoing(changeIndex);
    }
    handleClick(e) {
        this.setState({
            show:!this.state.show
        })
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
                <h2 onClick={this.handleClick.bind(this)}>
                    <span>
                        已完成
                    </span>
                    <span>
                        {number}
                    </span>
                </h2>
                <ul style={{display:this.state.show?"block":'none'}}>
                    {
                        this.props.todolist.map((item, i) => {
                        if(item.done){
                            return (
                                <li key={i} style={{textDecoration:item.done?"line-through":"",opacity:item.done?"0.4":''}}>
                                    <input type="checkbox" checked={item.done} disabled/>
                                    <p data-key={i} onClick={this.handleToDoing.bind(this)}>{item.todo}</p>
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
ListDoneMemos.propTypes={
    onDoneToDoing: PropTypes.func.isRequired,
    onDel:PropTypes.func.isRequired
}
export default ListDoneMemos;
