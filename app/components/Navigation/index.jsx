import React, {Component} from 'react';
import NavLink from '../navLink';
export default class Navigation extends Component {
    constructor() {
        super();
    }
    render(){
        return(
            <div>
                <ol>
                    <li>
                        <NavLink to="/"></NavLink>
                    </li>
                </ol>
                {this.props.chhildren}
            </div>
        )
    }
}
