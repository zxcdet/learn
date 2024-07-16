// Function.prototype.defer = function(ms) {
//     setTimeout(this, ms);
// };
//
// function f() {
//     alert("Hello!");
// }
//
// f.defer(1000);


Function.prototype.defer = function(ms) {
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};
function f(a, b) {
    alert( a + b );
}

f.defer(1000)(1, 2);