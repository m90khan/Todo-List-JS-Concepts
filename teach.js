const multiply = (a, b, c) => a * b * c;
const partialMultiplyBy5 = multiply.bind(null, 5);
const x = partialMultiplyBy5(3, 2);
console.log('====================================');
console.log(x);
console.log('====================================');
