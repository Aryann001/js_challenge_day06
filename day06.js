// Task 1
const numArr = [1, 2, 3, 4, 5];
console.log(numArr);

// Task 2
console.log(numArr[0]);
console.log(numArr[4]);

// Task 3
numArr.push(6);
console.log(numArr);

// Task 4
numArr.pop();
console.log(numArr);

// Task 5
numArr.shift();
console.log(numArr);

// Task 6
numArr.unshift(0);
console.log(numArr);

// Task 7
const newNumArr = numArr.map((number) => number * 2);
console.log(newNumArr);

// Task 8
const evenNumbers = numArr.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// Task 9
const sumOfAllNumberInNumArr = numArr.reduce((acc, number, index, array) => {
  return acc + number;
}, 0);
console.log(sumOfAllNumberInNumArr);

// Task 10
for (let i = 0; i < numArr.length; i++) {
  console.log(numArr[i]);
}

// Task 11
numArr.forEach((number, index, array) => console.log(`- ${number}`));

// Task 12
const matrix = [
  [1, 2],
  [3, 4],
];
console.log(matrix);

// Task 13
console.log(matrix[0][0]);
// additional---
matrix.forEach((val, index, array) =>
  val.forEach((number) => console.log(`-- ${number}`))
);
