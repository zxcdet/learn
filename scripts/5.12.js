// let user = {
//     name: "Василий Иванович",
//     age: 35
// };
//
// const newConst = JSON.parse(JSON.stringify(user));

// let room = {
//     number: 23
// };
//
// let meetup = {
//     title: "Совещание",
//     occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//     place: room
// };
//
// room.occupiedBy = meetup;
// meetup.self = meetup;
//
// console.log( JSON.stringify(meetup, function replacer(key, value) {
//     return (key === 'self' || key === 'occupiedBy') ? undefined : value;
// }));