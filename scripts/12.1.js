let generator = pseudoRandom(1);

function* pseudoRandom(val) {
    let value = val;
    while(true) {
        value =  value * 16807 % 2147483647
        yield value
    }}

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073