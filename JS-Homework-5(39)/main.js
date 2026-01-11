// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.
const person = {
	name : 'Aidar',
	age: 25,
	isStudent: true
}
for (key in person) {
	console.log(`${key}: `, person[key]);
}


// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.
function isEmpty(object) {
	for (key in object) {
		return false
	}
	return true
}
console.log(isEmpty({}));
console.log(isEmpty(person));



// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.
const task = {
	title : 'Загаловок',
	description : 'Описание',
	isCompleted : true,
};

const modifications = {
	title : 'Другой заголовок',
	city: 'Калуга',
	description : 'Жили были Дед да Бабка',
};

function cloneAndModify(object, modifications) {
	return {
		...object,
		...modifications, 
	}
};

const newTask = cloneAndModify(task, modifications);

console.log('\n','Old Object');
for (key in task) {
	console.log(`${key}: ${task[key]}`);
}

console.log('\n','New Object:');
for (key in newTask) {
	console.log(`${key}: ${newTask[key]}`);
	
};


// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.
const myObject = {
  method1() {
    console.log('Метод 1 вызван');
  },
  method2() {
    console.log('Метод 2 вызван');
  },
  method3() {
    console.log('Метод 3 вызван');
  },
  property: 'Это не метод'
};

function callAllMethods(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'function') {
      obj[key]();;
    }
  }
}
callAllMethods(myObject);

