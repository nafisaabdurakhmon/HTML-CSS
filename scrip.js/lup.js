/*let number = []
for(let a = 10; a > 1; a--){
    number.push(a)
}
console.log(number)*/



/*let lists = [1,2,3,4,5];
for(let a = 0; a < lists.length; a++){
    console.log(lists[a] *2)
}*/


/*let arr = [];
let i = 1;
while(i < 100){
arr.push(i)
    i++;
}
console.log(arr)*/

/*let isCorrect = true;
while(isCorrect == true){
    console.log('Hello World');
    isCorrect = false
}*/

/*let isCorrect = false;
do{
    console.log('Good');
}while(isCorrect == true)*/

/*let i = 10;
while(i >= 1){
    console.log(i);
    i--;
}*/

/*let  number = [-1,-5,-7,0,3,-7,3,10]
let totalNumber = 0;
let totalNegative = 0;
for(let i = 0; i < number.length; i++ ){
    if(number[i] >+ 0){
        totalNumber += number[i];
    }
    else{
        totalNegative += number[i];
    }
}
console.log(totalNumber);
console.log(totalNegative);*/


/*let fruits = ['Apple', 'Banana','Apple','Mango','Apple','Pineapple'];
let counter = 0;
for(let i = 0; i < fruits.length;i++ ){
    if(fruits[i]==='Apple'){
        counter++;
    }
}
console.log(counter + 'apples found in the list')*/

let number = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i < number.length; i++){
if(number[i] % 2 === 0){
    console.log(number[i] + 'juft')
}
else {
console.log(number[i] + 'toq')
}
}
