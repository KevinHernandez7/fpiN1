// zona de variables
var vOpciones;
var vMenu;
var vJuego;
var centro;
var jugadores;
var baraja;
var dineroTotal = 0;
var k = 0;    //k identifica el turno del jugador
var ronda = 1;
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
//herencia de familia hacia carta.
function Familia(sNombre) {
  this.familia = sNombre;
}

function Carta(sFamilia,sNombre,iValor){// atributos de cartas 
  Familia.call(this,sFamilia);
  this.nombre = sNombre;
  this.valor = iValor;
}
// se busca la imagen para mostrar
Carta.prototype = new Familia();
Carta.prototype.obtenerDireccion = function() {
  var direccion = "images/"+this.familia+"/"+this.valor+".png";
  return direccion;
};
// se crean arreglos para cada familia de cartas
function llenarFamilia(sFam) {
  var a = new Array();
    for (var nombre = 2; nombre <= 10; nombre++) {
      var oCarta = new Carta(sFam,nombre,nombre);
      a.push(oCarta);
    }
    var oJ = new Carta(sFam,"J",11);
    a.push(oJ);
    var oQ = new Carta(sFam,"Q",12);
    a.push(oQ);
    var oK = new Carta(sFam,"K",13);
    a.push(oK);
    var oA = new Carta(sFam,"A",14);
    a.push(oA);
    return a;
}
// se crea un bucle para llenar un array con la clase jugador definida desde html en el menu de usuario
function llenarJugadores(n) {
  var aJugadores = new Array();
  for (var i = 0; i < n; i++) {
    var oJugador = new Jugador();
    oJugador.repartir();
    aJugadores.push(oJugador);
  }
  return aJugadores;        //devuelve un arreglo con los jugadores
}

function Jugador() {
  this.dinero = 2000;                  //dinero inicial
  this.mano;
}


