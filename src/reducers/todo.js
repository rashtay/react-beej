/**
 * Author: Rahul Shetty
 * Date: 12/06/2018
 *
 * Reducer for Article data
 * @flow
 */
import { TODO } from 'action-type';

const defaultState = {
  todoList: [],
};

export default function todo(state: Object = defaultState, action: Object) {
  const { todoList } = state;
  const { payload } = state;

  switch (action.type) {
    case TODO.ADD_TODO:
      return {
        todoList: [...todoList, payload],
      };
    case TODO.DELETE_TODO:
      return {
        todoList: todoList.splice(todoList.indexOf(payload)),
      };
    default:
      return state;
  }
}
