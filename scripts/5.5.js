// function camelize(str) {
//   return str.split('-').map((val, index) => {
//       if (index !== 0) {
//           return val[0] + val.slice(1);
//       } else {
//           val
//       }
//   }).join('')
// }
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
//
// function filterRange(arr, first, second) {
//     return arr.filter(item => (first <= item && item <= second));
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);

//
// function filterRangeInPlace(array, a ,b) {
//     for (let [index, val] of arr.entries()) {
//         if (val < a || val > b) {
//             arr.splice(index, 1)
//         }
//     }
// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr)

// let arr = [5, 2, 1, -10, 8];
//
// arr.sort((a, b) => b - a);
//
// alert( arr );

// function copySorted(arr) {
//     return arr.slice().sort();
// }
//
// let arr = ["HTML", "JavaScript", "CSS"];
//
// let sorted = copySorted(arr);
// sorted.pop()
// console.log(arr)
//
//
// function Calculator() {
//     this.calculate = (string) => {
//        const arrStr = string.split(' ')
//        const first = +arrStr[0]
//        const type = arrStr[1]
//        const second = +arrStr[0]
//         return this.operationType[type](first, second);
//     }
//
//     this.addMethod = function(name, func) {
//         this.operationType[name] = func;
//     };
//
//     this.operationType = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b
//     };
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let users = [ vasya, petya, masha ];
//
// let names = users.map(item => item.name);
//
// alert( names );

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
//
// let users = [ vasya, petya, masha ];
//
// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }));
//
// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */
//
// alert( usersMapped[0].id ); // 1
// alert( usersMapped[0].fullName );
// function sortByAge(arr) {
//     arr.sort((a, b) => a.age - b.age);
// }
//
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let arr = [ vasya, petya, masha ];
//
// sortByAge(arr);
//
// // теперь отсортировано: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// }
//
// let arr = [1, 2, 3];
// shuffle(arr);
// alert(arr);
//
// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// }
//
// // подсчёт вероятности для всех возможных вариантов
// let count = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '321': 0,
//     '312': 0
// };
//
// for (let i = 0; i < 1000000; i++) {
//     let array = [1, 2, 3];
//     shuffle(array);
//     count[array.join('')]++;
// }
//
// // показать количество всех возможных вариантов
// for (let key in count) {
//     alert(`${key}: ${count[key]}`);
// }
// 123: 250706
// 132: 124425
// 213: 249618
// 231: 124880
// 312: 125148
// 321: 125223

// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }
//
// // подсчёт вероятности для всех возможных вариантов
// let count = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '321': 0,
//     '312': 0
// };
//
// for (let i = 0; i < 1000000; i++) {
//     let array = [1, 2, 3];
//     shuffle(array);
//     count[array.join('')]++;
// }
//
// // показать количество всех возможных вариантов
// for (let key in count) {
//     alert(`${key}: ${count[key]}`);
// }
// 123: 166693
// 132: 166647
// 213: 166628
// 231: 167517
// 312: 166199
// 321: 166316
// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }
//
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
//
// let arr = [ vasya, petya, masha ];
//
// alert( getAverageAge(arr) );

//
// function unique(arr) {
//     let result = [];
//
//     result = arr.filter((value, index) => arr.indexOf(value) === index)
//
//     return result;
// }
//
// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];
//
// console.log( unique(strings) );

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

/*
после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// function groupById(array) {
//     const obj = {}
//     array.forEach((val) => {
//         obj[val.id] = val;
//     })
//     return obj
// }
// console.log(usersById)