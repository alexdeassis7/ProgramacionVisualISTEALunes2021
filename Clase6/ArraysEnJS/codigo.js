
var arreglo = ['Astrid', 'Tadeo', 28, 45];
console.log(arreglo);

//otra manera de trabajar array:
var arreglo2 = new Array('juan', 'Alejandro', 25, 48);
console.log(arreglo2);

console.log("arreglo[0]:" + arreglo[0]);

console.log("arreglo2[2]:" + arreglo2[2]);

console.log("cantida de elementos : " + arreglo.length);

document.getElementById("caja").innerHTML = arreglo;


// var alumno = {
//     nombre: 'Tadeo',
//     apellido: 'Rivas'
// }


var alumnos = [{
    nombre: 'Jose',
    apellido: 'Rivas'
},
{
    nombre: 'Pedro',
    apellido: 'Martinez'
},
,
{
    nombre: 'Hernan',
    apellido: 'Martinez'
}
]

console.log(alumnos);


arreglo2.push("Hernan");
console.log(arreglo2);

arreglo2.pop();
arreglo2.pop();
arreglo2.pop();
console.log(arreglo2);

arreglo2.unshift("alejo");
console.log(arreglo2);

arreglo2.shift(); 
console.log(arreglo2);

