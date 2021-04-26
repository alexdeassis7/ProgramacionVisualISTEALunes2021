//Sintaxis de una funcion anonima (no posee nombre!)

//function (params) { }

//si la pguardamos en una constante no se podra cambiar 
const saludo = function () {
    console.log('Hola Mundo , soy una funcion anonima!');
}

//ejecutamos la funcion anonima
saludo();

//algunas funciones reciben otras funciones como parametros 
//como por ejemplo setTimeOut que espera si o si una funcion


setTimeout(function () {
    console.log('Hola Mundo pasaron 5 segundos !');
    //alert("hola soy una publicidad molesta! ")
}, 5000);


var producto = function (a, b) {
    return a * b;
}
//invocamos a la funcion anonima 
var resultado = producto(3, 6);

console.log('Resultado :' + resultado);

// El Constructor Fuction 
var miFuncion = new Function("a", "b", "return a*b");

var resultado2 = miFuncion(5, 7);
console.log("Constructor function resultado : " + resultado2);


// function multiplicar(a , b) {
//     return a * b ;
// }

// Funciones Anonimas Autoimvocadas

// ¿Donde se pueden invocar las funciones?
//1) las funciones se podian invocar por la generacion de un evento 
//2)las funciones se podian invocar desde el codigo 
//3) y tambien se pueden invocar automaticamente

// Para que se invoque : al final de la funcion debemos utilizar el parentesis "()" y 
// para que funcione  como una expresion la debemos "envolver" entre parentesis

( function () {
    console.log("Hola chicos soy una Funcion AutoInvocada");
} ()  );




