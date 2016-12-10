import React, {Component} from 'react';
import NavLink from './navLink';
export default class Navigation extends Component {
    constructor() {
        super();
    }
    render(){
        return(
            <div>
                <ol>
                    <li>
                        <NavLink to="/memos">全部<span>{this.props.allMemos}</span></NavLink>

                    </li>
                    <li>
                        <NavLink to="/memos/todo">新建事项<span>{this.props.todoNumber}</span></NavLink>

                    </li>
                    <li>
                        <NavLink to="/memos/doing">正在进行<span>{this.props.doingNumber}</span></NavLink>

                    </li>
                    <li>
                        <NavLink to="/memos/done">已完成<span>{this.props.doneNumber}</span></NavLink>

                    </li>
                </ol>
            </div>
        )
    }
}
