/**
 * Author: Rahul Shetty
 * Date: 12/08/2019
 *
 * Redux state type definitions
 * @flow
 */
type TodoItem = {
  name: string,
  index: number,
};

type TodoList = Array<TodoItem>;

type Todo = {
  todoList: TodoList,
};

type States = {
  todo: Todo,
};

type GetState = () => States;
