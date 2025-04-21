// Задание 1
// Дан массив: [1, 5, 4, 10, 0, 3].
// Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10. После вывода значения 10 в консоль цикл должен прекратить свою работу.

const array = [1, 5, 4, 10, 0, 3];
for (let index = 0; index < array.length; index++) {
  if (array[index] !== 10) {
    console.log(array[index]);
  } else {
    console.log(array[index]);
    break;
  }
}

// Задание 2
// Дан массив: [1, 5, 4, 10, 0, 3].Найдите индекс значения 4 в этом массиве.

for (let index = 0; index < array.length; index++) {
  if (array[index] == 4) {
    console.log(index);
  }
}
// Задание 3
// Дан массив чисел: [1, 3, 5, 10, 20].С помощью метода join выведите элементы массива через пробел (пустую строку ' ').

const arrayNumber = [1, 3, 5, 10, 20];
let joinedArrayNumber = arrayNumber.join(" ");
console.log(joinedArrayNumber);

// Задание 4
// С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, ]].

let arrayMuch = [];
for (let i = 0; i < 3; i++) {
  let arrayRow = [];
  for (let j = 0; j < 3; j++) {
    arrayRow.push(1);
  }
  arrayMuch.push(arrayRow);
}
console.log(arrayMuch);

// Задание 5
// Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.

let arrayPush = [1, 1, 1];
for (let i = 0; i < 3; i++) {
  arrayPush.push(2);
}
console.log(arrayPush);

// Задание 6
// Дан массив: [9, 8, 7, 'a', 6, 5]. С помощью метода sort отсортируйте массив и удалите букву 'a' из массива. Затем выведите массив.

let arraySort = [9, 8, 7, "a", 6, 5];
arraySort.sort();
arraySort.pop();
arraySort.reverse();
console.log(arraySort);

// Задание 7
// Дан массив: [9, 8, 7, 6, 5].
// Попросите пользователя угадать число с помощью метода prompt. Если значение, которое ввел пользователь, есть в массиве, выведите в alert «Угадал», в противном случае — «Не угадал».
let userArraySort = prompt(`Угадайте число`);
arraySort.includes(Number(userArraySort))
  ? alert(`Угадал`)
  : alert(`Не угадал`);

// Задание 8
// Дана строка: 'abcdef'. Выведите в консоль 'fedcba'.
// Для этого задания вам пригодится метод reverse(). Он располагает элементы массива в порядке, обратном исходному.

let str = "abcdef";
let strArray = str.split("");
strArray.reverse();
let rts = strArray.join("");
console.log(rts);

// Задание 9
// Дан массив: [[1, 2, 3],[4, 5, 6]]. Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].

let array9 = [
  [1, 2, 3],
  [4, 5, 6],
];
let arrayOneLevel = array9.flat();
console.log(arrayOneLevel);

// Задание 10
// Создайте массив с произвольными числами (диапазон от 1 до 10).
// Переберите его с помощью цикла for.
// В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.

const array10 = [];
for (let i = 0; i < 10; i++) {
    array10.push(Math.floor(Math.random() * 10 + 1));
}
console.log(array10);
for (let i = 0; i < array10.length - 1; i++) {
    console.log(array10[i] + array10[i + 1]);
    
}


// Задание 11
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.

let valueNumber = [1, 2, 3, 4];
function arraySquare(valueNumber) {
  return valueNumber.map((value) => value ** 2);
}
console.log(arraySquare(valueNumber));

// Задание 12
// Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.

let word = ["table", "chair", "lamp", "array", "random"];

function strLenght(word) {
  return word.map((str) => str.length);
}
console.log(strLenght(word));

// Задание 13
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив, содержащий только отрицательные значения.
let integerValue = [3, 5, -2, 0, -6, 5];

function negativeValues(integerValue) {
  return integerValue.filter((number) => number < 0);
}
console.log(negativeValues(integerValue));

// Задание 14
// Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода Math.random() в диапазоне от 0 до 10.
// В данном массиве найдите все четные значения и добавьте их в новый массив. Результат работы программы необходимо вывести в консоль — это будут два массива: исходный массив и массив с четными значениями.

const array14 = [];
const evenArray = [];
for (let i = 0; i < 10; i++) {
  array14.push(Math.floor(Math.random() * 10 + 1));
  if (array14[i] % 2 == 0) {
    evenArray.push(array14[i]);
  } else {
    continue;
  }
}

console.log(array14);
console.log(evenArray);

// Задание 15
// Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью Math.random() в диапазоне от 1 до 10.
// Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

const array15 = [];
for (let i = 0; i < 6; i++) {
  array15.push(Math.floor(Math.random() * 10 + 1));
}
let sum15 = array15.reduce((total, number) => total + number);
let arithMean = sum15 / array15.length
console.log(`Среднее арифметическое - ${arithMean}`);
console.log(array15);