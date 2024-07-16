// function sumTo(n) {
//     let x = 0;
//     for (let i = 1; i <= n; i++) {
//         x  = i + x;
//     }
//     return x;
// }
//
// console.log(sumTo(3));

// function sumTo(n) {
//     if (n < 1) {
//         return n;
//     }
//     return  n + sumTo(n-1)
// }
// console.log(sumTo(3));

// function sumTo(n) {
//     return n * (n + 1) / 2;
// }

// function factorial(n) {
//     if (n < 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
//
// console.log(factorial(5));


// function fib(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return  fib(n - 1) + fib(n - 2)
// }
//
// console.log(fib(3))
// console.log(fib(7))
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
function printList(list) {
    console.log(list.value);
    if (list.next) {
        printList(list.next);
    }
}

// function printList(list) {
//
//     while(list) {
//         alert(list.value);
//         list = list.next;
//     }
//
//
// }

// function printReverseList(list) {
//     if (list.next) {
//         printList(list.next);
//     }
//     console.log(list.value);
// }
function printReverseList(list) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        alert( arr[i] );
    }
}

console.log(printList(list))