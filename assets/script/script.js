// Тренируем навык работы с циклами и массивами

// Вам необходимо выполнить следующие операции над массивом чисел:


// Создайте пустой массив с именем numbers
let numbers = [];

// Заполните массив numbers целыми числами от -10 до 10 (включительно) с помощью цикла.
for (let i = -10; i <= 10; i++) {
  numbers.push(i);
}

// Используя циклы, выполните следующие операции над массивом numbers:
// Удалите все отрицательные числа из массива
// for (var i = 0; i <= n; i++)
//   {
//       if(arr[i]<0){
  //           arr.splice(i, 1);
  //           n--;
  //       }
  //   }
  let cloneNumbers = Array.from(numbers);
  
  for (let i = 0; i < cloneNumbers.length; i++) {
    if (cloneNumbers[i] < 0) {
      cloneNumbers.splice(i, 1);
      i--;
    }
  }
  
  // Возведите каждое число в квадрат
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] ** 2;
  }
  
  // Отсортируйте числа в порядке убывания
  //numbers.sort((a, b) => a - b); // Пример сортировки массива чисел в порядке возрастания
  
  numbers.sort((a, b) => b - a);

  // Выведите полученный массив numbers в консоль
  console.log(numbers);
  
  // ☝🏻 При выполнении задания обратите внимание на правильное использование циклов, операции над массивами и соответствие результатов требуемым условиям
  
  //const parentElement = document.querySelector('.container');
  
  // const newElement = document.createElement('p');
  // newElement.textContent = `Целые числа от -10 до 10: ${numbers}`;
  // parentElement.append(newElement);
  
  // const positiveElement = document.createElement('p');
  // positiveElement.textContent = `Положительные числа массива: ${cloneNumbers}`;
  // parentElement.append(positiveElement);
  
  // const squareElement = document.createElement('p');
  // squareElement.textContent = `Квадрат чисел: ${numbers}`;
  // parentElement.append(squareElement);
  
  
  
  
  