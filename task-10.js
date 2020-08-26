let input;
let total = 0;

do {
  input = prompt("Введите число");
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте ещё раз!");
  } else {
    total += Number(input);
  }
} while (input !== null);
alert(`Общая сумма введенных чисел ${total}`);
