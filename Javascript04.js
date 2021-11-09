//6--Arrays
//Creacion de array, sintaxis

const array = [10, 20, 30];

// de esta forma se creo un array de numeros, esta tipo de datos puede almacenar un conjunto de datos
// al igual de los objetos que pueden almacenar distintos datos como booleanos y strings, los arreglos son iterables

const deTodo = [true, 'saludo', 10, { afirmativo: true }];

// y cada elemento tiene un valo y un indice o ubicancion dentro del array
//la segunda forma de crear un array en javascript es mediante esta sintaxis

const array2 = new Array('enero', 'febrero', 'marzo');

// acceso a los valores de un array

const numeros = [1, 2, 3, 4, 5, 6];

numeros[3];

//resultado 4 esto se debe a que los array comienzan con el indice en 0

// operaciones con arrays


const meses = ['marzo', 'abril', 'mayo', 'junio', 'julio'];

// .length para saber que longitud tiene el array
// con esto puedo acceder a todos los elementos del array 
// se utiliza un iterador para recorrerlo


for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}

// arranca en el indece cero avanza sumandole 1 y va a iterar solo el tamaño del array


//Array methods
//Agregar al final del array

meses.push('agosto');

// agregar al comienzo

meses.unshift('febrero')

// agregar elementos a un array con spred operator

let vencimiento;

vencimiento = [...meses, 'diciembre']

//eliminar elementos de un array al final

meses.pop()

//elimina el primer elemento

meses.shift()


// splice()-- sintaxis splice(posicion, cantidad de elementos a eliminar);

meses.splice(1, 3);

// resultado elimina [ 'abril', 'mayo', 'junio' ] y el arrya queda como [ 'marzo', 'julio' ]

// destructuring con arrays

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, ];

const [primero] = numbers;

// resultado 1

//forEach para recorrer el array

const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];

dias.forEach((dia) => {
    console.log(dia)
})

// map()

const evaluacion = [10, 4, 7, 8, 9, 10, 9, 5, 6, 5, 5];

evaluacion.map((nota) => {
    if (nota >= 6) {
        return aprobados = nota;
    }
    return aprobados
})

// resultado [ 10, 10, 7, 8, 9, 10, 9, 9, 6, 6, 6 ] un nuevo array con los aprobados
// la diferencia entre map y forEach es que map crea un nuevo array apartir de alguna condicion como la de apobacion 
// y el forEach solo recorre el array