import React, { Component } from "react";
import { connect } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ModalEdit from "./ModalEdit";
import { deleteTodo, addTodo, crossTodo } from "../actions/todoActions";
import { deleteList } from "../actions/listActions";

class TodoList extends Component {
  state = {
    todo: ""
  };
  deleteTodo = (id, idList) => {
    const { deleteTodo } = this.props;
    deleteTodo(id, idList);
  };
  deleteList = idList => {
    const { deleteList } = this.props;
    deleteList(idList);
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addTodo = (e, idList) => {
    e.preventDefault();
    const { addTodo } = this.props;
    const { todo } = this.state;
    addTodo(todo, idList);
    this.setState({ todo: "" });
  };
  crossTodo = (id, idList) => {
    const { crossTodo } = this.props;
    crossTodo(id, idList);
  };

  render() {
    const { todo, idList } = this.props;
    return (
      <>
        <Form.Label>Add Todo</Form.Label>

        <Form inline={true} onSubmit={e => this.addTodo(e, idList)}>
          <Form.Group className="m-0" style={{ width: "70%" }}>
            <Form.Control
              id="todo"
              name="todo"
              className="m-0"
              style={{ width: "100%" }}
              type="text"
              value={this.state.todo}
              placeholder="Enter todo"
              onChange={this.onChange}
            />
          </Form.Group>
          <Button style={{ width: "30%" }} variant="success" type="submit">
            Submit
          </Button>
        </Form>
        <ListGroup>
          {todo.length > 0
            ? todo.map(todo => {
                return (
                  <Form inline key={todo.id}>
                    <ListGroup.Item
                      style={{ width: "70%" }}
                      className={
                        todo.completed ? "text-success" : "text-danger"
                      }
                      onClick={() => this.crossTodo(todo.id, idList)}
                    >
                      {todo.todo}
                    </ListGroup.Item>
                    <ModalEdit todo={todo} idList={idList} />
                    <Button
                      style={{ width: "15%" }}
                      variant="danger"
                      type="button"
                      onClick={() => this.deleteTodo(todo.id, idList)}
                    >
                      Delete
                    </Button>
                  </Form>
                );
              })
            : null}
          <div className="text-right">
            <Button
              style={{ width: "100%" }}
              variant="danger"
              type="button"
              onClick={() => this.deleteList(idList)}
            >
              Delete Todo List
            </Button>
          </div>
        </ListGroup>
      </>
    );
  }
}

export default connect(
  null,
  { deleteTodo, addTodo, crossTodo, deleteList }
)(TodoList);
