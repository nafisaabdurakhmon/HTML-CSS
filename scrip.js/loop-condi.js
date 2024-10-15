
let fruits = [`Apple`, `Banana`, `Cherry`,`Mango`,`Apple`,`Strawberry`,`Banana`,`Pineapple`,`Apple` ];
let apple = 0;
let banana = 0;
let cherry = 0;
let mango = 0;
let strawberry = 0;
let pineapple = 0;
for(let i = 0; i < fruits.length; i++){
    if(fruits[i] === `Apple`){
      apple++;
    }
    else if(fruits[i] === `banana`){
        banana++;
    }
    else if(fruits[i] === `cherry`){
        cherry++;
    }
    else if(fruits[i] === `mango`){
        mango++;
    }
    else if(fruits[i] === `strawberry`){
        strawberry++;
    }
    else if(fruits[i] === `pineapple`){
        pineapple++;
    }
}
console.log(apples + ` apples`)
console.log(banana + `banana`)
console.log(cherry + ` cherry`)
console.log(mango + `mango `)
console.log(strawberry + `strawberry `)
console.log(pineapple + `pineapple `)