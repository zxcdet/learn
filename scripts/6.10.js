// // function f() {
// //     alert( this ); // null
// // }
// //
// // let user = {
// //     g: f.bind(null)
// // };
// //
// // user.g();
//
// // function f() {
// //     alert(this.name);
// // }
// //
// // f = f.bind( {name: "Вася"} ).bind( {name: "Петя"} );
// //
// // f(); // Вася
//
// // function sayHi() {
// //     alert( this.name );
// // }
// // sayHi.test = 5;
// //
// // let bound = sayHi.bind({
// //     name: "Вася"
// // });
// //
// // alert( bound.test ); // undefind
//
// // function sayHi() {
// //
// // }
// // sayHi.test = 5;
// // console.log(sayHi())
//
//
// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }
//
// let user = {
//     name: 'Вася',
//
//     loginOk() {
//         alert(`${this.name} logged in`);
//     },
//
//     loginFail() {
//         alert(`${this.name} failed to log in`);
//     },
//
// };
//
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',

    login(result) {
        alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?
askPassword(() => user.login(true), () => user.login(false));