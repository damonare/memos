import { Row, Col } from 'antd';
import React, { Component } from 'react';
import NavLink from './navLink';
/*
 * @class Navigation `导航`组件
 */
export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <Row className="className" type="flex" align="middle" justify="space-around">
                    <Col span={6}>
                        <NavLink to="/">
                            全部&nbsp;
                            {this.props.allMemos}
                        </NavLink>
                    </Col>
                    <Col span={6}>
                        <NavLink to="/todo">
                            新建事项&nbsp;
                            <span>{this.props.todoNumber}</span>
                        </NavLink>
                    </Col>
                    <Col span={6}>
                        <NavLink to="/doing">
                            正在进行
                            <span>{this.props.doingNumber}</span>
                        </NavLink>
                    </Col>
                    <Col span={6}>
                        <NavLink to="/done">
                            已完成
                            <span>{this.props.doneNumber}</span>
                        </NavLink>
                    </Col>
                </Row>
            </div>
        );
    }
}
