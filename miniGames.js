function guessNumber() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  // console.log(randomNumber);
  let userNumber = prompt(`Попробуйте отгадать число от 1 до 100`);
  let attempt = 0;
  while (true) {
    attempt ++;
    if (isNaN(userNumber))  {
        userNumber = prompt(`Вы ввели не правильное значение. Попробуйте снова`);
    }  else if (!Boolean(userNumber)) {
        alert(`До свидания. Ха - ха - ха`)
        break
      }
     else if (userNumber > randomNumber) {
      userNumber = prompt(`Ваше число ${userNumber} - больше секретного`);
    } else if (userNumber < randomNumber) {
      userNumber = prompt(`Ваше число ${userNumber} - меньше секретного`);
    } else {
      alert(`Вы угадали задуманное число ${randomNumber} за ${attempt} попыток`);
      break;
    }
  }
}
