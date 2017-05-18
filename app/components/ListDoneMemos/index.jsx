import React, { Component } from 'react';
import { Collapse, Row, Col, Icon, Button } from 'antd';
import PropTypes from 'prop-types';
/*
 * @class ListDoneMemos `已完成`组件
 */
class ListDoneMemos extends Component {
    constructor(props) {
        super(props);
        this.handleDel = this.handleDel.bind(this);
        this.handleToDoing = this.handleToDoing.bind(this);
    }
    /*
     * @method  handleDel 删除事项
     */
    handleDel(e) {
        const delindex = e.target.getAttribute('data-key');
        this.props.onDel(delindex);
    }
    /*
     * @method  handleToDoing 改变状态done->doing
     */
    handleToDoing(e) {
        const changeIndex = e.target.getAttribute('data-key');
        this.props.onDoneToDoing(changeIndex);
    }
    /*
     * @method  handleClick 事项内容 展开or隐藏
     */
    render() {
        let number = 0;
        this.props.todolist.map((item) => {
            if (item.done) {
                number += 1;
            }
            return true;
        });
        const collapseStyle = {
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto',
        };
        const panelContent = (
            <Row>
                <Col span={22}>
                    <h3>已完成</h3>
                </Col>
                <Col span={2}>
                    <Button size="small" shape="circle">{number}</Button>
                </Col>
            </Row>
        );
        const Panel = Collapse.Panel;
        return (
            <main>
                <Collapse style={collapseStyle}>
                    <Panel header={panelContent}>
                        <ul>{
                            this.props.todolist.map((item, i) => {
                                if (item.done) {
                                    return (
                                        <li
                                            key={i}
                                            style={{
                                                opacity: '0.4',
                                            }}
                                        >
                                            <Row>
                                                <Col span={3}>
                                                    <input
                                                        type="checkbox"
                                                        checked={item.done}
                                                        disabled
                                                    />
                                                </Col>
                                                <Col span={20}>
                                                    <p
                                                        data-key={i}
                                                        onClick={this.handleToDoing}
                                                        style={{
                                                            textDecoration: 'line-through',
                                                        }}
                                                    >{item.todo}</p>
                                                </Col>
                                                <Col>
                                                    <Icon
                                                        type="close-circle"
                                                        data-key={i}
                                                        style={{
                                                            fontSize: '20px',
                                                        }}
                                                        onClick={this.handleDel}
                                                    />
                                                </Col>
                                            </Row>
                                        </li>
                                    );
                                }
                                return true;
                            })
                        }</ul>
                    </Panel>
                </Collapse>
            </main>
        );
    }
}

ListDoneMemos.propTypes = {
    onDoneToDoing: PropTypes.func.isRequired,
    onDel: PropTypes.func.isRequired,
};
export default ListDoneMemos;
