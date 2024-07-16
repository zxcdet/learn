// class Rabbit extends Object {
//     constructor(name) {
//         super(name);
//         this.name = name;
//     }
// }
//
// let rabbit = new Rabbit("Кроль");
//
// alert( rabbit.hasOwnProperty('name') ); // Ошибка
//
// class Rabbit extends Object {}
//
// alert( Rabbit.prototype.__proto__ === Object.prototype ); // (1) true
// alert( Rabbit.__proto__ === Object ); // (2) true
//
// alert( Rabbit.getOwnPropertyNames({a: 1, b: 2}) ); // a,b

//
// class Rabbit {}
//
// alert( Rabbit.prototype.__proto__ === Object.prototype ); // (1) true
// alert( Rabbit.__proto__ === Object ); // (2) false (!)
// alert( Rabbit.__proto__ === Function.prototype ); // как у каждой функции по умолчанию
//
// // ошибка - нет такой функции у Rabbit
// alert( Rabbit.getOwnPropertyNames({a: 1, b: 2}) ); // Ошибка