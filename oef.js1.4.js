Let huidigeDatum = new Date ()
let huidigUur = huidigeDatum.getHours();
let huidigeMinuten = huidigeDatum.getMinutes();
let uitkomst;

if (huidigUur >=12) {
    uitkomst = "welkom het is momenteel namiddag," + huidigUur + 'uur en" +
        HuidigeMinuten +"minuten";
}   else {  uitkomst = "welkom het is momenteel voormiddag," + huidigUur + 'uur en" +
    HuidigeMinuten +"minuten";
}
document.getElementBy Id( elementid: "uitkomst1").innerText