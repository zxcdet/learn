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

function copySorted(arr) {
    return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);
sorted.pop()
console.log(arr)