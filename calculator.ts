/**
 * Let's make a calculator
 */
type Operater = 'add' | 'subtract' | 'multiply' | 'divide' | 'remainder';

function calculate(operator: Operater, num1: number, num2: number): number {
  switch (operator) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      return num1 / num2;
    case 'remainder':
      return num1 % num2;
    default:
      throw new Error('🚨 Unknown Error');
  }
}
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('subtract', 8, 3)); // 5
console.log(calculate('multiply', 1, 3)); // 3
console.log(calculate('divide', 6, 3)); // 2
console.log(calculate('remainder', 7, 3)); // 1
