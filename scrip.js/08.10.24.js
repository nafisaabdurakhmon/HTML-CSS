let password = 1234
let login = `user`
if(password == 1234 && login == "user"){
    console.log(`wrong password or username`)
}
else{
         console.log(`login in`)
    }



    let balance = 400;
    if(balance < 500){
        console.log(`Ne dostatochno sredstv`)
    }
    else{
        console.log(`Dostatochno`)
    }


    let age = 18;
    if( age >= 18){
        console.log(`Voting`)
    }
    else{
        console.log(`She cannot vote`)
    }

 
    
let i = 0;   
for(let i = 1; i <= 10; i++){
    console.log(i)
}


let cart = [12.5,20,30,45.6]
let total = 0;
for(let i = 0; i < cart.length; i++){
    total = total + cart[i];
}
console.log(total)


let friends =[`Maks`,`Mike`,`Marry`,`Jonh`]
for(let i = 0; i < friends.length; i++) {
   console.log(`hello ` + friends[i])
}


let Studentgrades =[40,60,80,90,70,65]
let totalScore = 0;
let average = 0;
for(let i = 0; i < Studentgrades.length; i++){
    totalScore += Studentgrades[i]
}

average = totalScore / Studentgrades.length;
console.log(average)