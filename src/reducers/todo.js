/**
 * Author: Rahul Shetty
 * Date: 12/06/2018
 *
 * Reducer for Article data
 * @flow
 */
import { TODO } from 'action-type';

const defaultState: Todo = {
  todoList: [],
};

export default function todo(state: Todo = defaultState, action: Action): Todo {
  const { todoList } = state;
  const { payload, type } = action;

  switch (type) {
    case TODO.ADD_TODO:
      return {
        todoList: [...todoList, { name: payload, index: Date.now() }],
      };
    case TODO.DELETE_TODO:
      return {
        todoList: todoList.filter(item => item.name !== payload),
      };
    default:
      return state;
  }
}
