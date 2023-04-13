"use strict";
//задання 1
let num = prompt("Введіть число:");
let squared = num ** 2;
console.log(`Квадрат  ${num} = ${squared}.`);
//завдання 2
let name = prompt("Введіть і'мя:");
let depositAmount = parseFloat(prompt("Введіть суму депозиту:"));
let depositPeriod = parseInt(prompt("Введіть термін депозиту:"));
//20%
let interest = 0.2;
let monthlyInterest = interest / 12;
let totalInterest =
  depositAmount * (Math.pow(1 + monthlyInterest, depositPeriod) - 1);
let totalEarnings = depositAmount + totalInterest;
console.log(
  `Шановний(а) ${name}, ви поклали ${depositAmount} гривень під 20% річних на термін ${depositPeriod} місяців. За цей час ви заробите ${totalInterest.toFixed(
    2
  )} грн. Ваш загальний заробіток складе ${totalEarnings.toFixed(2)} UAH.`
);
//завдання 3
let a = parseFloat(prompt("Введіть перше число:"));
let b = parseFloat(prompt("Введіть друге число:"));
let sum = a + b;
let difference = a - b;
let multiplication = a * b;
let division = a / b;
console.log(`Сума чисел ${a} та ${b} = ${sum}`);
console.log(`Рiзниця мiж ${a} та ${b} = ${difference}`);
console.log(`Добутком ${a} і ${b} = ${multiplication}`);
console.log(`Частка від ділення ${a} і ${b} = ${division}`);
