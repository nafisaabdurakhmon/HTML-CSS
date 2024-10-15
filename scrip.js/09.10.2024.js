let items = [
    {items: `Apple`,price: 3},
    {items: `Banana`,price: 4 }, 
    {items: `Orange`,price: 3 }, 
    {items: `Pineapple`,price: 5 }, 
]

for(let i = 0; i < items.length; i++){
    if(items[i].price < 4){
        console.log(items[i].items + "with price" + items[i].price)
    }
else{
    console.log(items[i].items + "is expensive")
}
}

// console.log(items[1].price)


let tasks = [
    {tasks: `Clean the house` , completed: true},
    {tasks: `Do homework` , completed:false },
    {tasks: `Take shower` , completed:true },
    {tasks: `Fix door` , completed:false },
]
for(let i = 0; i < tasks.length; i++ )
if(tasks[i].completed === true){
    console.log(tasks[i].tasks)
}


let products = [
    {name: `Notebook`,stocks: 10 },
    {name: `Pencil`,stocks: 5 },
    {name: `Pen`,stocks: 15 },
    {name: `Eraser`,stocks: 20 },
]
for(let i = 0; i < products.length; i++)
if(products[i].stocks < 10){
    console.log(products[i].name)
}


let studensts = [
    {name: `Mike`, grade: 56},
    {name: `Merry`, grade: 80},
    {name: `Jonh`, grade: 60},
    {name: `Abdullo`, grade: 95},
    {name: `Sardor`, grade: 87},
]

let total = 0;
let average = 0;
for(let i = 0; i < studensts.length; i++) {

    if(studensts[i].grade >= 95){
        console.log(studensts[i].name + " A++")
    }
    else if(studensts[i].grade >= 80 && studensts[i].grade < 95){
        console.log(studensts[i].name + " A")
    }
    else if(studensts[i].grade >= 70 && studensts[i].grade < 80)
    console.log(studensts[i].name + " B")

    else  {
        console.log(studensts[i].name + ` failed`) 
     }
     
}
     average = total / Studensts.length;
     console.log(average.grade  + `average`)
