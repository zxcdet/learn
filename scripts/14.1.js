// let user = {
//     name: "John"
//   };

//   function wrap(target) {
//     return new Proxy(target, {
//         get(target, prop) {
//             if (prop in target) {
//               return target[prop];
//             } else {
//               return 'Ошибка: такого свойства не существует';
//             }
//           }
//     });
//   }

//   user = wrap(user);

//   console.log(user.name); // John
//   console.log(user.age); // Ошибка: такого свойства не существует


//   let user = {
//     name: "John"
//   };
  
//   function wrap(target) {
//     return new Proxy(target, {
//       get(target, prop, receiver) {
//         if (prop in target) {
//           return Reflect.get(target, prop, receiver);
//         } else {
//           throw new ReferenceError(`Свойство не существует: "${prop}"`)
//         }
//       }
//     });
//   }
  
//   user = wrap(user);
  
//   alert(user.name); // John
//   alert(user.age); // Ошибка: Свойство не существует


// let array = [1, 2, 3];

// array = new Proxy(array, {
//     get(target, prop, receiver) {
//         if (prop < 0) {
//             prop =  target.indexOf(target.reverse()[(prop * -1) - 1]);
//         }
//         return Reflect.get(target, prop, receiver);
//     }
// });
// console.log(array[-2]); // John


// вся остальная функциональность массивов должна остаться без изменений


let handlers = Symbol('handlers');

function makeObservable(target) {
  target[handlers] = [];

  target.observe = function(handler) {
    this[handlers].push(handler);
  };

  return new Proxy(target, {
    set(target, property, value, receiver) {
      let success = Reflect.set(...arguments); 
      if (success) { 
        target[handlers].forEach(handler => handler(property, value));
      }
      return success;
    }
  });
}

let user = {};

user = makeObservable(user);

user.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user.name = "John";