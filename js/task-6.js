//ЗАДАНИЕ

//Напиши скрипт со следующим функционалом:
//При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
//Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
//После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. /////Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.

//РЕШЕНИЕ

// let input = "";
// const numbers = [];
// let total = 0;
// do {
//   input = prompt("Введите число:");

//   if (Number.isNaN(Number(input))) {
//     alert("Было введено не число, попробуйте еще раз");
//     continue;
//   }

//   numbers.push(Number(input));
// } while (input !== null);

// // if (numbers.length === 0) {
// //     alert("Массив пустой");
// // }

// // for (const element of numbers) {
// //   total += element;
// //   console.log("Общая сумма чисел: ", total);
// // }

// if (numbers.length === 1) {
//   alert("Ничего не введено");
// } else {
//   for (const number of numbers) {
//     total += number;
//   }
//   console.log(`Общая сумма чисел равна ${total}`);
// }

// const array = [];
// console.log(numbers);

let input = "";
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число:");

  if (input === null) {
    break;
  } else if (Number.isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  } else if (input === "") {
    alert("Вы ничего не ввели");
    continue;
  }

  numbers.push(Number(input));
} while (input !== null);

if (numbers.length === 0) {
  alert("Сложение чисел не проведено");
} else {
  for (const number of numbers) {
    total += number;
  }
  alert(`Сумма введенных чисел: ${total}`);
}
