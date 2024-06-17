function isEmpty(obj) {
    return Object.keys(obj).length > 0;
}

console.log(isEmpty({name: 'dssda'}))

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let value = 0;
for (let key in salaries) {
    value = value + salaries[key]; // value += salaries[key]
}
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof  obj[key] === 'number') {
            obj[key] *= 2
        }
    }
}
multiplyNumeric()