//12 Local storage
//La propiedad de sólo lectura  localStorage te permite acceder al objeto local Storage; los datos persisten almacenados entre las diferentes sesiones de navegación. localStorage es similar a sessionStorage (en-US). La única diferencia es que, mientras los datos almacenados en localStorage no tienen fecha de expiración, los datos almacenados en sessionStorage son eliminados cuando finaliza la sesion de navegación - lo cual ocurre cuando se cierra la página.


miStorage = window.localStorage;

//El siguiente código accede al objeto local Storageactual y agrega un ítem al mismo usando Storage.setItem()

localStorage.setItem('miGato', 'Juan');

//La sintaxis para leer el ítem almacenado en localStorage es la siguiente:

var cat = localStorage.getItem('miGato');

//La sintaxis para eliminar el ítem almacenado en localStorage es la siguiente:

localStorage.removeItem('miGato');

//La sintaxis para eliminar todos los ítems almacenados en localStorage es la siguiente:

localStorage.clear();


//SOLO SE GUARDAN STRING EN LOCALSTORAGE

// JSON.stringify() ES MUY UTIL PARA CONVERTIR OBJETOS Y ARRAYS Y GUARDARLOS EN EL lS

//El método JSON.stringify()convierte un objeto o valor de JavaScript en una cadena de texto JSON, opcionalmente reemplaza valores si se indica una función de reemplazo, o si se especifica las propiedades mediante una matriz de reemplazo.

//JSON.parse() es muy util para el paso inverso

//El método  JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente el valor producido por el análisis.


//13-- fechas en js 

//Date

//Permite trabajar con fechas y horas.

new Date()
new Date(milisegundos)
new Date(cadenaFecha)
new Date(año_num,mes_num,dia_num
        [hor_num,min_num,seg_num,mils_num])

//getFullYear
//El método getFullYear() devuelve el año de la fecha indicada acorde a la hora local.

const moonLanding = new Date('July 20, 69 00:20:18');

console.log(moonLanding.getFullYear());

// resultado 1969

//14-- prototipos 

//Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí. En este artículo, explicaremos como funcionan los prototipos y también cómo se pueden usar las propiedades de estos para añadir métodos a los contructores existentes

function Persona(nombre, apellido, edad, genero, intereses) {

        // definiendo de propiedades y métodos
        this.first = first;
        this.last = last;
      //...
}


var person1 = new Persona('Bob', 'Smith', 32, 'hombre', ['music', 'skiing']);


// creacion de prototipos

function persona(nombre, saldo){
        this.nombre = nombre,
        this.saldo = saldo
}

const usuario = new persona('pedro', 6000);


usuario.prototype.tipoCliente = function(){
        console.log('desde proto');
}

// se agrega una funcion a nuestro prototipo por ejemplo para




