'use strict';
//nos ayuda a no dejar pasar ningun error

//pedimos el numero donde quiera decir HOLA
var cuadro = prompt("Diga en que cuadro quiere su pirámide (1-5)", "");
cuadro = parseInt(cuadro);
var color = prompt("¿De que color quieres la pirámide?")
color = parseChar(color);
//cuadro sera ahora una variable numerica supuestamente entre 1 y 5
var estecuadro;
switch (cuadro) {
    case 1:
        estecuadro = document.getElementById("c1");
        break;
    case 2:
        estecuadro = document.getElementById("c2");
        break;
    case 3:
        estecuadro = document.getElementById("c3");
        break;
    case 4:
        estecuadro = document.getElementById("c4");
        break;
    case 5:
        estecuadro = document.getElementById("c5");
        break;
    default:
        alert ("Numero erróneo")
        exit(-1);
}
if (estecuadro!=""){
    estecuadro.innerHTML = "  o  <br/> ooo <br/>ooooo";
}

if (estecuadro=="a"){
    estecuadro.style.color = "blue";
} else if(estecuadro=="b"){
    estecuadro.style.color = "red";
} else if(estecuadro=="c"){
    estecuadro.style.color = "green";
}
