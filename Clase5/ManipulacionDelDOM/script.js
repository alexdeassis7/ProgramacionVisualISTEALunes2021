//seleccionamos un elemento del DOM 
//mediante su id 
var enunciado = document.getElementById('titulo');

console.log(enunciado);
//agregamos "Bruno Ghigliano" a el tag <p> que 
//tiene el id "parrafo" 
document.getElementById("parrafo").innerHTML = "Bruno Ghigliano";

enunciado.innerHTML = "Aca tenemos un nuevo contenido!";

//otra manera de traer una referencia de un elemento del DOM al JS
var enum2 = document.querySelector('h2');
console.log(enum2);

enum2.innerHTML = "me acaban de modificar con un QuerySelector JS";

document.getElementById("contenedor").innerHTML = suma(1,4);

document.getElementById("contenedorDos").innerHTML = suma(10,90);

function suma(numero1 , numero2 ){
    return numero1 + numero2;
}
//miFuncion();

function miFuncion(){
    alert('Hola estoy dentro de una funcion de JS');
}


document.querySelector('button').onclick = alerta;




function alerta() {
console.log("soy una alerta de js mistica");

}

function saludarA( nombre){
console.log("Hola "+ nombre);
}


var boton = document.getElementsByTagName('button');
for(var i = 9 ; i <= 12; i++){
  boton[i].onclick = alerta;  
}


console.log(boton);
