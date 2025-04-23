// Задание 1
// Преобразовать строку 'js' в верхний регистр.

const str = 'js';
const upperCaseStr = str.toUpperCase();
console.log(upperCaseStr);

// Задание 2
// Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр символов не влияет на результат.

function filterElement(arrayElement, element) {
    return arrayElement.filter(item => item.toLowerCase().startsWith(element.toLowerCase()));
}
let arrayElement = ['один', 'два', 'три', 'четыре', 'Одиннадцать', 'двадцать', 'одно'];
let element = 'один';
console.log(filterElement(arrayElement, element));

// Задание 3
// Округлить число 32.58884:
// До меньшего целого.
// До большего целого.
// До ближайшего целого.

const roundUpNumber = 32.58884;

const floorNumber = Math.floor(roundUpNumber);
const ceilNumber = Math.ceil(roundUpNumber);
const roundNumber = Math.round(roundUpNumber);

console.log(floorNumber);
console.log(ceilNumber);
console.log(roundNumber);

// Задание 4
// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.

const minMaxNumber = [52, 53, 49, 77, 21, 32];
const minValue = Math.min(...minMaxNumber);
const maxValue = Math.max(...minMaxNumber);

console.log(minValue);
console.log(maxValue); 

// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.

function randomNum() {
    const randomNumb = Math.random() * 10 + 1;
    console.log(randomNumb);
}
randomNum();

// Задание 6
// Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. Длина массива должна быть в два раза меньше переданного числа.

function randomArray(integerNumber) {
   const arrayLength = Math.floor(integerNumber / 2);
   const randomArray = []
   
   for (i = 0; i < arrayLength; i++){
    const randomArrayNumber = Math.floor(Math.random() * (integerNumber + 1));
    randomArray.push(randomArrayNumber);
   }
   return randomArray;
}
console.log(randomArray(8));
console.log(randomArray(13));

// Задание 7
// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.

function randomNumberRange(a, b) {
    if (a > b) {
        return Math.floor(Math.random() * (a - b + 1) + b)
    } else {
        return Math.floor(Math.random() * (b - a + 1) + a)
    }
    
}
console.log(randomNumberRange(8, 22));
console.log(randomNumberRange(15, 3));

// Задание 8
// Вывести в консоль текущую дату.

console.log (new Date());

// Задание 9
// Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:
// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]

function formatDate(date) {
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    const year = date.getFullYear();
    const days = date.getDate();
    const month = date.getMonth();
    const day = daysOfWeek[date.getDay()];
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `
    Дата: ${days} ${months[month]} ${year} — это ${day}.
    Время: ${hour}:${minutes}:${seconds}
    `
}
console.log(formatDate(new Date()));
console.log(formatDate(new Date("12/13/2025")));