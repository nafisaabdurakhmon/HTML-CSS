let balance = 1000;

function Chekcbalance(){
console.log(`your balance is:` + balance)
}

function deposit(amount){
 if( amount <= 0 )
console.log('amount cannot be negativ')
else{
    balance += amount
}
}
function winthdraw(amount){
    if( amount <= 0 )
    console.log(`your deposit;  `+ amount)
else if(amount > balance){
    console.log(`you don't have enought money`)
}
    else{
        balance -= amount
        console.log(`you winthdraw:`+ amount)
    }
}
Chekcbalance()
deposit(100)
Chekcbalance()
winthdraw()





let fualprice = 3;

 function fual(ltr){
    console.log(ltr * fualprice)
    return ltr * fualprice 
 }
let fualCost = fual(10)
Chekcbalance()
winthdraw(fualCost)
Chekcbalance()


let borrowedbooks = 0;
function bordobooks(){
console.log(borrow + books)
}
bordobooks(4)


function weather(temp){
    if(temp < 30){
        console.log(`it cold outside`)
    }
    else{
        console.log(`its hot outside`)
    }

}