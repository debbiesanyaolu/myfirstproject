let hisName = "Deniro";
console.log(hisName);

let hisAge = "22";
console.log(hisAge);

let hisFaveColour = "Purple";

console.log ("The guy's name on my left is " + hisName + " and he is " + hisAge + " years old, his favourite colour is " + hisFaveColour);

console.log (`The guy's name on my left is ${hisName} and he is ${hisAge} years old, his favourite colour is ${hisFaveColour}`);
let space1 = "o";
console.log(space1);
let space2 = "o";
console.log(space2);
let space3 = "x";
console.log(space3);
let space4 = "x";
console.log(space4);
let space5 = "x";
console.log(space5);
let space6 = " ";
console.log(space6);
let space7 = "o";
console.log(space7);
let space8 = " ";
console.log(space8);
let space9 = " ";

console.log("   |   |   ");
console.log(` ${space1} | ${space2} | ${space3}`); 
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space4} | ${space5} | ${space6}`);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space7} | ${space8} | ${space9}`);
console.log("   |   |   ");

if (space1 == "o" && space2 == "o" && space3 == "o") {
    console.log ("you win")}
    else if (space1 == "x" && space2 == "x" && space3 == "x") {
        console.log("you win")
    }