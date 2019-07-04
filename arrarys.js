let faveSong = [                    //This is an array
    "Baby",
    "Diva",
    "Name"
];
console.log(faveSong[0])               //Makes list look neater
console.log(faveSong[1])
console.log(faveSong[2])

faveSong.push("Princess");              //adds an item to the list
console.log ("Princess")

console.log(faveSong.length)           //counts how many is in the list

faveSong.pop();                           //gets rid of the last item on the array
console.log(faveSong)

let faveWeb = [
    "asos",
    "plt",
    "boohoo"
];
console.log(faveWeb[0])
console.log(faveWeb[1])
console.log(faveWeb[2])

faveWeb.push("office shoes")
console.log("office shoes")
faveWeb.push ("netflix")
console.log ("netflix")

faveWeb.pop();
console.log(faveWeb)

let faveFood = [
    "Chinese",
     "Indian",
      "Thai"
    ];
console.log (faveFood[0])                 //shift () - Takes out the first element
console.log (faveFood[1])
console.log (faveFood[2])
let firstelement = faveFood.shift()
console.log (faveFood)

let faveColour = [
    "purple",
    "pink",
    "yellow"
];                                              //unshift () - Allows you to add two elements to the start of the list

faveColour.unshift("grey", "black")

console.log(faveColour);*/

let luckyNums = new luckyNumsArray([
    "2",
    "4",
    "6",
    "8",
    "10",
    "12"
]);
let luckyLuck = luckyNums.slice(1,3)
console.log(Luckyluck)
// expected output: Uint8Array [20, 30]
