// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.
// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90
function calculateFinalPrice(basePrice, sale, taxation) {
	const salePrice = basePrice * sale / 100;
	const taxationPrice = (basePrice - salePrice) * taxation;
	const finalPrice = basePrice - salePrice + taxationPrice;
	// console.log(finalPrice);
	return finalPrice;
}
// (calculateFinalPrice(100, 10, 0))
// (calculateFinalPrice(100, 10, 0.2))
// (calculateFinalPrice(150, 25, 0.5))

console.log(calculateFinalPrice(100, 10, 0))
console.log(calculateFinalPrice(100, 10, 0.2))
console.log(calculateFinalPrice(150, 25, 0.5))



// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. 
// Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".
function checkAccess(userName, password) {
	return (userName === 'admin' && password === 123456) ? "Доступ разрешен" : "Доступ запрещен"
}
const result = checkAccess(prompt('Введите имя пользователя'), +prompt('Введите пароль'));
console.log(result);


// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.
function getTimeOfDay(time) {
	if (time >= 0 && time <= 5) {
		return "Ночь";
	} else if (time >= 6 && time <= 11) {
		return "Утро";
	} else if (time >= 12 && time <= 17) {
		return "День";
	} else if (time >= 18 && time <= 23) {
		return "Вечер";
	} else {
		return "Некорректное время";
	}
}
console.log(getTimeOfDay(+prompt("Введите время, чтоб узнать диапазон (Ночь / Утро / День / Вечер)")));

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

function findFirstEvenAroken(start, end) {
	if (start > end) {
		return "Задан неверный диапазон чисел"
	}
	
	for (let i = start; i <= end; i++) {
		if (i % 2 === 0) {
			return i
		}
	}
	return 'Четных чисел нет'
}
console.log(`Первое четное число: ${findFirstEvenAroken(+prompt("Введите стартовое число"), +prompt("Введите конечное число"))}`);

function findFirstEven(start, end) {
	if (start > end) {
		return "Задан неверный диапазон чисел"
	}

	const evenNumbers = []; // пустой массив
	for (let i = start; i <= end; i++) {
		if (i % 2 === 0) {
			evenNumbers.push(i); // добавляет четное число в массив push(i)
		} 
	}
	if (evenNumbers.length > 0) { // если в массиве есть хотя бы одно чётное число, возвращаем массив
		return evenNumbers;
	} else {
		return 'Четных чисел нет'
	}
}
console.log(`Все четные числа: ${findFirstEven(+prompt("Введите стартовое число"), +prompt("Введите конечное число"))}`);


