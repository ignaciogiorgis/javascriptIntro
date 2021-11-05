//3--Numeros
// la creacion de numeros en javascript es muy sencilla y tiene como sintaxis 

const edad = 20;
const peso = 87.5;
const temperatura = -2;

// no hace falta colocar si es de tipo flotante o entero
// otra forma de crear numeros es utilizando la siguiente y menos comun sintaxis


const altura = new Number(7);

 // devuelve el obajeto del numero

 // operaciones 
 //sume, resta, multiplicacion, division y modulo

 const a = 20;
 const b = 10;
 let resultado;

 // suma

 resultado = a+b;
 
 // resultado 30

 //resta

 resultado = a-b;

 // resultado 10
//multiplicacion

 resultado = a*b;

 // resultado 200
// division
 resultado = a/b;

// resultado 2
// modulo

resultado = a%b;

//Resultado 0

//--Objeto Math
//Math es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. No es un objeto de función.

let resultadoMath;

// numero PI

resultadoMath = Math.PI;

//redondeo depende del numero pero si es 6 o mayor lo hace hacia arriba sino hacia abajo

resultadoMath = Math.round(2.5);

//rendondeo hacia abajo

resultadoMath = Math.ceil(2.5);

//redonde hacia arriba

resultadoMath = Math.floor(2.5);

//raiz cuadrada

resultadoMath = Math.sqrt(144);

// potencia

resultadoMath = Math.pow(2,5)

//minimo o maximo de varios numeros 

resultadoMath = Math.min(2,5,7,10);
resultadoMath = Math.max(2,5,19);

//Convertir strings en numeros
//Number es un objeto primitivo envolvente que permite representar y manipular valores numéricos cómo 37 o -9.25. El constructor Number contiene constantes y métodos para trabajar con números. Valores de otro tipo pueden ser convertidos a números usando la función Number().

const num1 = "20";
const num2 = "10.5";
const num3 = "tres";
const num4 = 10;

let result = Number.parseInt(num1)

//resultado 20

let result = Number.parseFloat(num2)

//resultado 10.5

let result = Number.parseInt(num3)

//resultado NuN no es un numero, no lo puede convertir

//tambien se puede verificar si el numero es entero

let result = Number.isInteger(num4)

//resultado true, retorna verdadero si es un entero

let result = Number.isInteger(num3)

// retorna false en este ejemplo

//4-- Operadores en Javascript

const n1 = 10;
const n2 = "10";
const n3 = 5;
const n4 = null;
const n5 = undefined;

// operador mayor  y menor a ...

n1<n2 //false
n1>n2 // true
n1===n2 // false
n1==n2 //true  esto se debe a que los dos iguales comparan el dato y los 3 iguales compara el dato y su tipo, es mas estricto
n1!=n2//false
n1!==n2// true este es mas estrictos
n1==n4// false
n1===n4// false
n2===n5// false


// null o undefined 
// Ambos sirven para algo muy parecido, que es indicar la ausencia de valor. Lo que ocurre es que undefined es un valor que denota que no hay valor porque no se ha definido todavía, mientras que null se usa para indicar que no hay valor porque así lo hemos querido indicar expresamente







