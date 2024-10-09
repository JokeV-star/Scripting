Let zin1 : string = "ik wil een koekje";
let uitkomst;

uitkomst = zin1.replace(searchValue:"koekje", replaceValue:"lasagna van pxl-catering");
uitkomst = uitkomst.toUpperCase();

document.getElementById(elementld:"uitkomst1").innerText = uitkomst;
console.log(uitkomst);