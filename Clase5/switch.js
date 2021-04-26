var parametro = prompt('ingrese un numero del 1 al 7');

console.log("Tipo de dato :" + typeof (parametro));

parametro = parseInt(parametro);

console.log("Tipo de dato :" + typeof (parametro));

//condicional multiple 
switch (parametro) {
    case 1:
        //sentencia en el caso que la variable parametro sea 1
        console.log('Lunes');
        break;
    case 2:
        //sentencia en el caso que la variable parametro sea 1
        console.log('Martes');
        break;
    case 3:
        //sentencia en el caso que la variable parametro sea 1
        console.log('Miercoles');
        break;
    case 4:
        //sentencia en el caso que la variable parametro sea 1
        console.log('Jueves');
        break;
    case 5:
        //sentencia en el caso que la variable parametro sea 1
        console.log('Viernes');
        break;
    case 6:
        //sentencia en el caso que la variable parametro sea 1
        console.log('Sabado');
        break;
    case 7:
        //sentencia en el caso que la variable parametro sea 1
        console.log('Domingo');
        break;
    default:
        console.log("El numero ingresado no se corresponde con ninguno de los 7 dias de la semana");

}
console.log(' fin del programa , salimos del swicth');