let obj = {};

function A() {
    return obj
}
function B() {
    return obj
}

alert( new A() == new B() );


function Calculator() {

    this.read = (a, b) =>  {
        this.a = a;
        this.b = b;
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read(2,3);

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('Сколько нужно добавить?', 0);
    };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
