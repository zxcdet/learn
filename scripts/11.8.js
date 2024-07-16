// function loadJson(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }
//         })
// }
//
// loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404
//
// async function loadJson(url) {
//   let result =   await fetch(url)
//     if (result.status == 200) {
//         let json = await result.json(); // (3)
//         return json;
//     }
//         throw new Error(result.status);
// }
//
// loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404
//
//
// class HttpError extends Error {
//     constructor(response) {
//         super(`${response.status} for ${response.url}`);
//         this.name = 'HttpError';
//         this.response = response;
//     }
// }
//
// async function loadJson(url) {
//     const response = await fetch(url);
//     if (response.status == 200) {
//         let json = await response.json(); // (3)
//         return json;
//     }
//     throw new Error(response.status);
// }
//
// // Запрашивать логин, пока github не вернёт существующего пользователя.
// async function demoGithubUser() {
//     let user;
//     while(true) {
//         let name = prompt("Введите логин?", "iliakan");
//
//         try {
//             user = await loadJson(`https://api.github.com/users/${name}`);
//             break; // ошибок не было, выходим из цикла
//         } catch(err) {
//             if (err instanceof HttpError && err.response.status == 404) {
//                 // после alert начнётся новая итерация цикла
//                 alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//             } else {
//                 // неизвестная ошибка, пробрасываем её
//                 throw err;
//             }
//         }
//     }
// }
// demoGithubUser.catch(err => {
//     if (err instanceof HttpError && err.response.status == 404) {
//         alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//         return demoGithubUser();
//     } else {
//         throw err;
//     }
// })
//
//
// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//
//     return 10;
// }
//
// function f() {
//     wait().then(result => alert(result));
// }

function* gen() {
    let ask1 = yield "2 + 2 = ?";

    console.log(ask1); // 4

    let ask2 = yield "3 * 3 = ?"

    console.log(ask2); // 9
}

let generator = gen();

console.log( generator.next().value ); // "2 + 2 = ?"

console.log( generator.next(4).value, 'dasasd' ); // "3 * 3 = ?"

console.log( generator.next(9).done ); // true