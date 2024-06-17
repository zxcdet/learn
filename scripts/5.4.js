// let fruits = ["Яблоки", "Груша", "Апельсин"];
//
// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");
//
// // что в fruits?
// alert( fruits.length ); // 4
// let styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles[Math.floor((styles.length - 1) / 2)] = "Классика";
// alert( styles.shift() );
// styles.unshift("Рэп", "Регги");
// let arr = ["a", "b"];
//
// arr.push(function() {
//     alert( this );
// })
//
// arr[2](); // a,b,function(){...}

// function sumInput() {
//     const numbers = [];
//     while (true) {
//
//         let value = prompt("Add number", 0);
//
//
//         if (value === "" || value === null || !isFinite(value)) return value
//         numbers.push(+value);
//     }
//     let sum = numbers.reduce((acc, item) => acc + item);
//     return sum
//
//
// }
// sumInput()
//
function getMaxSubSum(arr) {
    let previousVal = 0;
    let sum = 0
    for (let val of arr) {
        sum += val;

        if (sum > previousVal) {
            previousVal = sum
        }
        if (sum < 0) sum = 0
    }
    return previousVal
}

console.log(getMaxSubSum([-1, 2, 3, -9]),getMaxSubSum([2, -1, 2, 3, -9]),
getMaxSubSum([-1, 2, 3, -9, 11]),
getMaxSubSum([-2, -1, 1, 2]),
getMaxSubSum([100, -9, 2, -3, 5]),
getMaxSubSum([1, 2, 3]) )

// let arr = [1, 2, 3];
//
// alert( arr ); // 1,2,3
// alert( String(arr) === '1,2,3' ); // true
// alert( [] + 1 ); // "1"
// alert( [1] + 1 ); // "11"
// alert( [1,2] + 1 ); // "1,21"
// alert( 0 == [] ); // true
//
// alert('0' == [] ); // false
// alert( [] == [] ); // false
// alert( [0] == [0] ); // false
