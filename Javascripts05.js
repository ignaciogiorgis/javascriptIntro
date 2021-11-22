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