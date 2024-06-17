function checkAge(age) {
    if (age > 18) {
        return true;
    }
    return confirm('Родители разрешили?');
}

function checkAge(age) {
    return age > 18 ? true : confirm('Родители разрешили?')

}

function checkAge(age) {
    return (age > 18) ||  confirm('Родители разрешили?')

}
function min(a, b) {
    return a  < b ? a : b
}

function pow(a, b) {
   return a ** b;

}
console.log(pow(3, 3))