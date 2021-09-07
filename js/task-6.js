//ЗАДАНИЕ

//Напиши скрипт со следующим функционалом:
//При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
//Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
//После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. /////Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.

//РЕШЕНИЕ

let input = " ";
const numbers = [];
let total = 0;
do {
  input = prompt("Введите число:");

  if (Number.isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }

  numbers.push(Number(input));
} while (input !== null);

const addInputNumbers = function (numbersArray) {
  if (numbersArray.length === 0) {
    return null;
  }
  for (const element of numbersArray) {
    total += element;
  }

  return total;
};

console.log("Общая сумма чисел: ", addInputNumbers(numbers));
