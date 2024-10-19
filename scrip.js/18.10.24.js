const bank =[
    {account: 1234, balance: 100},
    {account: 1234, balance: 2500},
    {account: 1234, balance: 1000},
    {account: 1234, balance: 400},

]
for (let i = 0; i < bank.length; i++){
    if(bank[i].balance < 500){
        console.log("cannot transfer")
    }
    else {
        console.log("can transfer")
    }
   
}

