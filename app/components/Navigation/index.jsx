import React, {Component} from 'react';
import {IndexLink} from 'react-router';
import NavLink from './navLink';
import {Tabs,Button,Row,Col} from 'antd';
/*
 * @class Navigation `导航`组件
 */
export default class Navigation extends Component {
    constructor() {
        super();
    }
    render() {
        const TabPane = Tabs.TabPane;
        return (
            <div>
                <Row className="className" type="flex" align="middle" justify="space-around">
                    <Col span={6}>
                        <NavLink to="/">
                            全部&nbsp;
                            <Button shape="circle" size="small">{this.props.allMemos}</Button>
                        </NavLink>
                    </Col>
                    <Col span={6}>
                        <NavLink to="/todo">
                            新建事项&nbsp;<span>{this.props.todoNumber}</span>
                        </NavLink>
                    </Col>
                    <Col span={6}>
                        <NavLink to="/doing">
                            正在进行<span>{this.props.doingNumber}</span>
                        </NavLink>

                    </Col>
                    <Col span={6}>
                        <NavLink to="/done">
                            已完成<span>{this.props.doneNumber}</span>
                        </NavLink>
                    </Col>
                </Row>
            </div>
        )
    }
}
