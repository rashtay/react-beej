// @flow
import React from 'react';
import Input from 'components/Input';
import logo from 'assets/images/svg/logo.svg';
import styles from './style.module.css';

type TodoMethod = (string) => void;

type TodoProps = {
  todoList: TodoList,
  addTodo: TodoMethod,
  deleteTodo: TodoMethod,
};

// Delete a task to be done
function UseDeleteTodo(taskName: string, callback: TodoMethod) {
  const deleteTodo = () => {
    callback(taskName);
  };

  return deleteTodo;
}

function Todo({ todoList, addTodo, deleteTodo }: TodoProps) {
  return (
    <div className={styles.container}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />

        <a
          className={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main>
        <Input onEnter={addTodo} />

        {todoList.map((item: TodoItem) => (
          <div key={item.index}>
            <span>{item.name}</span>

            <button
              type="button"
              onClick={UseDeleteTodo(item.name, deleteTodo)}
            >
              X
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Todo;
