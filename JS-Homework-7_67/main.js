'use strict'

const todoKeys = {
  id : 'ID',
  text : 'TEXT',
  isCompleted : 'IS_COMPLETED'
}; 

const todos = []

// Счетчик ID
const getNewTodoID = (todos) => todos.reduce((maxID, todo) => Math.max(maxID, todo[todoKeys.id]), 0) +1

const createTodo = (todos, text) => {
  const newTodo = {
    date : new Date(),
    [todoKeys.id] : getNewTodoID(todos),
    [todoKeys.text] : text,
    [todoKeys.isCompleted] : false
  }
  todos.push(newTodo)
  return newTodo
}

// Выполнение задачи
const completeTodoByID = (todos, todoID) => {
  const todo = todos.find((todo) => todo[todoKeys.id] === todoID)

  if (todo === undefined) {
    console.error(`Todo with id ${todoID} not found`);
    return null
  }

  todo[todoKeys.isCompleted] = !todo[todoKeys.isCompleted];
  return todo
};

// Удаление задачи
const deleteTodoByID = (todos, todoID) => {
  const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoID);
  if (todoIndex === -1) {
    console.error(`Todo with id ${todoID} not found`);
    return todos
  }
  todos.splice(todoIndex, 1)
  return todos
};

