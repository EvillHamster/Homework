// Задание 1.
// Дан массив пользователей:
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }
const users = [
  { name: 'Alex', age: 24, isAdmin: true },
  { name: 'Bob', age: 13, isAdmin: false },
  { name: 'John', age: 31, isAdmin: true },
  { name: 'Jane', age: 20, isAdmin: false },
]
users.push(
	{ name: 'Ann', age: 19, isAdmin: false },
	{ name: 'Jack', age: 43, isAdmin: true }
);

console.log(users);


// Задание 2.
// Используя массив пользователей users из предыдущего задания, 
// напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

// через for
function getUserAverageAge(users) {
	let sum = 0;
	for (i = 0; i < users.length; i++) {
		sum += users[i].age
	}
	console.log(`Средний возрасть всех пользователей - ${sum / users.length}`);
}
getUserAverageAge(users)


// через forEach
function getUserAverageAge2(users) {
	let sum = 0;
	users.forEach( function(user) {
		sum += user.age
	})
	console.log(`Средний возрасть всех пользователей - ${sum / users.length}`);
}
getUserAverageAge2(users)

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), 
// которая возвращает массив всех администраторов.
function getAllAdmins(users) {
	const adminName = []
	users.forEach(function (user) {
		if (user.isAdmin) {
			adminName.push(user.name)
		}
	})
	console.log(`Администраторами являются: ${adminName.join(', ')}`)
}
getAllAdmins(users)


// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. 
// Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.
function first(arr, n) {
	if (n === 0) return [];
	if (n === undefined) return arr.length > 0 ? [arr[0]] : []
	return arr.slice(0, n);
}

console.log(first([1, 2, 3, 4, 5], 3));
console.log(first([1, 2, 3, 4, 5], 0));
console.log(first([1, 2, 3, 4, 5]));
console.log(first([], undefined));
console.log(first([10, 20], 10)); 