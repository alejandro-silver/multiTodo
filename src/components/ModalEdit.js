import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { editTodo } from "../actions/todoActions";

class ModalEdit extends Component {
  state = {
    show: false,
    todo: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editTodo = (e, id, idList) => {
    e.preventDefault();
    const { editTodo } = this.props;
    const { todo } = this.state;
    editTodo(id, idList, todo);
    this.setState({ todo: "" });
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  render() {
    const { todo, idList } = this.props;
    return (
      <>
        <Button
          style={{ width: "15%" }}
          variant="primary"
          onClick={this.handleShow}
        >
          Edit
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="justify-content-center">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Form.Label className="text-center">Edit Todo</Form.Label>
          <Form inline={true}>
            <Form.Group className="m-0" style={{ width: "100%" }}>
              <Form.Control
                id="todo"
                name="todo"
                className="m-0"
                style={{ width: "100%" }}
                type="text"
                value={this.state.todo}
                placeholder={`${todo.todo}`}
                onChange={this.onChange}
              />
            </Form.Group>
          </Form>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={e => this.editTodo(e, todo.id, idList)}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default connect(
  null,
  { editTodo }
)(ModalEdit);
