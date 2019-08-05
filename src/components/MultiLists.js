import React, { Component } from "react";
import { connect } from "react-redux";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/es/Container";
import TodoList from "./TodoList";

class MultiLists extends Component {
  render() {
    return (
      <>
        <Container>
          <Row style={{ width: "100%" }}>
            {this.props.list.lists.length > 0
              ? this.props.list.lists.map(list => {
                  return (
                    <Col md={6} key={list.id}>
                      <TodoList todo={list.todo} idList={list.id} />
                    </Col>
                  );
                })
              : "There are no lists"}
          </Row>
        </Container>
      </>
    );
  }
}
const initMapStateToProps = state => {
  return {
    list: state.todo
  };
};
export default connect(
  initMapStateToProps,
  {}
)(MultiLists);
