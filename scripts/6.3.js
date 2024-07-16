// // // let name = "John";
// // //
// // // function sayHi() {
// // //     alert("Hi, " + name);
// // // }
// // //
// // // name = "Pete";
// // //
// // // sayHi(); // Pete
// // //
// // // function makeWorker() {
// // //     let name = "Pete";
// // //
// // //     return function() {
// // //         alert(name);
// // //     };
// // // }
// // //
// // // let name = "John";
// // //
// // // // создаём функцию
// // // let work = makeWorker();
// // //
// // // // вызываем её
// // // work(); // Pete
// // //
// // // function makeCounter() {
// // //     let count = 0;
// // //
// // //     return function() {
// // //         return count++;
// // //     };
// // // }
// // //
// // // let counter = makeCounter();
// // // let counter2 = makeCounter();
// // //
// // // alert( counter() ); // 0
// // // alert( counter() ); // 1
// // //
// // // alert( counter2() ); // 0
// // // alert( counter2() ); // 1
// // //
// // // function Counter() {
// // //     let count = 0;
// // //
// // //     this.up = function() {
// // //         return ++count;
// // //     };
// // //
// // //     this.down = function() {
// // //         return --count;
// // //     };
// // // }
// // //
// // // let counter = new Counter();
// // //
// // // alert( counter.up() ); // 1
// // // alert( counter.up() ); // 2
// // // alert( counter.down() ); // 1
// // //
// // // let phrase = "Hello";
// // //
// // // if (true) {
// // //     let user = "John";
// // //
// // //     function sayHi() {
// // //         alert(`${phrase}, ${user}`);
// // //     }
// // // }
// // //
// // // sayHi(); // Результатом будет ошибка.
// // //
// // // //Функция sayHi объявлена внутри if, так что она живёт только внутри этого блока. Снаружи нет sayHi.
// // //
// // //
// // // function sum(n) {
// // //     return function(b) {
// // //         return n + b;
// // //     };
// // // }
// // //
// // // alert( sum(1)(2) ); // 3
// // // alert( sum(5)(-1) ); // 4
// // //
// // //
// // // let x = 1;
// // //
// // // function func() {
// // //     console.log(x); // ReferenceError: Cannot access 'x' before initialization
// // //     let x = 2;
// // // }
// // //
// // // func();
// //
// // function inArray(arr) {
// //     return function(n) {
// //         return arr.includes(n);
// //     };
// // }
// //
// // let arr = [1, 2, 3, 4, 5, 6, 7];
// //
// //
// // function inBetween(a, b) {
// //     return function(n) {
// //         return n >= a && n <= b;
// //     };
// // }
// //
// // let arr = [1, 2, 3, 4, 5, 6, 7];
// //
// // function byField(fieldName){
// //     return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
// // }
//
// function makeArmy() {
//     let shooters = [];
//
//     let i = 0;
//     while (i < 10) {
//         let j = i;
//         let shooter = function() { // функция shooter
//             console.log(j); // должна выводить порядковый номер
//         };
//         shooters.push(shooter); // и добавлять стрелка в массив
//         i++;
//     }
//
//     // ...а в конце вернуть массив из всех стрелков
//     return shooters;
// }
//
// let army = makeArmy();
//
//
// // все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
// army[0](); // 10 от стрелка с порядковым номером 0
// army[1](); // 10 от стрелка с порядковым номером 1
// army[2](); // 10 ...и т.д.

let sayHi = function() {
    console.log("Hi");
};

console.log(sayHi.name);