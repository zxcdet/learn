// let a = +prompt("First", "");
// let b = +prompt("Second", "");
//
// alert( a + b );
//
// alert( 1.35.toFixed(1) ); // 1.4
// alert( 6.35.toFixed(1) ); // 6.3
// alert( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000
// alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4


function readNumber() {
    while (true) {
        let num = prompt("Введите число", 0);

        if (num === null || num === '') return null;

        if (isFinite(num)) return Number(num);
    }
}
readNumber()
// function readNumber() {
//     let num;
//
//     do {
//         num = prompt("Введите число", 0);
//     } while ( !isFinite(num) );
//
//     if (num === null || num === '') return null;
//
//     return +num;
// }
//
// alert(`Число: ${readNumber()}`);
// let i = 0;
// while (i != 10) {
//     i += 0.2;
// } //Infinity loop
// let i = 0;
// while (i < 11) {
//     i += 0.2;
//     if (i > 9.8 && i < 10.2) alert( i );
// }

// function random(min, max) {
//     return min + Math.random() * (max - min);
// }
//
// alert( random(1, 5) );
// alert( random(1, 5) );
// alert( random(1, 5) );

// function randomInteger(min, max) {
//     // случайное число от min до (max+1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }
//
// alert( randomInteger(1, 3) );