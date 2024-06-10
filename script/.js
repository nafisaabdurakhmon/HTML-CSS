//Declaring variables
let name = 'John'; //string or text
let isMarried = false; //boolean 
let age = 25; //integer or number
let height = 1.75; //double or float
let children = ['Mike', 'Ted', 'Alice']; //array or list
const address = {
    city: 'New York',
    country: 'USA'
}; //object

//Reassigning variables
isMarried = false;
name = 'Firuz';
age = 2024 - 1996;

//Conditional statement
if(isMarried == true) { //if(true)
    console.log(name + ' is married');
}
else if(isMarried == false && age >= 25) { //if(false)
    console.log(name + ' need to get married');
}
else { //if(false)
    console.log(name + ' is not married');
}

// ==, ===, !=, !==, >, <, >=, <=

if(condion1 === condion2 && condition3 === condition4) {
    //Execute code
}
else if(condion1 < condion2) {
    //Execute code
}
else {
    //Execute code
}

//Loop
for(let i = 0; i < 10; i++) {
    //Execute code
}

while(isMarried == true) {
    //Execute code
}

do {
    //Execute code
} while(isMarried == true)