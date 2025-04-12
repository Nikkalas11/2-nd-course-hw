function guessNumber() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  // console.log(randomNumber);
  let userNumber = prompt(`Попробуйте отгадать число от 1 до 100`);
  let attempt = 0;
  while (true) {
    attempt++;
    if (isNaN(userNumber)) {
      userNumber = prompt(`Вы ввели не правильное значение. Попробуйте снова`);
    } else if (userNumber == null) {
      alert(`До свидания. Ха - ха - ха`);
      break;
    } else if (userNumber > randomNumber) {
      userNumber = prompt(`Ваше число ${userNumber} - больше секретного`);
    } else if (userNumber < randomNumber) {
      userNumber = prompt(`Ваше число ${userNumber} - меньше секретного`);
    } else {
      alert(
        `Вы угадали задуманное число ${randomNumber} за ${attempt} попыток`
      );
      break;
    }
  }
}

function simpleArithmatic() {
  let attempt = 0;
  let trueAttempt = 0;
  while (true) {
    const number1 = Math.floor(Math.random() * 10 + 1);
    const number2 = Math.floor(Math.random() * 10 + 1);
    const operations = ["+", "-", "/", "*"];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    if (operation == "+") {
      value1 = number1;
      value2 = number2;
      num = value1 + value2;
    } else if (operation == "-") {
      if (number1 >= number2) {
        value1 = number1;
        value2 = number2;
        num = value1 - value2;
      } else {
        value1 = number2;
        value2 = number1;
        num = value1 - value2;
      }
    } else if (operation == "*") {
      value1 = number1;
      value2 = number2;
      num = value1 * value2;
    } else if (operation == "/") {
      value1 = number1 * number2;
      value2 = number2;
      num = value1 / value2;
    }
    let userNumber = prompt(
      `Решите арифметическую задачу  ${value1} ${operation} ${value2}`
    );
    if (userNumber == null) {
      alert(
        `До свидания. Вы правильно решили ${trueAttempt} задач из ${attempt}`
      );
      break;
    } else if (Number(userNumber) !== num) {
      alert(`Вы ошиблись. Правильный ответ ${num}`);
    } else {
      alert(`Вы молодец. Правильный ответ ${num}`);
      trueAttempt++; 
    }
    attempt ++;
    console.log(num);
    console.log(userNumber);
  }
}
