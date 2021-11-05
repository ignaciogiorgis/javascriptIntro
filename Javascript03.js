//6--Objetos
//Objet literal, esta seria la sintaxis para un objeto de varias propiedades o keys(llaves) con su valor 


const Producto =  {
    nombre1: 'televisor',
    precio1: 9000,
    disponibilidad1: true
}

// acceder a los valores de un objeto con la sitanxis de punto como 

const compra = Producto.disponibilidad1;

// de esta forma en la variable de compra se guarda el valor de disponibilidad colocando el objeto.propiedad
// exite otra forma de acceder ala propiedad del objeto

const compra1 = Producto['nombre1'];

// ahi accedemos al nombre del producto utilizando la notacion por corchetes

// agregar propiedades a un objeto
// utilizando el objeto anterior agregamos una propiedade utilizando la siguiente sintaxis

Producto.imagen1 = 'nuevaImagen.jgp';

// de esta forma obtenemos esto:  {nombre: 'televisor', precio: 9000, disponibilidad: true, imagen: 'nuevaImagen.jgp'}
// se agrega la propiedad al objeto claro que si colocamo un nombre ya existente este va a pisar su valor.

// eliminar la propiedad se utiliza la siguiente sintaxis:

delete Producto.imagen1;

//--Objet Destructuring
// propiedad agregada en ECMAScript 6 y se utiliza con esta sintaxis

const {nombre1, precio1, disponibilidad1 }= Producto;

console.log(nombre1)

//resultado 'televisor'


//Reasignacion de valores en objetos

const Producto2 =  {
    nombre: 'televisor 20" ',
    precio: 3500,
    disponibilidad: false
}

// la particularidad de los objetos es que en estos apesar de tener el const que no nos permitia modificar su valor 
// aqui si se puede y hasta se podria eliminar alguna propiedad para esto existes Objet methods

//object.freeze()
//este metodo hace que no podamos modificar, agregar ni eliminar propiedades del objeto

Object.freeze(Producto2);

//object.seal()
//en este metodo no se pueden agregar ni eliminar propiedades, pero si puedo modificar las existentes

Object.seal(Producto2);

//Unir objetos
//object.assing()

Object.assign(Producto2, Producto);

// de esta forma tenermos como resultado {nombre: 'televisor 20" ', precio: 3500, disponibilidad: false, nombre1: 'televisor', precio1: 9000, …}disponibilidad: falsedisponibilidad1: truenombre: "televisor 20\" "nombre1: "televisor"precio: 3500precio1: 9000[[Prototype]]: Object
// por otro lado en ECMAScript 6 salio un concepto nuevo llama spread operator o rest operator y se utiliza con ls siguiente sintaxis


const resultado2 = {...Producto, ...Producto2}

 // oject Constructor
 //sintaxis

 function Producto3(nombre, precio, disponible){
     this.nombre = nombre
     this.percio = precio
     this.disponible = disponible
 }

 const result2 = new Producto3('monitor', 500, true);

 // resultados  {nombre: 'monitor', percio: 500, disponible: true}

 // keys, value y entrie objects methods
 
 const Producto4 =  {
    nombre4: 'tablet" ',
    precio4: 1000,
    disponibilidad4: true
}

Object.keys(Producto4);
// este metodo retorna un array con los nombres de las keys del objeto 
// resultado ['nombre4', 'precio4', 'disponibilidad4']

Object.values(Producto4);
// este metodo retorna un array con los nombres de los valores de cada key del objeto 
// resultado ['tablet" ', 1000, true]

Object.entries(Producto4);
// este metodo retorna un array de arrelgos con la siguiente forma [key: value]
// resultado [['nombre4', 'tablet" '],['precio4', 1000],['disponibilidad4', true]]
