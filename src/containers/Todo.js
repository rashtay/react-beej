// @flow
import { connect } from 'react-redux';
import { Todo } from 'components/';
import { addTodo, deleteTodo } from 'actions/todo';

export default connect((state) => state.todo, {
  addTodo,
  deleteTodo,
})(Todo);
