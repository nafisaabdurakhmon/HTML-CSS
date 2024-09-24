// let password = 5555;
// const safepassword = 1234;
// if(password == safepassword){
//     console.log(`phone unlocked`)
// }
// else{
//     console.log(`wrong password`)
// }


let speed = 85;
if(
    speed >= 60 && speed <=70
){
    console.log(`170$`)}
else if(
    speed >= 71 && speed <=85
){
    console.log(`340$`)
}
else if(
    speed > 85 
){
    console.log(`1000$`)
}
else{
    console.log(`no charges`)
}


let password = `AA34SF`;
let useAge = 20;
let systemPassword = `AA34SF`;

if(
    password == systemPassword && useAge >= 18
)
console.log (`passed`)
else{
    console.log(`failed`)
}


let transfer = `1233445`
let reciever = `4322129`
let transferBalance = 1600;
let recieverBalance = 500;
let amount = 1000;
if(reciever != `4322129`){
    console.log(`invalid resiver`)
}
if(transferBalance < amount){
console.log(`not anough balance`)
}
if(
    amount <= 0
){
    console.log(`amount can not be negetiv`)
}
else{
    transferBalance -= amount
    recieverBalance += amount
    console.log (transfer + `transfered` + amount + `to` + reciever)
}