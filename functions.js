/*const coffeeOrder = (size, drink) =>{
    console.log(`you would like a ${size} amount of ${drink}`)
}
coffeeOrder("small", "latte")
coffeeOrder("medium", "cappuccino")

takeOrder("pineapple", "pepperoni", "cheese");
let orderCount = 0;
const takeOrder = (topping1, topping2, topping3) => {
    console.log("order number " + orderCount)
    console.log(`Pizza with ${topping1}, ${topping2}, ${topping3}`);
 orderCount++;
}

takeOrder("pineapple", "pepperoni", "cheese");
let orderCount = 0;
const takeOrder = (topping1, topping2, topping3) => {
    console.log("order number " + orderCount)
    console.log(`Pizza with ${topping1}, ${topping2}, ${topping3}`);
 orderCount++;
}*/

let orderCount = 0;
const takeOrder = (filling1, filling2, filling3, filling4, filling5) => {
    console.log("order number" + orderCount)
    console.log(`Sandwich with ${filling1}, ${filling2}, ${filling3}, ${filling4}, ${filling5}`)
}
takeOrder("lettuce", "chicken", "cucumber", "peppers", "onions");
orderCount++;


/*let pin = 1234; //pin variable for the account
const cashWithdrawal = (balance, amount) => { //connected to the
    //function at the end
    if (pin == 1234 && amount <= balance){ 
        //in here amount is placed equal tothe balance
        console.log("You're allowed to withdraw this amount!");
        console.log(`Withdrawing ${amount} from the account `);
        //this shows the amount withdrwan
    }
    else if(pin != 1234 && amount <= balance){
        //if pin is incorrect
        console.log("Invalid pin");
    }
    else {console.log("Invalid pin!");}
    //no clue       
}
cashWithdrawal(900, 800); // balance and amount*/