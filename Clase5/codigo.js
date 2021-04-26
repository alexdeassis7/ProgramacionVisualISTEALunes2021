/*1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
var nombre;
var peso = 0;
var sexo;
var edad;
var cantidadF = 0;
var sumaEdad = 0;
var promedio;
var pesoMax = 0;

var contador = 0;
//iteraciones indeterminadas
// while(contador < 10){
//     console.log("hola while");
//     contador ++;
// }
//iteraciones indeterminadas pero que se ejecute al menos una vez el bloque 
//de codigo 
// do {
//     console.log("hola do while");
//     contador += 1 ;
// } while (contador < 10)

//ciclo determinado de iteraciones
for (let i = 1; i <= 5; i++) {
    do {
        nombre = prompt("ingrese nombre " + i);
    } while (!(isNaN(nombre))); //valido que no sea un numero

    do {
        peso = prompt("ingrese el peso " + i);
    } while (!(peso > 0 && peso <= 600));//valido que sea un numero entre 0 y 600

    do {
        sexo = prompt("ingrese sexo : f / m " + i);
    } while (sexo != "f" && sexo != "m");

    do {
        edad = prompt("ingrese la edad " + i);
    } while (!(edad > 0 && edad <= 150));

    if (sexo == "f") {
        cantidadF++;
    }

    sumaEdad += edad; //sumamos todas las edades

    if (peso > pesoMax && sexo == "m") {
        pesoMax = peso;
    }

}

promedio = sumaEdad / 5;
document.write(cantidadF + ": es la cantidad de mujeres" + "<br>");
document.write(promedio + ": es la edad promedio " + "<br>");
document.write("el hombre mas pesado : " + pesoMax + "<br>");








