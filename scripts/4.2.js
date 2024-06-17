function deepCopy(obj) {
    // Перевірка, чи є значення об'єктом
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Створення нового масиву, якщо об'єкт є масивом
    if (Array.isArray(obj)) {
        const copy = [];
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deepCopy(obj[i]);
        }
        return copy;
    }

    // Створення нового об'єкта, якщо це звичайний об'єкт
    const copy = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}

// Приклад використання
const original = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4]
    }
};

const copy = deepCopy(original);

console.log(copy); // { a: 1, b: { c: 2, d: [ 3, 4 ] } }
console.log(copy !== original); // true
console.log(copy.b !== original.b); // true
console.log(copy.b.d !== original.b.d); // true