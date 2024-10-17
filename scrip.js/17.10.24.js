let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let colors = [`red`,`white`,`blue`,`green`,`yellow`,`black`,`purple`]
const house ={
    address: `123 Main st`,
    color: `white`,
    rooms:4,
    floors:2,
    grage:true,

    cars:[
        {brand: `Toyota`, year: 2024},
        {brand: `BYD`, year: 2020},
        {brand: `Hondo`, year: 2018},
        {brand: `Bugaati`, year: 2020},
    ],
    memebers: [
        {name: `Shaxnoza`, age: 33},
        {name: `Sharifa`, age: 54},
        {name: `Rushana`, age: 22},
        {name: `Nafisa`, age: 21},
    ]
}
console.log(numbers[1] )
console.log(numbers[4] )
console.log(colors[2]) 
console.log(colors[6])
console.log(house.cars[0].brand + ' ' + house.cars[0].year)
console.log(house.memebers[1].name + ' ' + house.memebers[1].age)



let color = [`red`,`white`,`blue`,`green`,`yellow`,`black`,`purple`]
for(let i = 0; i < color.length; i++){
    console.log(color[i])
}


let cars =[
    {brand: `Toyota`, year: 2024},
    {brand: `BYD`, year: 2020},
    {brand: `Hondo`, year: 2018},
    {brand: `Bugaati`, year: 2020},
]
for(let i = 0; i < cars.length; i++){
    console.log(cars[i].brand + ' ' + cars[i].year)
}


let colorss = [`red`,`white`,`blue`,`green`,`yellow`,`black`,`purple`] 
for(let i = 0; i < colorss.length; i++){
    colorss[i] = 'white'
    console.log(colorss[i])
}


let scores = [10, 20, 30, 40, 50, 60];
 let total = 0;
 for (let i = 0; i < scores.length; i++) {
total = total + scores[i];
 }
 console.log(total);

 let message = [`my`, `name`,`is`,`Jonh`,`doe`];
 let text = ``;
 for(let i = 0; i < message.length; i++){
     text += message[i] + " ";
 }
 console.log(text)


let memeberss= [
    {name: `Shaxnoza`, age: 33},
    {name: `Sharifa`, age: 54},
    {name: `Rushana`, age: 22},
    {name: `Nafisa`, age: 21},
]
for(let i = 0; i < memeberss.length; i++){
    console.log(memeberss[i].name + ' ' + memeberss[i].age)
}