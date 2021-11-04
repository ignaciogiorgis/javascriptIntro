// 1--Variables en Javascript


//para declarar una variable se utiliza VAR y en este ejemplo se declara y se inicializa como javascript no es un lenguaje de tipado
// a esta variable no se le coloca un tipo de dato como seria String
//javascript es un lenguaje de tipo dinamico

//Var

var Producto = 'Monitor de 24 pulgadas';

// en este ejemplo podemos ver que las variables en javascript se pueden reasignar
Producto = 'nuevo';

Producto = 200;

Producto = undefined;


//otra caracteristica de las variables en javascript es que se pueden declarar pero no es necesario inicializar.

var Marca;

Marca = true;

// las variables no se pueden declararse con numeros en su nombre al comienzo
//-----------------------------------------------------------------------------------------------------------------

//Let

//let sirve para declarar e inicializar variables como var y sigue todas sus mismas caracteristicas
let Producto1 = 'Monitor de 24 pulgadas';


Producto1 = 'nuevo';

Producto1 = 200;

Producto1 = null;


let Marca1;

Marca1 = true;

//-----------------------------------------------------------------------------------------------------------------
//const

// otra forma de trabajar con variables en javascript pero const no se puede reasignar

const Producto2 = 'Monitor de 24 pulgadas';
// esto no se puede hacer ya que el valor de productos2 es una contante y no varia 
Producto2 = 'nuevo';

// segunda diferencia esta en que const tiene que estar inicializado con un valor

//esto marca error.
const Producto3;
// asi seria la sintaxis correcta
const Producto3 = 200;


//-----------------------------------------------------------------------------------------------------------------

//2--Strings

// para crear strings en javascript existen 3 maneras diferentes la primera y mas directa tiene la siguiente sintaxis
// los strings son representaciones de texto basicamente
const Palabra = 'hola mundo';

// la segunda forma consta de :

const Palabra2 = String('hola mundo');

// tercera forma que se conoce como ojeto string

const Palabra3 = new String('hola mundo');

//Metodos para strings

//--length

const Palabra4 = 'hola mundo';

const cantidad = Palabra.length;

// basicamente lo que hace .length es decirnos la cantidad de caracteres que tiene el string el valor de cantidad 
// seria 10 si lo pasamos por consola con un console.log(cantidad);

//--indexOf

//este metodo nos permite saber si una palabra esta contenida en el string, de ser asi nos devuelve un numero que es la 
//posicion en donde comienza dicha palabra pero siempre la primera vez que aparece la misma.
// si no esta contenida devuelve un -1



const Palabra4 = 'hola mundo';

const cantidad1 = Palabra.indexOf('mundo');

// esto nos da como resultado 5, ademas tenemos una funcion o metodo que hace los mismo pero comenzando al final del string 
// lastIndexOf

const Palabra5 = 'hola mundo desde javascript';

const cantidad2 = Palabra.lastIndexOf('java');

// el resultado de esto va ser 17

//--include

//El método includes() determina si un string incluye un determinado elemento, devuelve true o false según corresponda.

const Palabra6 = 'hola mundo desde javascript';

const cantidad3 = Palabra.includes('script');

// esto nos da como valor true ya que la palabra que buscamos esta en la cadena, hay que alclar que tambien reconoce entre mayusculas y minusculas, es algo para tener en cuenta


// --contatenar dos cadenas

const nombre = 'juan';
const apellido = 'ramirez';

//-- concat()
// para concatenar dos strings podemos utilizar un metodo llamado concat() de ls siguiente manera

const datos = nombre.concat(apellido); 

// esto nos da como resultado final 'juanramirez'

// otr manera es utilizando el signo +

const datos1 = nombre + apellido;

//el resultado va ser el mismo de todas formas se puede dar una estructura para que no quede todo junto

const datos2 = nombre +" "+apellido;

// el resultado de esto va ser 'juan ramirez'

// otroa forma de concatenar surge en ECMAScript 6 donde aparece el templete strings y su sintaxis:

const datos3 = `${nombre} ${apellido}`;


// llaves invertidas se hacen con alt 96 y las varibles van dentro de llaves anteponiendo un simbolo de $ esto hace que sea todo un 
// mismo string y se vulve menos complejo si tuvieramos que poner muchos simbolos +

