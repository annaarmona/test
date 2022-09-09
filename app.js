const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  numbers.slice(3, 8), // [3, 4, 5, 6, 7]
  
  // первые 5 элементов
  numbers.slice(0, 5), // [0, 1, 2, 3, 4]
  
  // элементы с индекса 4 и до конца 
  numbers.slice(4), // [4, 5, 6, 7, 8, 9]
  
  // все элементы массива
  numbers.slice(), // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  
  // отрицательные индексы считаются с конца
  numbers.slice(-4, -2), // [6, 7]
  
  // все элементы кроме первого и последнего 
  numbers.slice(1, -7), // [1, 2, 3, 4, 5, 6, 7, 8]
  
  // последние 3 элемента
  numbers.slice(-3), // [7, 8, 9]
);