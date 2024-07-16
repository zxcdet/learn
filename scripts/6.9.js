// //
// // function spy(func) {
// //
// //     function wrapper(...args) {
// //         wrapper.calls.push(args);
// //         return func.apply(this, args);
// //     }
// //
// //     wrapper.calls = [];
// //
// //     return wrapper;
// // }
// //
// //
// //
// //
// //
// // function work(a, b) {
// //     alert( a + b ); // произвольная функция или метод
// // }
// //
// // work = spy(work);
// //
// // work(1, 2); // 3
// // work(4, 5); // 9
// //
// //
// // function decorator(a,b) {
// //     const cesh = new Map()
// //
// //
// // }
// //
// // for (let args of work.calls) {
// //     alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// // }
//
//
// function f(x) {
//     console.log(x);
// }
//
// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);
//
// function delay(func, time) {
//     return function () {
//         return setTimeout(() => func.apply(this, arguments), time)
//     };
// }
//
//
// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс
//
// function debounce(func, ms) {
//     let timeout;
//     return function() {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => func.apply(this, arguments), ms);
//     };
// }

// function throttle(func, ms) {
//
//     let isThrottled = false,
//         savedArgs,
//         savedThis;
//
//     function wrapper() {
//
//         if (isThrottled) { // (2)
//             savedArgs = arguments;
//             savedThis = this;
//             return;
//         }
//
//         func.apply(this, arguments); // (1)
//
//         isThrottled = true;
//
//         setTimeout(function() {
//             isThrottled = false; // (3)
//             if (savedArgs) {
//                 wrapper.apply(savedThis, savedArgs);
//                 savedArgs = savedThis = null;
//             }
//         }, ms);
//     }
//
//     return wrapper;
// }