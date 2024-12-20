function atm (){
    let accountBalance=1000;
    let withdrawAmount = Number(prompt("enter the amount you want to withdraw:"));
    
    if(isNaN(withdrawAmount)|| withdrawAmount<=0) {
        console.log("invalid amount entered.");
        return;
        
    }
    if (withdrawAmount> accountBalance) {
        console.log("not enough money.");
    } else {
        accountBalance-=withdrawAmount;
        console.log(`You have withdrawn $${withdrawAmount}.`);
        console.log(`You have $${accountBalance} in your account.`);
    }



}