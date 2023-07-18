//======FUNCTION MIN(MAX)======
const min = (a, b) => {
  if (a < b) {
    return a;
  }
  return b;
};
console.log(min(5, 6));

const max = (a, y) => {
  return Math.max(a, y);
};
console.log(max(5, 6));

const minTern = (a, b) => {
  return a < b ? a : b;
};
console.log(minTern(5, 6));

//======FUNCTION PALINDROME======
const isPalindrome = (string) => {
  let reverse = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse === string;
};
console.log(isPalindrome('шалаш'));

//======FUNCTION ZERO======
const getRandom = () => {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    const num = Math.floor(Math.random() * 101);
    arr[i] = num;
  }
  return arr;
};
const arr = getRandom();
console.log(arr);

const getTransformation = (array) => {
  const res = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i].toString();
    if (!value.includes('0')) {
      res[i] = +value;
    } else {
      let zeroString = '';
      for (let j = 0; j < value.length; j++) {
        if (value[j] === '0') {
          zeroString += 'zero';
        } else {
          zeroString += value[j];
        }
      }
      res[i] = zeroString;
    }
  }
  return res;
};

console.log(getTransformation(arr));
