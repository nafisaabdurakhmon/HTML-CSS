let weight = 50;
let height = 1.65;
let formula = weight / (height * height) 
let status;
if(bmi <= 18.5 ){
    status = 'UnderWeight';
}
else if(bmi >= 18.5 && bmi<= 24.9 ){
    status = 'Normal';
}
else if(bmi >= 25.0 && bmi<= 39.9 ){
    status = 'OverWeight';
}
else{
    status = 'Obese';
}
console.log ('status' + status)
console.log ('bmi'+ bmi)