let dag : number = new date().getDay()
let uitkomst;
console.log(dag);


switch (dag) {
    case 0:
        uitkomst = "zondag";
        break;
        case 1:
            uitkomst = "Maandag";
            break;
            case 2:
                uitkomst = "Dinsdag";
                break;
                case 3:
                    uitkomst = "Woensdag";
                    break;
                    case 4:
                        uitkomst = "Donderdag";
                        break;
                        case 5:
                            uitkomst = "Vrijdag";
                            break;
                            case 6:
                                uitkomst = "Zaterdag";
                                uitkomst = "zondag";

}

document.getElementbyId(element:"uitkomst").innertext = "het is vandaag"+uitkomst + ".";