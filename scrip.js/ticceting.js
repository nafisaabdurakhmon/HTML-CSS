let age = 60;
let price;
if (age < 12) {
    price = 5 ;
}
else if(age >= 12 && age < 18) {
    price = 10;
}
else if (age >= 18 && age < 60) {
    price = 20 ;
}
else{
    price = 15;
}
console.log ('price ' + price)