"use strict"


/* 
1.Описати своїми словами у кілька рядків, навіщо у програмуванні потрібні цикли.

цикл потрібен коли одну і ту саму дію треба виконати декілька раз, наприклад  якщо користувач
 неправильно вводить данні через цикл ми йому будемо повторювати "введіть данні правильно"
повідоблення якщо того потребує ситуація, цикл ми застосовуєм коли ситуація вимагає повторної дії.

2.Опишіть у яких ситуаціях ви використовували той чи інший цикл в JS.
цикл for коли нам потрібно вивести чьотні числа він буде виконуватисб до того часу коли 
в нас будуть чьотні числа
цикл while він буде виконуватись до того часу пока користувач не введе 
правильне ім,я

3.Що таке явне та неявне приведення (перетворення) типів даних у JS?

 Неявне; у вападку коли js інтерпритатор бачить наприклад вираз
  ("one" + 1) все що після "one" буде преобразовуватись в строку 
  ще один приклад let result = 5 * "5"; в цему випадку js інтерпритатор на всяк випадок 
  перепровіряє що він може зробити з цею сторокою і на його думку це найправильніше рішення

  Явне; коли ми самі вказуємо коли ми хочимо змінити тип данних для цего існують
  спеціальні функції String(), Number(), Boolean(),

*/


let numberUser = +prompt("введіть число!");

if (numberUser > 4) {
  for (let i = 5; i <= numberUser; i += 5) {
    console.log(i);
  }
} else {
  console.log("Sorry, no numbers");
}