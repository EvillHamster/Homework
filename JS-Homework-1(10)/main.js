// Задача 1.
// Создайте переменные с корректными именами, чтобы сохранить следующую информацию:
// 1. firstName – имя (строка)
// 2. lastName – фамилия (строка)
// 3. isStudent – является ли учеником курса (булево значение)
const firstName = 'Aidar';
const lastName = 'Khamitov';
const isStudent = true;


// Задача 2.
// 1. Объявите переменную age с числовым значением возраста студента.
// 2. Объявите переменную currentYear и присвойте ей значение текущего года (например, 2025).
// 3. Используя age и currentYear вычислите год рождения студента, запишите результат в переменную birthYear.
const age = 25;
const currentYear = 2025;
const birthYear = currentYear - age;
console.log(`Год рождения: ${birthYear}`);


// Задача 3.
// Выведите в консоли сообщение в таком формате:
// Меня зовут [firstName] [lastName], мне [age] лет. Я ученик/ученица курса: [isStudent].
const student = isStudent ? 'Yes' : 'No';
console.log(`Меня зовут ${firstName} ${lastName}, мне ${age} лет. Я ученик курса: ${student}`);

// Задача 4.
// Какое значение будет у переменной result?
// let a = '123'; строка 123
// let b = +'456'; число 123
// let c = Number('789'); число 789
// let d = Boolean(0); false
// let e = Boolean(' '); true
// let result = a + b + c + d + e; 123456789falsetrue

