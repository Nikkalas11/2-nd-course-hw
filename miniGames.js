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
    attempt++;
    console.log(num);
    console.log(userNumber);
  }
}

function turnTheTextOver() {
  const turnText = prompt(`Введите текст, который требуется повернуть`);
  let turnTextOver = [];
  turnTextOver = turnText.split("").reverse().join("");
  alert(turnTextOver);
}

function simpleQuiz() {
  const quiz = [
    {
      question: "Какой цвет небо?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2, // номер правильного ответа
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2,
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2,
    },
  ];
  let correctUserAnwser = 0;

  for (let i = 0; i < quiz.length; i++) {
    const question = quiz[i];
    alert(question.question);
    alert(question.options);

    let userQuizAnswer = Number(prompt(`Введите номер Вашего ответа`));

    if (userQuizAnswer === question.correctAnswer) {
      console.log(correctUserAnwser);
      correctUserAnwser++;
    }
  }
  alert(`Вы дали ${correctUserAnwser} правильных ответов`);
}

function rockPaperScissors() {
  const combinations = ["камень", "ножницы", "бумага"];
  while (true) {
  const userChoice = prompt(`Камень? Ножницы? Бумага?`);
  const randomChoice =
    combinations[Math.floor(Math.random() * combinations.length)];

  let result;
  if (userChoice == null) {
    alert(`До свидания`);
    break
  } else if (userChoice.toLowerCase() === randomChoice) {
    result = "Ничья";
  } else if (
    (userChoice.toLowerCase() === "камень" && randomChoice === "ножницы") ||
    (userChoice.toLowerCase() === "ножницы" && randomChoice === "бумага") ||
    (userChoice.toLowerCase() === "бумага" && randomChoice === "камень")
  ) {
    result = "Вы выиграли";
  } else {
    result = "Вы проиграли";
  }
  alert(`Ваш выбор ${userChoice}
         Выбор компьютера ${randomChoice}
                            ${result}`);
  
  }
}

function randomColor() {
 
    
    const miniGamesEl = document.querySelector('.mini-games');
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    miniGamesEl.style.backgroundColor = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

    let userColor = confirm(`Нажмите, чтобы поменять цвет`);
    if (userColor === false) {
      miniGamesEl.style.backgroundColor = `#202027`;
    } 
    
  
  
}
