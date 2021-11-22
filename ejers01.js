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

//