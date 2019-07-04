/*for( i = 0; i < 10; i++ ){
    console.log(i);
   } 

for( i = 9; i>-1; i-- ){                          //to flip and make it count from 9 - 0
    console.log(i);
}*/


/*let faveChoc = [
    "kinder",
    "mars",
    "galaxy",
    "milkyway",
    "yorkie"
];


console.log(faveChoc[0])                                                           //for loop
console.log(faveChoc[1])
console.log(faveChoc[2])
console.log(faveChoc[3])
console.log(faveChoc[4])

for (chocIndex = 0; chocIndex < faveChoc.length; chocIndex++) {
    console.log(faveChoc [chocIndex])
}*/


/*console.log(faveChoc[0])                                                           //for loop
console.log(faveChoc[1])
console.log(faveChoc[2])
console.log(faveChoc[3])
console.log(faveChoc[4])*/

/*for (chocIndex = 0; chocIndex < faveChoc.length; chocIndex++) {
    console.log(faveChoc [chocIndex])
}
*/
/*

while(currentChoc != "galaxy"){
 console.log(currentChoc);
 currentChoc = faveChoc[Math.floor(Math.random()*5)];
}
console.log(currentChoc);

*/
let faveChoc = [
    "kinder",
    "mars",
    "galaxy",
    "milkyway",
    "yorkie"
];

for (chocIndex = 0; chocIndex < faveChoc.length; chocIndex++) {
    console.log(faveChoc [chocIndex])

    if (faveChoc[chocIndex] == "galaxy") {
        console.log("yaaay my favourite chocolate bar");
    }
    else {
        console.log("aww man i want galaxy");
    }
}
