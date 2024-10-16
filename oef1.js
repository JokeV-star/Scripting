let geboorte = parseInt(prompt(message: "wat is je geboorte datum?"));
let huidigjaar = new Date(). getFullYear();
let benaderendeLeeftijd = huidigjaar - geboorte;

if (benaderendeLeeftijd >= 20) {
    alert("je bent oud genoeg");
}
