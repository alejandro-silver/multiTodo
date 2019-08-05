import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/es/Form";
import MultiLists from "../components/MultiLists";
import { addList } from "../actions/listActions";

class MainPage extends Component {
  componentDidUpdate() {
    localStorage.setItem("MultiTodo", JSON.stringify(this.props.list));
  }
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>Multi TodoLists without FireBase Created by Automedon</Col>
            <Col>
              {" "}
              <Form className="text-right">
                <Button onClick={() => this.props.addList()}>
                  Add new list
                </Button>{" "}
              </Form>
            </Col>
          </Row>
          <MultiLists />
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
  { addList }
)(MainPage);
