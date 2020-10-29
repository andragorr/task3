// TASK 1

// let massage = "hello";
// let  work = "owu";
// let site = "com";
// let language = "ua"
// alert(masage);
// console.log(masage);
// document.write(work);
// document.write(site);
// console.log(language);

// let start = 1;
// let group = 10;
// let cash = -999;
// let ordinal_numbers = 123;
// let p = 3.14;
// let experience = 2.7;
// let age = 16;

// console.log(start);
// console.log(group);
// console.log(cash);
// console.log(ordinal_numbers);
// console.log(p);
// console.log(experience);
// alert(age);

// let a = true;
// let b = false;
// console.log(a);
// console.log(b);

// TASK 2
 
// let message = "world";
// alert(message);
// let work = "web";
// document.write(work);
// let site = "facebook";
// console.log(site);
// let langueage = "eng";
// console.log(langueage);

// TASK 3
// Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write

// const name = "Serhii";
// const last_name = "Domchak";
// const surname = "Igorovich";

// const burn = '03.04.1994';
// const land = 12345;
// const flat = 23;

// console.log(name, last_name, surname);
// alert(burn, land, flat);
// document.write(name, burn, flat);

// TASK 4
// при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. 
// Вывести каждую при помощи console.log , alert, document.write


// let name = prompt('Your name?', 'Serhii');

// alert(`Hello ${name}`);
// console.log("hello" + name);
// document.write(name);

// let surname = prompt('Your surname?', 'Igorovich');
// alert(`Hello ${surname}`);
// console.log("hello" + surname);
// document.write(surname);

// let last_name = prompt('Your lastname?', 'Domchak');
// alert(`Hello ${last_name}`);
// console.log("hello" + last_name);
// document.write(last_name);

// TASK 5

// - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

// let name = prompt('Your name?', 'Serhii');
// let surname= prompt('Your surname?', 'Igorovich');
// let lastname = prompt('Your lastname?', 'Domchak');
// let person = {
//     name: name,
//     lastname: lastname,
//     surname: surname
// }

// console.log(person);


// TASK 6 
// - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.

// let name = prompt('Your name?', 'Igor');
// let surname= prompt('Your surname?', 'Stepanovich');
// let lastname = prompt('Your lastname?', 'Domchak');
// let person = {
//     name: name,
//     lastname: lastname,
//     surname: surname
// }

// console.log(person);


// TASK 7

// при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

// let num1 = prompt('number' , '1');
// let num2 = prompt('number' , '2');
// let num3 = prompt('number' , '35');

// console.log(num1 + num2 + num3);


// TASK 8
// при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. 
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера


// let num1 = prompt('number' , '1323F');
// let num2 = prompt('number' , '2dff');
// let num3 = prompt('number' , '3123sad');
// let num4 = prompt('number' , '4876cvx');

// let result =((parseInt(num1))+(parseInt(num2))+(parseInt(num3))+(parseInt(num4)));
// console.log(result);

// TASK 9 

// - при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. 
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера

// let num1 = prompt('number' , '13.23F');
// let num2 = prompt('number' , '22.31231ff');
// let num3 = prompt('number' , '31.23sad');

// let result =((parseFloat(num1))+(parseFloat(num2))+(parseFloat(num3)));
// console.log(result);

// TASK 10
// - при помощи prompt()  получить 3 числа с плавающей точекой. 
// Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера


// let num1 = prompt('number' , '13.23');
// let num2 = prompt('number' , '22.31231');
// let num3 = prompt('number' , '31.23');

// let result =((Math.round(num1))+(Math.round(num2))+(Math.round(num3)));
// console.log(result);

// TASK 11 
// - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. 
// Первое число - это число которое будут возводить в степень.
//  Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.


// let num1 = prompt('number' , '10');
// let num2 = prompt('number' , '5');

// console.log(Math.pow(num1,num2));


// TASK 12
// - При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести 
// их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;

// let a = 100; 
// let b = '100';
// let c = true; 
// let d = undefined;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);

// TASK 13
// - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.


//  console.log(5 < 6)
//  console.log(5 > 6)
//  console.log(5 === 6)
//  console.log(5 >= 6)
//  console.log(10 === 10)
//  console.log(10 >= 10)
//  console.log(10 !== 10)
//  console.log(10 >  10)
//  console.log(10 < 10)
//  console.log(123 === '123')
//  console.log(123 !== '123')

// TASK 14

// Дополнительно:
// - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль

// 1. false
// 2. true
// 3. false
// 4. true
// 5. true
// 6. true
// 7. true
// 8. false
// 9. true
// 10. true
// 11. false
// 12. true
// 13. true
// 14. true
// 15. true
// 16. true
// 17. false







// CLASS WORK
// TASK 1
// let str123 = "Привіт"
// let num = 123
// let flag = true
// let txt = true

// console.log(typeof str123 );
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);


// TASK2
// let a1 = 5 + 3
// let a2 = 5 - 3
// let a3 = 5 * 3
// let a4 = 5 / 3
// let a5 = 5 % 3

// console.log (a1);
// console.log (a2);
// console.log (a3);
// console.log (a4);
// console.log (a5);

// TASK 3

// let a6 = 5 % 3
// let a7 = 3 % 5
// let a8 = 5 + '3'
// let a9 = '5' - 3
// let a10 = 75 + 'кг'

// console.log (a6);
// console.log (a7);
// console.log (a8);
// console.log (a9);
// console.log (a10);

// TASK 4

// let height = 23
// let width = 10
// let s = 33

// console.log (Math.pow(s, 2));

// TASK 5

// // let heightC = 10
// // let dC = 4

// TASK 6
// У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//   Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или 
//   оператор возведения в степень ** ).

// let a = 3;
// let b = 3;
// let c = 4

// const k = Math.pow(a,2) + Math.pow(b,2) + Math.pow(c,2);
// console.log(k);



// TASK 7
// Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log


// let str = "Hello world";
// alert(str);
// console.log (str);
// document.write (str);

// TASK 8
// Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// let name = 'Domchak Serhii'
// let age = 26
// let hobby = 'serfing'
// alert (name +  + hobby  + age );

// TASK 9

// Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = "ХТО"; 
// let str2 = "ти";
// let str3 = "такий?";

// const concatenation = (str1) + (str2) + (str3);
// document.write(concatenation);

// TASK 10

// Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

// let str = '20';
//      let a = '5';
//      document.write(str + a + "<br/>");
//      document.write(str - a + "<br/>");
//      document.write(str * "2" + "<br/>");
//      document.write(str / 2 + "<br/>");

//     // 1.205
//     // 2.15
//     // 3.40
//     // 4.10

//     // 5. перетвоює в стрінг '5' і проводить математичні обрахунки

// TASK 11

// Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
// console.log(parseInt("3.14"));
// console.log(parseInt("-7.875"));
// console.log(parseInt("435"));
// console.log(parseInt("Вася"));

//  1.  3
//  2.  -7
//  3.  435
//  4.  NaN

//  Функція parseInt перетворює перший аргумент на рядок, розбирає цей рядок, після чого повертає ціле число або NaN.

// TASK 12 

// С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
    // let str = prompt("Enter something", "ho-ho")
    // console.log(str);

    // let last_name = prompt('Your lastname?', 'Domchak');
    // console.log(`Hello ${last_name}`);

// TASK 13

// С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, 
// а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// TASK 14
// let name = prompt('Your name?', "Serhiy");
// let lastname = prompt('Your lastname?', "Domchak");
// let age = prompt('Your age?', "26")

// alert(`Доброго вечера ${name} ${lastname}  мои поздравления что вам ${age}`);


// ДОП 

// TASK 1

// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let num1 = prompt('Number1', '10');
// let num2 = prompt('Number2', '2');
// let num3 = prompt('Number3', '4');

// if (num1 > num2 && num2 > num3 && num1 > num3){
//     console.log(num1 , num2 , num3);
// } else if (num1 < num2 && num2 < num3 && num1 < num3) {
//     console.log(num3 , num2 , num1);
// } else if (num1 < num2 && num2 > num3 && num1 < num3) {
//     console.log(num2 , num3 , num1);
// } else if
//     (num1 > num2 && num2 < num3 && num1 > num3)  { 
//         console.log(num1 , num3 , num2);
// } else if
// (num1 > num2 && num2 < num3 && num1 > num3) { 
//     console.log(num3 , num1 , num2);
//  } else { (num1 < num2 && num2 > num3 && num1 > num3)  
//     console.log(num2 , num1 , num3)
// }

// TASK 2

// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!


// let color = prompt("color_select");
// if (color === 'green') {
//     console.log('move');
// } else if (color === 'yellow') {
//     console.log('wait');
// } else if (color === 'red') {
//     console.log('stop');
// } else if ( color === 'broken') 
//     console.log("Do what ever you want")


// TASK 3

// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.

// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// let color = prompt("вибери колір");
// let car = prompt("машини їздять чи машин немає?");
// if (color === 'зелений' && car === "машин немає") {
//     console.log('йди');
// } else if ( color === "зелений" && car === "машини їздять"){
//     console.log("чекай поки порушиники проїдуть");
// } else if (color === 'жовтий' && car === "машини їздять") {
//     console.log('зашвидко, зачекай');
// } else if (color === "жовтий" && car === "машин немає") {
//     console.log('стій, чекай');
// } else if (color === 'червоний' && car === "машин немає") {
//     console.log('стій на місці');
// } else if (color === 'червоний' && car === "машини їздять"){
//     console.log("стій і чекай");
// } else if ( color === 'зламаний') 
//     console.log("роби, що хочеш")