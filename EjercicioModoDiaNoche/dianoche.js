var modo = leerModoActual();
if (modo == "dia") {
    ponerModoDia();
} else {
    ponerModoNoche();
}


function leerModoActual() {
    let modo = window.localStorage.getItem("modoGuardado");
    if (!modo) {
        //devolverá modo DIA si no hay modo guarddo
        modo = "dia";
    };
    return modo;
}

function ponerModoDia () {
    let todo=document.getElementById("todo");
    todo.style.color="black";
    todo.style.backgroundColor="white";
    window.localStorage.setItem("modoGuardado","dia");
    
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display="none";
    
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display="block";
}

function ponerModoNoche () {
    let todo=document.getElementById("todo");
    todo.style.color="white";
    todo.style.backgroundColor="black";
    window.localStorage.setItem("modoGuardado","noche");
    
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display="block";
    
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display="none";
}