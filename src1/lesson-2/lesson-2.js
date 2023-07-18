//======№1======
let user = 'John Doe';
console.log(user);

const student = 'Maksim';
console.log(student);

user = student;

console.log(user);

//======№2======
let test = 1;
test++;
test += '1';

// Ответ: Строка 21. Любое сложение number и string = string.
console.log(test);

test -= 1;
// Ответ: Строка 20. Вычитание приводится к number.
console.log(test);

test = Boolean(test);
// Ответ: true.
console.log(test);

//======№3======
const arr1 = [2, 3, 5, 8];
let res1 = 1;

for (let i = 0; i < arr1.length; i++) {
  res1 *= arr1[i];
}
console.log(res1);

//======№4======
const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 5 && arr2[i] < 10) {
    console.log(arr2[i]);
  }
}

//======№5======
const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 === 0) {
    console.log(arr3[i]);
  }
}
