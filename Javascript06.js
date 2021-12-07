//11-- DOM
//El DOM ( Document Object Model en español  Modelo de Objetos del Documento) es una API definida 
//para representar e interactuar con cualquier documento HTML o XML . El DOM es un modelo de documento 
//que se carga en el navegador web y que representa el documento como un árbol de nodos, en donde cada 
//nodo representa una parte del documento (puede tratarse de un elemento , una cadena de texto o un
// comentario)


//Document 

//La Documentinterfaz representa cualquier página web cargada en el navegador y sirve como punto de entrada al contenido de la página web, que es el árbol DOM .

//ejemplo

Document.body
//Devuelve el nodo <body>o <frameset>del documento actual.


//seleccion de elementos en HTML-----------------------------

//getElementsByClassName

//El getElementsByClassNamemétodo de Documentinterfaz devuelve un objeto similar a una matriz de todos los elementos secundarios que tienen todos los nombres de clase dados.

var elements = document.getElementsByClassName(names);

//getElementById

//El Documentmétodo getElementById()devuelve un Elementobjeto que representa el elemento cuya idpropiedad coincide con la cadena especificada. Dado que los ID de elementos deben ser únicos si se especifican, son una forma útil de obtener acceso a un elemento específico rápidamente.

var element = document.getElementById(id);

//El ID del elemento que se va a ubicar. El ID es una cadena que distingue entre mayúsculas y minúsculas, que es única dentro del documento; solo un elemento puede tener un ID determinado.
//Un Elementobjeto que describe el objeto del elemento DOM que coincide con el ID especificado, o nullsi no se encontró ningún elemento coincidente en el documento.


//querySelector

//El Documentmétodo querySelector() devuelve el primero Elementdentro del documento que coincide con el selector o grupo de selectores especificado. Si no se encuentran coincidencias, nullse devuelve.

var element = document.querySelector(selectors);

//Un Elementobjeto que representa el primer elemento en el documento que coincida con el conjunto especificado de selectores CSS , o nullse devuelve si no hay coincidencias.


//querySelectorAll

//El Documentmétodo querySelectorAll() devuelve una estática (no en vivo) que NodeListrepresenta una lista de los elementos del documento que coinciden con el grupo especificado de selectores.

elementList = parentNode.querySelectorAll(selectors);

//Un elemento no activo que NodeListcontiene un Elementobjeto para cada elemento que coincide con al menos uno de los selectores especificados o un objeto vacío NodeListen caso de que no haya coincidencias.


// Generar cambios en distintos elementos

//innerText

//La innerTextpropiedad de la HTMLElementinterfaz representa el contenido de texto "renderizado" de un nodo y sus descendientes.
//Como captador, se aproxima al texto que obtendría el usuario si resaltara el contenido del elemento con el cursor y luego lo copiara en el portapapeles.

const renderedText = htmlElement.innerText
htmlElement.innerText = string

//innerText se confunde fácilmente con Node.textContent, pero existen importantes diferencias entre los dos. Básicamente, innerTextes consciente de la apariencia renderizada del texto, mientras textContentque no.

//textContent

//La textContentpropiedad de la Node interfaz representa el contenido de texto del nodo y sus descendientes.
let text = document.getElementById('divA').textContent;

document.getElementById('divA').textContent = 'This text is different!';

//innerHTML

//La Element propiedad innerHTMLobtiene o establece el marcado HTML o XML contenido dentro del elemento.

const content = element.innerHTML;

element.innerHTML = content;



//remove()
//El Element.remove()método elimina el elemento del árbol al que pertenece.

var el = document.getElementById('div-02');
el.remove();

//createElement()
//En un documento HTML, el método Document.createElement() crea un elemento HTML especificado por su tagName, o un  HTMLUnknownElement (en-US) si su tagName no se reconoce. En un documento XUL, crea el elemento XUL especificado. En otros documentos, crea un elemento con un namespace URI null.

var element = document.createElement(tagName, [options]);



//appendChild

//Si el hijo(Child) es una referencia(hace referencia) hacia un nodo existente en el documento actual, este es quitado del padre actual para ser puesto en el nodo padre nuevo. La clave está en si el (Child) es una referencia a un nodo existente en el documento.

element.appendChild(aChild);

// 11-- Eventos


//addEventListener
//addEventListener() Registra un evento a un objeto en específico. El Objeto especifico puede ser un simple elemento en un archivo, el mismo  documento , una ventana o un  XMLHttpRequest.

//Para registrar más de un eventListener, puedes llamar addEventListener() para el mismo elemento pero con diferentes tipos de eventos o parámetros de captura

target.addEventListener(tipo, listener[ useCapture]);


// eventos con el mouse

//click

//El evento "click" se dispara cuando se presiona el botón de un dispositivo de entrada (Mouse o Mousepad) sobre un elemento.

document.getElementById("prueba").addEventListener("click", function( event ) {
    // presentar la cuenta de clicks realizados sobre el elemento con id "prueba"
    event.target.innerHTML = "Conteo de Clicks: " + event.detail;
  }, false);

  //mousedown
  //El evento mousedownse activa cuando el botón de un dispositivo apuntador (usualmente el botón de un ratón) es presionado en un elemento.

// eventos sobre inputs

//keydown
//El evento keydown se produce cuando se presiona una tecla.

//A diferencia del evento keypress, el evento keydownes producido por todas las teclas, independientemente de si estas son caracteres o no.

//blur
//El evento blures disparado cuando un elemento ha perdido su foco. La diferencia principal entre este evento y focusout es que sólo el último se propaga (burbujas). 

// Submit -- evento de un formulario

//El submit evento se activa cuando <form> se envía.