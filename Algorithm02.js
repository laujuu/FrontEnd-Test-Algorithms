// Cria um objeto chamado "calculator" com quatro propriedades que representam operações matemáticas básicas.
const calculator = {
  
  // Adição: Recebe uma matriz de números e retorna a soma dos números.
  add: function(numbers) {
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  },
  
  // Subtração: Recebe uma matriz de números e retorna a diferença entre eles.
  subtract: function(numbers) {
    let difference = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      difference -= numbers[i];
    }
    return difference;
  },
  
  // Multiplicação: Recebe uma matriz de números e retorna o produto dos números.
  multiply: function(numbers) {
    let product = 1;
    for (let number of numbers) {
      product *= number;
    }
    return product;
  },
  
  // Divisão: Recebe dois argumentos numéricos e retorna o resultado da divisão, ou null se o segundo argumento for zero.
  divide: function(a, b) {
    if (b === 0) {
      return null;
    }
    return a / b;
  }
};

// Cria uma matriz de números.
const numbers = [5, 10, 2];


console.log(calculator.add(numbers));
console.log(calculator.subtract(numbers));
console.log(calculator.multiply(numbers));
console.log(calculator.divide(10, 2));
console.log(calculator.divide(10, 0));
