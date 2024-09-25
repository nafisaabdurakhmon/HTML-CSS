let i = 0;
i = i + 1;
console.log(i);

for (let i = 1; i < 10; i++) {
  console.log(i);
}

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < number.length; i++) {
  console.log(i);
}

let fruits = ["Apple", "Banana", "Cherry", "Mango"];
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Banana") {
  }
}
console.log(`Banana found in the list`);

let numbers = [11, 23, 33, 30, 40, 50, 4, 6, 8, 20, 90, 10];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 10) {
  }
}
console.log(10);

let num = [10, 2, 3, 4, 5, 3, 2, 4, 6, 2, 7, 8, 2];
let counter = 0;
for (let i = 0; i < num.length; i++) {
  if (num[i] < 5) {
    counter++;
  }
}
console.log(` found ` + counter + ` numbers less than 5`);

let numberr = [10, 20, 30, 40, 50, 60];
let total = 0;
for (let i = 0; i < numberr.length; i++) {
  total = total + numberr[i];
}
console.log(total);

let studensGrades = [50, 60, 75, 85, 55, 10, 20, 90];
let pasCounter = 0;
let failCounter = 0;
for (let i = 0; i < studensGrades.length; i++) {
  if (studensGrades[i] < 50) {
    failCounter++;
  } else {
    pasCounter++;
  }
}

console.log(failCounter + `studens failed`);
console.log(pasCounter + `studens passed`);

let numberss = [10, 20, 4, 5, 6, 70, 80, 90, 2, 3];
let even = 0;
let odd = 0;
for (let i = 0; i < numberss.length; i++)
  if (numberss[i]%2 === 0) {
    even ++;
  } else {
    odd ++;
  }
console.log(even + `even numbers`)
console.log(odd + `odd numbers`)