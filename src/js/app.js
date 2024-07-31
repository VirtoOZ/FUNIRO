"use strict";
//@@include('files/dynamic_adapt.js', {})
//@@include('files/regular.js', {})
//@@include('files/script.js', {})
//@@include('files/functions.js', {})
//@@include('files/forms.js', {})
//@@include('files/scroll.js', {})

//Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
//<ЗАДАЧА 1>=================================

//let num = prompt('Введите число:',);
//console.log(typeof num);
//let num2 = +num;
//if (typeof num2 === 'number') {
//   (num2 < 0) ? alert(`${num2} является отрецательным`) : '';
//   if (num2 > 0) {
//      alert(`${num2} - Положительное`);
//   }
//} else {
//   alert(`${num2} - не является числом`);
//}
//</ЗАДАЧА 1>=================================

//<ЗАДАЧА 1.1>=================================
//C помощью функции и безконечного цикла do while
//function math(num) {
//   (Math.sign(num)) === 1 ? alert(`${num} ПОЛОЖИТЕЛЬНОЕ`) :
//      (Math.sign(num)) === -1 ? alert(`${num} ОТРЕЦАТЕЛЬНОЕ`) :
//         num === '' ? alert('ПУСТО') :
//            num === null ? alert('CANCEL') : '';
//}
//let num1;
//do {
//   num1 = prompt('ВВЕДИТЕ ЧИСЛО:',);
//   math(num1);
//} while (num1 !== null);
//</ЗАДАЧА 1.1>=================================

//</ЗАДАЧА 1.2>=================================
//C помощью функции и безконечного цикла do while и запрашивает до тех пор пока не нажмёш cancel
//function math(numOne) {
//   let numTwo = Math.sign(numOne);
//   (numTwo === 1) ? alert('ПОЛОЖИТЕЛЬНОЕ') :
//      (numTwo === -1) ? alert('ОТРИЦАТЕЛЬНОЕ') :
//         (numOne === null) ? alert('CANCEL') :
//            (numTwo === 0) ? alert('ПУСТО') :
//               (isNaN(numTwo)) ? alert('НЕ ЧИСЛО') :
//                  '';
//}
//let num1;
//do {
//   num1 = prompt('ВВЕДИТЕ ЧИСЛО:',);
//   math(num1);
//} while (num1 !== null);
//</ЗАДАЧА 1.2>=================================

//<ЗАДАЧА 1.3>=================================
//let numOne = prompt('Введите число:',);
//let numTwo = Math.sign(numOne);
//(numTwo === 1) ? alert('ПОЛОЖИТЕЛЬНОЕ') :
//   (numTwo === -1) ? alert('ОТРИЦАТЕЛЬНОЕ') :
//      (numOne === null) ? alert('CANCEL') :
//         (numTwo === 0) ? alert('ПУСТО') :
//            (isNaN(numTwo)) ? alert('НЕ ЧИСЛО') :
//               '';
//</ЗАДАЧА 1.3>=================================


// Дана строка. Выведите в консоль длину этой строки.
//<ЗАДАЧА 2.0>=================================
// let str = 'Это, мать твою, строка!';
// console.log(`Длинна этой строки равна: `, str.length);
//</ЗАДАЧА 2.0>=================================

//<ЗАДАЧА 2.1>=================================
//let str = 'Это, мать твою, строка!';
//let num;
//console.log(`Длинна этой строки равна: `);
//for (let i = 0; i < str.length + 1; i++) {
//   num = i;
//}
//console.log(num);
//</ЗАДАЧА 2.1>=================================


// Дана строка. Выведите в консоль последний символ строки.
//<ЗАДАЧА 3.0>=================================
//let str = 'Это, мать твою, строка!';
//let arr = [];
//for (let i = 0; i < str.length; i++) {
//   arr = str[i];
//}
//console.log(arr[arr.length - 1]);
//console.log(arr[length]);
//</ЗАДАЧА 3.0>=================================

//<ЗАДАЧА 3.1>=================================
// let str = 'Это, мать твою, строка!';
// let arr = [];
// for (let i = 0; i < str.length; i++) {
// 	arr = str[i];
// }
//slise вырезает из массива элемент с двумя аргументами с какого и по какой, если указать только один аргумент, то будет вырезан до конца массива
// let last = arr.slice(-1);
// console.log(last);
//</ЗАДАЧА 3.1>=================================

//<ЗАДАЧА 3.2>=================================
//let str = 'Это, мать твою, строка!';
//console.log(str[str.length - 1]);
//</ЗАДАЧА 3.2>=================================

//<ЗАДАЧА 4.0>=================================
// Дано число. Проверьте, четное оно или нет.
//let isEven = (value) => {
//   return value % 2 === 0;
//}
//let isOdd = (value) => {
//   return Math.abs(value % 2) === 1;
//}
//let val = prompt('ВВЕДИТЕ ЧИСЛО:');
////trunk откидывает дробную часть
//let value = Math.trunc(val);
//(val === '') ? alert('ПУСТО') :
//   (val === null) ? alert('CANCEL') :
//      (isNaN(value)) ? alert(`ЗНАЧЕНИЕ ${value} НЕ ЧИСЛО`) :
//         (Number.isInteger(value) && isEven(value)) ?
//            console.log(`ЧИСЛО ${value} ЧЕТНОЕ`) :
//            (Number.isInteger(value) && isOdd(value)) ?
//               console.log(`ЧИСЛО ${value} НЕ ЧЕТНОЕ`) :
//               '';
//</ЗАДАЧА 4.0>=================================

//Даны два слова. Проверьте, что первые буквы этих слов совпадают.
//<ЗАДАЧА 5.0>=================================
//let str1 = 'Это';
//let str2 = 'Это';
//let arr1 = [], arr2 = [];
//let SimbolOne, SimbolTwo;
//function fistSimbol1() {
//   for (let i = str1.length - 1; i < str1.length; --i) {
//      arr1 = str1[0];
//      SimbolOne = arr1;
//      //console.log(SimbolOne);
//      console.log(arr1);
//   }
//};

//function fistSimbol2() {
//   for (let i = 0; i < str1.length; i++) {
//      arr2 = str2[i];
//      SimbolTwo = arr2[i];
//      console.log(SimbolTwo);

//   }
//};
//fistSimbol1();
//fistSimbol2();
//if (SimbolOne === SimbolOne) {
//   console.log(`Символы ${SimbolOne} и ${SimbolOne} СОВПАДАЮТ`);
//} else {
//   console.log(`Символы ${SimbolOne} и ${SimbolOne} НЕ СОВПАДАЮТ`);
//}
//</ЗАДАЧА 5.0>=================================
//</ЗАДАЧА 5.1>=================================
let str1 = 'Это';
let str2 = 'пто';
(str1[0] === str2[0]) ? alert(`СИМВОЛ ${str1[0]} И ${str1[0]} СОВПАДАЮТ`) :
   alert(`ПЕРВЫЕ СИМВОЛЫ СТРОК ${str1[0]} И ${str1[0]} НЕ СОВПАДАЮТ`);
//</ЗАДАЧА 5.1>=================================


//<БЛОК ТЕСТ>=================================
//let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
//}
//let sum;
//function summ() {
//   for (let key in salaries) {
//      //console.log(salaries[key]);
//      sum += salaries[key];
//   }
//   console.log(sum);


//}
//summ();
//let u;
//let n = 10;
//let sum = u + n;
//console.log(typeof (sum));
//console.log(sum);


//</БЛОК ТЕСТ>=================================