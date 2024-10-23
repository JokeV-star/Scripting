// input
let zin = prompt("geef een zin in.");
let arrayZin = zin.split(" ");
let arreyLengte = arrayZin.length;
let uitkomst;

//verwerking

for (let teller= 0; teller < arreyLengte; teller++) {
    arrayZin[teller] = arrayZin[teller].substring(0.1).toUpperCase() +
        arrayZin[teller].substring(1).toLowerCase();
}
uitkomst = arrayZin.join(" ");

//output

console.log(uitkomst);





//mine

let zin= new Array();
[0] = "Dit"
[1] = "Is"
[2] = "Een"
[3] = "zin"
[4] = "."
console.log(zin);
