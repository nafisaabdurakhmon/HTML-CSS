let name = "nafisa";
let ages = 21;
let isMarried = false;
let children = ["aisha", "muhhamadali"];
let persons = {
  name: "nafisa",
  age: 25,
  isMarried: false,
  children: ["aisha", "muhammadali"],
};

let height = 180;
if (height <= 180) {
  console.log("is short");
} else if (height > 180 && height < 170) {
  console.log("you are averic");
} else {
  console.log("short is not");
}

let person = {
  name: "nafisa",
  age: 25,
  isMarried: false,
  children: ["aisha", "muhammadali"],
};
for (let i = 0; i < person.length; i++) {
  if (person[i].children) {
    console.log("human children");
  } else {
    console.log("not children");
  }
}
console.log(person.children[3]);

const phone = [
  {
    brand: "apple",
    model: "iphone 12 promax",
    price: "1000",
    scores: [128, 256, 512, 1024],
  },

  {
    brand: "samsung",
    model: "galaxy s20",
    price: "900",
    scores: [128, 256, 512],
  },

  {
    brand: "google",
    model: "pixel 5",
    price: "700",
    scores: [128, 64],
  },
];
for (let i = 0; i < phone.length; i++) {
  console.log(
    "brand " +
      phone[i].brand +
      " " +
      "model " +
      phone[i].model +
      " " +
      "price " +
      phone[i].price
  );

  for (let i2 = 0; i2 < phone[i].scores.length; i2++) {
    console.log("scores " + phone[i].scores[i2]);
  }
}

let fruits = [
  {
    name: "apple",
    location: ["usa", "canada", "uk"],
  },
  {
    name: "banana",
    location: ["usa", "mexico"],
  },
  {
    name: "mango",
    location: ["uxbekistan", "brazila"],
  },
];
for (let i = 0; i < fruits.length; i++) {
  console.log("name " + fruits[i].name);

  for (let i2 = 0; i2 < fruits[i].location.length; i2++) {
    console.log("- " + fruits[i].location[i2]);
  }
}

let num1 = 10;
let num2 = 20;
function add(num1, num2) {
  console.log(num1 + num2);
}
add(10, 20);

function displayaray(aray ,text) {
  for (let i = 0; i < aray.length; i++) {
    console.log(text + aray[i]);
  }
}
let cars = ['aux','byd','bmw'];
let country = ['usa','canada','dubai'];
let animals = ['cat','dog','sheep'];


displayaray(fruits[0].location);
displayaray(cars, '- ');
displayaray(country, '* ');
displayaray(animals, '# ');


