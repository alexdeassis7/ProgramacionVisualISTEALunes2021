/**Seleccionamos todos los elementos que poseen la clase 
 * "formulario__submit" , la variable "inputs" contiene un array de datos 
 * de tipo "html Collections"
 */

var inputs = document.getElementsByClassName("formulario__input");
console.log(inputs);
console.log(inputs[1]); //mostramos por consola el segundo elemento del array


//recorremos el array de inputs 
for (var i = 0; i <= inputs.length; i++) {
    //valido que no sea undefined(null) ,por que esto se ejecuta antes de que el dom cargue por completo
    if (inputs[i]) {
        //agregamos una escucha del evento KeyUp , que es 
        //cuando se termina de escribir
        inputs[i].addEventListener('keyup', function () {

            //this. se refiere a el elemento que estamos iterando actualmente
            if (this.value.length >= 1) {//chequeamos si el input contiene algun caracter escrito
                /**seleccionamos al sigueitne elemento y le agregamos la clase "fijar"
                 * esto es similar a lo que realizamos en el style.css con el selector hermano "+"
                */
                this.nextElementSibling.classList.add('fijar');
            }else{
                //en el caso de que no tenga nada escrito o que borremos lo que tenia escrito el 
                //input removemos la clase "fijar"
                this.nextElementSibling.classList.remove('fijar');
            }

        })

    }
}

