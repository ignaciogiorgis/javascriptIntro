//creará una función que toma una lista de enteros y cadenas no negativos y devuelve una nueva lista con las cadenas filtradas.
//filter_list([1,2,'a','b']) == [1,2] ejemplo

// codigo

function filter_list(l) {
    // Return a new array with the strings filtered out
    let array = []
    for(let i = 0; i<l.length;i++){
      if(typeof l[i] =='number'){
        array.push(l[i]);
        
      }
    }
    return array;
  }

//-----------------------------------------------------------------------
//En esta simple asignación se le da un número y debe hacerlo negativo. ¿Pero tal vez el número ya sea negativo?
//makeNegative(1); // return -1
//makeNegative(-5); // return -5

// codigo

function makeNegative(num) {
    // Code?
    if(num>0){
      return num*-1;
    }else{
      return num;
    }
  }

  //-----------------------------------------------------------------------
  //Bienvenido. En este kata, se le pide que eleve al cuadrado cada dígito de un número y concatenarlos.

//Por ejemplo, si ejecutamos 9119 a través de la función, saldrá 811181, porque 9 2 es 81 y 1 2 es 1.

function squareDigits(num){
  return parseInt(Array.from(num.toString(),x => Math.pow(x, 2)).join('')) 
 }

 //Complete la solución para que divida la cadena en pares de dos caracteres. Si la cadena contiene un número impar de caracteres, entonces debe reemplazar el segundo 
 //carácter faltante del par final con un guión bajo ('_').

 function solution(str){
  if(str.length === 0){
    return [];
  }else if (str.length%2 === 1){
    let nString =str.concat('_'); 
    let array = [];
     for(let i = 0; i < nString.length ; i= i + 2  ){
        array.push(nString.slice(i,i+2))
     }
     return array; 
  }
  let array = [];
     for(let i = 0; i < str.length ; i= i + 2  ){
        array.push(str.slice(i,i+2))
     }
     return array; 
    
} 

//Defina una función que tome un argumento de número entero y devuelva un valor lógico trueo false dependiendo de si el número entero es primo.


function isPrime(num) {
  if(num<=1){
    return false;
  }
  for (var i = 2; i < num; i++) {
      if (num%i===0 ){
          return false;
      }
  };
  return true;

}

// convertir un numero binario a un decimal

const binaryArrayToNumber = arr => {
  let suma = 0;
    let arr1 = arr.reverse();
    
    for(let i = 0; i <arr1.length ; i++){
       
        suma =  arr1[i]*Math.pow(2,i) + suma;
        
    }
  return suma;
};

/* Los estadounidenses son gente extraña: en sus edificios, el primer piso es en realidad la planta baja y no hay piso 13 (debido a la superstición).

Escribe una función que dado un piso en el sistema americano devuelve el piso en el sistema europeo.

Con el primer piso reemplazado por la planta baja y el piso 13 eliminado, los números se mueven hacia abajo para tomar su lugar. En el caso de más de 13, se mueven hacia abajo en dos porque hay dos números omitidos debajo de ellos. */

function getRealFloor(n) {
  if(n < 0){
    return n;
  }
  if(n<14){
    return n-1;
  }
  if(n>=15){
    return n-2;
  }
}

//Dados algunos palos por una matriz Vde números enteros positivos, donde V [i] representa la longitud de los palos, encuentre el número de formas en que podemos elegir tres de ellos para formar un triángulo.

//Ejemplo



function countingTriangles(V) {
  let valid = 0;
  for (let i = 0; i < V.length - 2; i++) {
      const s1 = V[i];
      for (let j = i+1; j < V.length - 1; j++) {
          const s2 = V[j];
          for (let k = j+1; k < V.length; k++) {
              const s3 = V[k];
              if(s1+s2 > s3 && s2+s3 > s1 && s1+s3 > s2) valid++;
          }
      }
  }
  return valid;
}

