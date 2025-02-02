// // Именно finally гарантирует очистку. Если мы просто поместим код в конце f, то он не выполнится в описанных ситуациях.
//
// function f() {
//     try {
//         alert('начало');
//         return "result";
//     } catch (e) {
//         /// ...
//     } finally {
//         alert('очистка!');
//     }
// }
//
// f(); // очистка!

// function f() {
//     try {
//         alert('начало');
//         throw new Error("ошибка");
//     } catch (e) {
//         // ...
//         if("не могу обработать ошибку") {
//             throw e;
//         }
//
//     } finally {
//         alert('очистка!')
//     }
// }
//
// f(); // очистка!