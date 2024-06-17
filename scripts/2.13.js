// let i = 3;
//
// while (i) {
//     alert( i-- );
// }
// //1 last
//
// let i = 0;
// while (++i < 5) alert( i ); // 1-4
// let i = 0;
// while (i++ < 5) alert( i ); // 1-5
//
// for (let i = 0; i < 5; ++i) alert( i ); //1-4
//
// for (let i = 0; i < 5; i++) alert( i ); //1-4
//
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) continue
//     alert(i)
// }

// let val = prompt('Add number > 100')
// while (val <= 100 && val) {
//
//
// }
// let num;
//
// while (num <= 100 && num) {
//     num = prompt("Введите число больше 100?", 0); //work because statr first
// }
// do {
//     num = prompt("Введите число больше 100?", 0); //work because statr first
// } while (num <= 100 && num);


function calculate(num) {
    point:
        for (let i = 2; i <= num; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                continue point;
            }
        }
        alert( i );
    }
}
calculate(10)


