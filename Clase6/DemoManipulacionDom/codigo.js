//Creacion de un nuevo nodo
var nuevoElemento = document.createElement("h4");
var nuevoTexto = document.createTextNode("Alex De Assis");
//agrego un hijo (texto) al parrafo 
nuevoElemento.appendChild(nuevoTexto);
//agregamos un id a un nodo 
nuevoElemento.id = "miNuevoElemento"
//las lineas de arriba generan lo siguiente desde nuestro .js 
//<p id="miNuevoElemento">Alex De Assis</p>

function restaurar() {
    var cuadro = document.getElementById("cuadro");
    cuadro.innerHTML = " <h4 id='primero'>Jose</h4><h4 id='segundo'>Marcelo</h4><h4 id='tercero'>Martin</h4>"
}

function reemplazar() {

    var primero = document.getElementById("primero");
    if (primero != null) {
        var padre = primero.parentNode;
        padre.replaceChild(nuevoElemento, primero);
    }
}

function debajo() {
    //Insertar elemento al final 
    var cu = document.getElementById("cuadro");
    cu.appendChild(nuevoElemento);
}


//Esta funcion elimina a Martin
function suprimir() {
    var tercero = document.getElementById("tercero");
    // var padre = tercero.parentNode;
    // padre.removeChild(tercero);
    console.log("tercero : " + tercero);
    if (tercero != null) {
        tercero.parentNode.removeChild(tercero);
        var boton = document.getElementById("miBoton")
        // hacemos desaparecer el nodo del arbol DOM          
        boton.parentNode.removeChild(boton);
    }
}


function cambiar() {

    //me traigo una referencia de Marcelo
    var segundo = document.getElementById("segundo");

    console.log(segundo);

    //obtengo el nodo padre de Marcelo
    var padre = segundo.parentNode;
    console.log(padre);
    //al padre de quitamos su hijo <h4> "marcelo" 
    padre.removeChild(segundo);

    //agrego un nodo hijo al
    padre.appendChild(segundo)

    //copiamos un nodo en otra seccion de la pagina
    //conservamos el original 
    /* var copia = segundo.cloneNode(true);
     document.getElementById("cuadro").appendChild(copia); 
     console.log(copia);
    */
}

function modificarEstilo() {
    var miElemento = document.getElementById("primero");
    miElemento.style.textAlign = "center";
}