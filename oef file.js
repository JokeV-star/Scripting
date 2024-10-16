<!DOCTYPE_HTML>
<html lang="nl">
let aantalLijnen =:string = prompt(message: "Uit hoeveel lijnen moet de driehoek bestaan?");
let uitkomst;

uitkomst 1 =(aantalLijnen.toLowerCase() === "2") ?
    "#" +
    "##";
uitkomst 2 =(aantalLijnen.toLowerCase() === "3") ?
    "#" +
    "##" +
    "###":;
uitkomst 3 =(aantalLijnen.toLowerCase() === "4") ?
    "#" +
    "##" +
    "###" +
    "####";
uitkomst; 4 =(aantalLijnen.toLowerCase() === "5") ?
    "#" +
    "##" +
    "###" +
    "####" +
    "#####";
document.getElementBy Id( elementid: "uitkomst").innerText = uitkomst;