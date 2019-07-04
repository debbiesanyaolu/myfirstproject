let age = 18;

if (age > 17) {
    console.log("I can sevre you");
}
else {
    console.log("You aren't old enough");
}

let country = "UK";
if (age > 17 && country == "UK") {
    console.log("I can serve you")
}
else {
    console.log("I can't serve you")
}

let P = "password";
if (P.length<8) {
    console.log("The password is too short")
}
else {
    console.log("You're in")
}


//Challenge 2
let num = 6;
if (((num % 3) == 0) || ((num % 5) == 0)) {
    console.log("this number is divisible by 3 or 5")
}
else {
    console.log("This number is not divisible by 3 or 5")
}

//Challenge 3

let numb = 15
if (numb % 3 ==0 && numb % 5 ==0) {
    console.log ("fizz buzz")
}
else if (numb % 3 ==0) {
    console.log ("fizz")
}
else if (numb % 5 ==0) {
    console.log ("buzz")
}

//Challenge 4

let number = (5353);
if (number.toString() == number.toString().split("").reverse().join("")){
    console.log("This is a Palindrome")
}
else {
    console.log ("This is not a Palindrome")
}*/

let t = ("time");