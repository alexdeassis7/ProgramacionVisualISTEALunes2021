//creamos un objeto de tipo date 
//var fecha = new Date(año , mes , dia , horas, minutos , segundos , milisengundos);
var fecha = new Date();

console.dir(fecha);

//obtener el año  
console.log(fecha.getFullYear());

//obtener el mes (0-11)
console.log(fecha.getMonth() + 1);

//obtener las horas (0-23)
console.log(fecha.getHours());

//obtener el dia de la semana  (0 domingo - 6 sabado)
console.log(fecha.getDay());


document.getElementById("miCaja").innerHTML = fecha;

dia =  new Date();
y = dia.getFullYear();
m = dia.getMonth() + 1;
d = dia.getDate();
document.getElementById("ID").innerHTML = d + "/" + m + "/" + y;