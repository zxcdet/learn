// function printNumbers(from, to) {
//     let i = from
//     setTimeout(function run() {
//         if (i < to) {
//             console.log(i)
//             setTimeout(run, 1000);
//             i++
//         }
//     }, 1000);
// }


// function printNumbers(from, to) {
//     let i = from
//     let idInterval = setInterval(function run() {
//         if (i < to) {
//             console.log(i)
//             i++
//         } else {
//             clearInterval(idInterval);
//         }
//     }, 1000);
// }
//
// printNumbers(1, 5)
// let i = 0;
//
// setTimeout(() => alert(i), 100); // 100000000; j++) {
//
// // предположим, что время выполнения этой функции >100 мс
// for(let j = 0; j < 100000000; j++) {
//     i++;
// }