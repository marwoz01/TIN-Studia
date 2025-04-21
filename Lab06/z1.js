console.log("Zadanie 1:")

const prostokat = (a, b) => a * b;
const trapez = (a, b, h) => ((a + b) * h) / 2;
const rownoleglobok = (a, h) => a * h;
const trojkat = (a, h) => (a * h) / 2;

function pole(callback, ...args) {
    return callback(...args);
}

console.log('Prostokąt 5x10:', pole(prostokat, 5, 10));
console.log('Trapez 3, 7, h=4:', pole(trapez, 3, 7, 4));
console.log('Równoległobok 6, h=5:', pole(rownoleglobok, 6, 5));
console.log('Trójkąt 4, h=3:', pole(trojkat, 4, 3));
