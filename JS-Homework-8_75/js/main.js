// "use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};


// При помощи метода querySelector получаем элементы .form, .input и .todos
const form = document.querySelector('.form')
const input = document.querySelector('.input')
const todos_todos = document.querySelector('.todos')

// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
function createTodoElement(text) {
  const todoItem = document.createElement('li') // создали <li></li>
  todoItem.classList.add('todo') // добавил класс (<li class='todo'></li>)

  const todoText = document.createElement('div') //создали <div></div>
  todoText.classList.add('todo-text') // добавил класс (<div class='todo-text'></div>)
  todoText.textContent = text // теперь когда мы вызываем функцию, то сюда будет приходить параметр знаяения у функции

  const completButton = document.createElement('button');
  completButton.classList.add('button-complete', 'button')
  completButton.innerHTML = '&#10004;' // добавили галочку

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('button-delete', 'button');
  deleteButton.innerHTML = '&#10006;'; // добавили крести

  const containerByButton = document.createElement('div')
  containerByButton.classList.add('todo-actions')
  containerByButton.append(completButton, deleteButton) // обернули в контейнер кнопки галочка/крестик 

  todoItem.append(todoText, containerByButton) // обернули в li todoText и containerByButton

  return todoItem; // Возвращаем HTML структуру
}

// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement
function handleCreateTodo(todos, text) {
  createTodo(todos, text);
  const newElement = createTodoElement(text);
  todos_todos.append(newElement);
}

