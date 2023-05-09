'use strict';

var colorfuente = "white";

const colores = [];
colores[0] = "green";
colores[1] = "brown";
colores[2] = "blue";
colores[3] = "yellow";
colores[4] = "magenta";

const colores2 = ["green", "brown", "blue", "yellow", "magenta"];

const colores3 = new Array("green", "brown", "blue", "yellow", "magenta");

const colores4 = new Array(3);
colores4[0] = "green";
colores4[1] = "brown";
colores4[2] = "blue";
colores4.push("yellow");
colores4.push("magenta");

function saludar(identificador) {
    let elem = document.getElementById(identificador);
    elem.style.color = colorfuente;
    elem.innerHTML = "Hi there";
    colorfuente = getComputedStyle(elem).backgroundColor()
}

function pintar() {
    for (let x = 1; x <= colores.length; x++) {
        let ident = "c" + x;
        let cf = colores[x - 1];
        rellenar(ident, cf);
    }
}
function rellenar(identificador, colorfondo) {
    let elem = document.getElementById(identificador);
    elem.style.backgroundColor = colorfondo;
}
pintar();