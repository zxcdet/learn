// function makeUser() {
//     return {
//         name: "John",
//         ref: this
//     };
// }
//
// let user = makeUser();
//
// alert( user.ref.name );//Error: Cannot read property 'name' of undefined
// function makeUser() {
//     return {
//         name: "John",
//         ref() {
//             return this;
//         }
//     };
// }
//
// let user = makeUser();
//
// alert( user.ref().name ); // John




let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },
    read(a, b) {
        this.a = a;
        this.b = b;
    }
}
calculator.read(2,3);
console.log(calculator.sum())

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep();