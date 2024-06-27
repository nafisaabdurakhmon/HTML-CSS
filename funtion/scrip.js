/*function loginPasword(email,password){
   if(email === '1234'&& password ==='1234'){
    console.log("login success")
   }
   else{
    console.log("login failed")
   }
}
loginPasword('12314','1234')*/


let account1 = 1000
let account2 = 250

function transfer(amount, transfer,reciever){
if(transfer < amount){
    console.log('insufficient funds')
}
else{
    transfer -= amount
    reciever += amount
    console.log('Transfered $ {amount} from ${transfer} to ${reciever}'  )
}
}
transfer(10000,account1,account2)