import React, {Component,PropTypes} from 'react';
import { findDOMNode } from 'react-dom';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true
        }
    }
    handleKeyUp(e) {
        if (e.keyCode != "13") {
            this.setState({hidden: true})
        }
    }
    handleSearch(e){
        e.preventDefault();
        const inputNode = findDOMNode(this.refs.inputnew);
        const text = inputNode.value.trim();
        this.props.onSearch(text);
        inputNode.value = '';
    }
    handleClick(e) {
        e.preventDefault();
        const inputNode = findDOMNode(this.refs.inputnew);
        const text = inputNode.value.trim();
        if (text != '') {
            this.props.onAdd(text);
            this.setState({hidden: true})
        } else {
            console.log(this.state.hidden)
            this.setState({hidden: false})
        }
        inputNode.value = '';
    }
    render() {
        return (
            <header>
                <section>
                    <form>
                        <label htmlFor="new-todo">备忘录</label>
                        <input onKeyUp={this.handleKeyUp.bind(this)}  ref="inputnew" type="text" placeholder="新建备忘录" defaultValue={this.props.text} id="new-todo"/>
                        <div>
                            <button onClick={e => this.handleClick(e)}>添加</button>
                            <button onClick={e => this.handleSearch(e)}>搜索</button>
                        </div>
                    </form>
                </section>
                <div className='hint' style={{
                    display: this.state.hidden?"none":"inline-block"
                }}>
                    <div className="test">
                        <span className="bot"></span>
                        <span className="top"></span>
                    </div>
                    <div>
                        请填写此字段
                    </div>
                </div>
            </header>
        )
    }
}
Header.propTypes={
    onAdd: PropTypes.func.isRequired,
    onSearch:PropTypes.func.isRequired
}
export default Header;
