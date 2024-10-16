<!Doctype HTML>
let leeftijd :string = prompt(message:"ben je 20 jaar of ouder?");
let uitkomst;

if (leeftijd >=20) {
    console.log("Helaas, je bent te jong.");
}
else {
    console.log("Je bent oud genoeg!")
}
document.getElementBy Id( elementid: "uitkomst").innerText = uitkomst;
