import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Collapse, Row, Col, Icon, Button } from 'antd';

/*
 * @class ListDoingMemos `正在进行`组件
 */
class ListDoingMemos extends Component {
    constructor(props) {
        super(props);
        this.handleToTodo = this.handleToTodo.bind(this);
        this.handleToDone = this.handleToDone.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }
    /*
     * @method  handleDel 删除事项
     */
    handleDel(e) {
        const delindex = e.target.getAttribute('data-key');
        this.props.onDel(delindex);
    }
    /*
     * @method  handleToTodo 改变状态doing->todo
     */
    handleToTodo(e) {
        const changeIndex = e.target.getAttribute('data-key');
        this.props.onDoingToTodo(changeIndex);
    }
    /*
     * @method  handleToDone 改变状态doing->done
     */
    handleToDone(e) {
        const changeIndex = e.target.getAttribute('data-key');
        this.props.onDoingToDone(changeIndex);
    }
    render() {
        let number = 0;
        this.props.todolist.map((item) => {
            if (item.doing) {
                number += 1;
            }
            return true;
        });
        const collapseStyle = {
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto',
        };
        const Panel = Collapse.Panel;
        const header = (
            <Row>
                <Col span={22}>
                    <h3>正在进行</h3>
                </Col>
                <Col span={2}>
                    <Button
                        size="small"
                        shape="circle"
                    >
                        {number}
                    </Button>
                </Col>
            </Row>
        );
        return (
            <main>
                <Collapse style={collapseStyle}>
                    <Panel header={header}>
                        <ul>{
                            this.props.todolist.map((item, i) => {
                                if (item.doing) {
                                    return (
                                        <li
                                            key={i}
                                            style={{
                                                opacity: item.doing
                                                ? '1'
                                                : ''
                                            }}
                                        >
                                            <Row>
                                                <Col span={3}>
                                                    <input
                                                        type="checkbox"
                                                        checked={item.doing}
                                                        onChange={this.handleToTodo}
                                                        data-key={i}
                                                    />
                                                </Col>
                                                <Col span={20}>
                                                    <p
                                                        data-key={i}
                                                        onClick={this.handleToDone}
                                                    >{item.todo}</p>
                                                </Col>
                                                <Col span={1}>
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
                            }
                        </ul>
                    </Panel>
                </Collapse>
            </main>
        );
    }
}
ListDoingMemos.propTypes = {
    todolist: PropTypes.arrayOf(PropTypes.shape({
        todo: PropTypes.string.isRequired,
        istodo: PropTypes.bool.isRequired,
        doing: PropTypes.bool.isRequired,
        done: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
    onDoingToDone: PropTypes.func.isRequired,
    onDoingToTodo: PropTypes.func.isRequired,
    onDel: PropTypes.func.isRequired,
};
export default ListDoingMemos;
