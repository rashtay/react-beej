/**
 * Author: Rahul Shetty
 * Date: 12/06/2018
 *
 * Actions for article related operations
 * @flow
 */
import { TODO } from 'constants/action-type';

export const addTodo = (todo: string) => (dispatch: Function) =>
  dispatch({
    type: TODO.ADD_TODO,
    payload: todo,
  });

export const deleteTodo = (todo: string) => (dispatch: Function) =>
  dispatch({
    type: TODO.DELETE_TODO,
    payload: todo,
  });
