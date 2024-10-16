let huidigeMaand = new Date().getMonth()+1;
console.log(huidigeMaand);

switch (huidigeMaand) {
    case 1:
        uitkomst ="welkom het is januari!";
        break;
        case 2:
        uitkomst ="welkom het is februari!";
        break;
        case 3:
        uitkomst ="welkom het is maart!";
        break;
    case 4:
        uitkomst ="welkom het is april!";
        break;
    case 5:
        uitkomst ="welkom het is mei!";
        break;
    case 6:
        uitkomst ="welkom het is juni!";
        break;
    case 7:
        uitkomst ="welkom het is juli!";
        break;
    case 8:
        uitkomst ="welkom het is augustus!";
        break;
    case 9:
        uitkomst ="welkom het is september!";
        break;
    case 10:
        uitkomst ="welkom het is oktober!";
        break;
    case 11:
        uitkomst ="welkom het is november!";
        break;
    case 12:
        uitkomst ="welkom het is december!";
        break;
}
document.getElementById(elementId:"uitkomst1").innerText = uitkomst;
