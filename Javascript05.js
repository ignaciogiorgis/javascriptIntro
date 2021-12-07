//8-- estructuras de control
// if

// ejemplo y sintaxis

const precio = 150;

if (precio < 400){ // lo que esta dentro del parentesis es nuestra condicion si es true = 'es menor'
    console.log('es menor')
}else{ // sino 'es mayor'
    console.log('es mayor')
}

// si lo que se ejecuto es una sola linea las llaves son opcionales, pero siempre es practico colocarlas
// se pueden comparar si los elemento son iguales, diferentes, mayores, menores, etc.

// tambien existe la sintaxis que permite anidar los if
const dinero = 1000;
const tarjeta = false;
if(precio < fondos ){
    console.log('usted puede comprar')
}else if(tarjeta){
    console.log('No recivimos tarjeta')
    }else{
    console.log('pague con efectivo')
    }

// en la primera condicion se obtiene true por lo que entrar en el if y devuelve 'usted puede comprar'
// pero cuando vuelve a evaluar ve que el segundo if es false, no puede pagar con tarjeta el resultado 'pague con efectivo'


//Switch, cuando existe la posibilidad de tener muchos if anidados aparece esta estructura
// sintaxis

const metodoPago = 'efectivo'

switch (metodoPago) {  // en el parentesis esta la variable que queremos comprobar que seria el metodo de pago
    case 'efectivo': // luego existen diferentes casos, cuya accion se ejecuta si nuestra variable coincide con el case
        console.log('pago con efectivo') // tiene una sentencia llamada break cada caso para cuando encuentre lo que esta buscando corte la ejecucion 
        break;
    case 'cheque':
        console.log('pagaste con cheque')
        break;
    default:
        console.log('no existe el metodos de pago seleccionado')
        break;
}

// por ultimo una accion por default, ya que puede pasar que nunca encuentre una coincidencia, entonces hay que decirle que hacer de manera obligatoria


//operador &&

const puedePagar = true;
const puedeComprar = true;

if(puedeComprar && puedePagar){ // esto funciona evaluando el valor booleano de cada variable para que se ejecute lo que esta dentro del if 
    console.log('compra realizada'); // ambas tienen que ser true si alguna no lo es va directo al else
}else{
    console.log('no se pudo realizar la compra');
}

// operador or ||


const puedePagar = false;
const puedeComprar = true;

if(puedeComprar || puedePagar){ // esto funciona evaluando el valor booleano de cada variable pero a diferencia del and aqui si al menos hay una verdadera la condicion completa
    console.log('compra realizada'); //va se true tambien, para que esta sea false, ambas lo tienen q ser.
}else{
    console.log('no se pudo realizar la compra');
}

// Operador ternario, sintaxis

{puedePagar ? console.log('compra realizada') : console.log('no puede realizar la compra')}

//entre llaves va primero la condicion, luego n simbolo ?, s es true se ejecuta lo q esta primero, sino lo que esta despues
// de los dos puntos

// 9-- Iteradores

//For loop, sintaxis
//Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.

for(let i = 0; i < 10; i++){
    console.log(`${i}`)
}

// resultado muestra en consola del 0 al 9

// consta de tres partes
// inicializador, inicia en 0
// condicion de corte
//incrementador que va de uno en uno



// while
//Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia
let n = 0;
let x = 0;
while (n < 3) {
  n ++;
  x += n;
}

//do While
//La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.


let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// resultado: "12345"

// For of
//La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: String, Array, objetos similares a array (por ejemplo, arguments or NodeList), TypedArray, Map, Set e iterables definidos por el usuario.


let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}


// for In
//La instrucción for-in itera sobre todas las propiedades enumerables de un objeto que está codificado por cadenas (ignorando los codificados por Símbolos, incluidas las propiedades enumerables heredadas.


const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}


// 10 Arrya methods

// some() -- includes()

//El método includes() determina si una matriz incluye un determinado elemento, devuelve trueo  false según corresponda.

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

meses.includes('octubre')

// resultado 'false'

const productos = [
    {nombre:'televisor', precio:15000},
    {nombre:'pc', precio:4000},
    {nombre:'auto', precio:65000},
    {nombre:'aire', precio:5000},
    {nombre:'mesa', precio:1000},
    {nombre:'impresora', precio:15000}
]

const existe = productos.some((prod)=>{
    prod.nombre === 'mesa'
})

//resultado 'true'

//El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

// ambos son similares pero el includes sirve para un array de datos primitivos y el some sirve para arreglos de objetos.



 // findIndex() 
 //El método findIndex() devuelve el  índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.

 meses.findIndex((mes)=>{
      mes === 'enero'
 })

 //resultado 0


 //reduce()

 //El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.


 const total = productos.reduce((total, producto)=>total +producto.precio, 0)

 // resultado 105000, donde total arranca en 0 y a producto.precio se lo va sumando para dar el total.


 //filter()
 //El método filter()crea un nuevo array con todos los elementos que cumplen la condición implementada por la función dada.

 const sinStock = productos.filter((p)=> p.nombre !== 'pc' )

 // resultado [
 // { nombre: 'televisor', precio: 15000 },
 // { nombre: 'auto', precio: 65000 },
 // { nombre: 'aire', precio: 5000 },
 // { nombre: 'mesa', precio: 1000 },
 // { nombre: 'impresora', precio: 15000 }
//]

//find()

//El método find()devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

// resultado 12

// every()

//Determina si todos los elementos en el array satisfacen una condición.

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];


// resultado true son todos menores a 40


// concat()

//El método concat()se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

// resultado  ["a", "b", "c", "d", "e", "f"]
