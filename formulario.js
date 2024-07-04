var formulario = document.querySelector(".formulario");/* Se cambió a .formulario y se agregó ;*/

formulario.onsubmit = function (event) { /* Se cambió `e` a `event` */

  event.preventDefault(); /* Se modificó a  event. */

  var n = formulario.elements["name"]; /* Se modificó el elemento y ;*/
  var e = formulario.elements["age"]; /* Se modificó el elemento y ;*/
  var na = formulario.elements["nationality"]; /* Se modificó el elemento y ;*/

  var nombre = n.value; /* Se agregó ; */
  var edad = e.value; /* Se agregó ; */

  var i = na.selectedIndex; /* Se agregó ; */
  var nacionalidad = na.options[i].value; /* Se agregó ; */
  console.log(nombre, edad, nacionalidad); /* Se agregó ; */

  if (nombre.length === 0) {
    n.classList.add("error")
  } else { /* Se agrega */
    n.classList.remove("error"); /* Se agrega */
  } /* Se agrega */

  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  } else { /* Se agrega */
    e.classList.remove("error"); /* Se agrega */
  } /* Se agrega */

  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad)
  } 
}

/* Se elimina el siguiente bloque de código duplicado */

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  var lista = document.getElementById("lista-de-invitados"); /* Se agrega ;*/

  var elementoLista = document.createElement("div"); /* Se agrega ;*/
  elementoLista.classList.add("elemento-lista"); /* Se agrega ; y se corrige a .add*/
  lista.appendChild(elementoLista); /* Se agrega ;*/

  function crearElemento(descripcion, valor) {/* Se agrega */
    var spanNombre = document.createElement("span"); /* Se agrega ;*/
    var inputNombre = document.createElement("input"); /* Se agrega ;*/
    var espacio = document.createElement("br"); /* Se agrega ;*/
    spanNombre.textContent = descripcion + ": "; /* Se cambia a descripcion + ": "; */
    inputNombre.value = valor; /* Se cambia a valor; */
    elementoLista.appendChild(spanNombre); /* Se agrega ;*/
    elementoLista.appendChild(inputNombre); /* Se agrega ;*/
    elementoLista.appendChild(espacio); /* Se agrega ;*/
  }/* Se agrega y se borró el siguiente bloque de código repetido*/

  crearElemento("Nombre", nombre); /* Se agrega ;*/
  crearElemento("Edad", edad); /* Se agrega ;*/
  crearElemento("Nacionalidad", nacionalidad); /* Se agrega ;*/

  var botonBorrar = document.createElement("button"); /* Se agrega ;*/
  botonBorrar.textContent = "Eliminar invitado"; /* Se agrega ;*/
  botonBorrar.id = "boton-borrar"; /* Se agrega ;*/
  var corteLinea = document.createElement("br"); /* Se agrega ;*/
  elementoLista.appendChild(corteLinea); /* Se agrega ;*/
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    botonBorrar.parentNode.remove(); /* Se agrega ; y se borró la línea de arriba que estaba comentada;*/
  }
}