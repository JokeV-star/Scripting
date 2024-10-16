let antwoordBezoeker = prompt(Message:"sport je graag?", ..default: "ja/nee");
let uitkomst;

switch (antwoordBezoeker.toLowerCase()) {
    case "ja"
        uitkomst = "just do it";
        break;
    case "nee"
        uitkomst = "jammer, blijf dan maar liggen";
        break;
    default:
        uitkomst = "dit was niet duidelijk, antwoord je vanuit je luie zetel?";
}
document.getElementById(elementId:"uitkomst1").innerText = uitkomst;