// zona de variables.
var vOpciones;
var vMenu;
var vJuego;
var k = 0;
// esta funcion se declara en el html, tomando los valores para contruir la visualización.
function construir() {
  construirVistas();
  baraja = llenarBaraja();
  mostrar(vMenu);
}
//en esta funcion arrancamos el juego, esta hereda desde validarImput() al precionar el botón.
function iniciar() {
  ocultar(vMenu);
  var n = parseInt(document.getElementById('inpJ').value);
  jugadores = llenarJugadores(n);
  actualizarJugadores(n);
  mostrar(vJuego);
  mostrar(vOpciones);
  sombrear(k);
}
// aqui se valida el Imput y se controla que el usuario solo pueda ingresar numeros entre 2 y 10.
function validarInput() {
  var numero=document.getElementById('inpJ').value;
  if (numero<=10&&numero>=2) {
    iniciar();
  }else {
    alert("Debe introcucir numeros del 2 al 10");
    window.location.reload();
    return document.getElementById('inpJ').value=2;
  };
}
// manejo de la visualizacion de la mesa.
function construirVistas() {
  vMenu = document.getElementById('vMenu');
  vJuego = document.getElementById('vJuego');
  vOpciones = document.getElementById('vOpciones');
  centro = document.getElementById('centro');
}