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