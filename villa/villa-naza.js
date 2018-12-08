var la_villa = document.getElementById('villanaza');
var papel = la_villa.getContext('2d');
var teclas = {
  UP:38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
}
var x = random(420, 0);
var y = random(420, 0);
//--Imagenes--------------------------------------------------------------------------------------------------------------

var mapa = {
  url: "Imagenes/tile.png",
  carga: false
};
mapa.imagen = new Image();
mapa.imagen.src = mapa.url;
var vaca = {
  url: "Imagenes/vaca.png",
  carga: false
};
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
var cerdo = {
  url: "Imagenes/cerdo.png",
  carga: false
};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
var pollo = {
  url: "Imagenes/pollo.png",
  carga: false
};
var x_vaca = new Array();
var y_vaca = new Array();
var x_cerdo = new Array();
var y_cerdo = new Array();
var cantidad_vaca;
var cantidad_cerdo;
var velocidad = 10;
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
mapa.imagen.addEventListener("load", cargarMapa);
vaca.imagen.addEventListener("load", cargarVaca);
cerdo.imagen.addEventListener("load", cargarCerdo);
pollo.imagen.addEventListener("load", cargarPollo);
document.addEventListener("keydown", moverPollo);
//--Funciones----------------------------------------------------------------------------------------------------------
function dibujar() {
  if (mapa.carga) {
    papel.drawImage(mapa.imagen, 0, 0);
  }
  if (vaca.carga) {
    cantidad_vaca = random(0,15);
    for(v = 0; v < cantidad_vaca; v++){
      x_vaca[v] = random(0,6);
      y_vaca[v] = random(0,6);
      x_vaca[v] *= 70;
      y_vaca[v] *= 70;
      papel.drawImage(vaca.imagen, x_vaca[v], y_vaca[v]);
    }
  }
  if (cerdo.carga) {
    cantidad_cerdo = random(0, 15);
    for(c = 0; c < cantidad_cerdo; c++){
      x_cerdo[c] = random(0,6);
      y_cerdo[c] = random(0,6);
      x_cerdo[c] *= 70;
      y_cerdo[c] *= 70;
      papel.drawImage(cerdo.imagen, x_cerdo[c], y_cerdo[c]);
    }
  }
  if (pollo.carga) {
    papel.drawImage(pollo.imagen, x, y);
  }
}
function cargarMapa(evento) {
  mapa.carga = true;
  dibujar();
}
function cargarVaca(evento) {
  vaca.carga = true;
  dibujar();
}
function cargarCerdo(evento) {
  cerdo.carga = true;
  dibujar();
}
function cargarPollo(evento) {
  pollo.carga = true;
  dibujar();
}
function random(min, max) {
  var resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
function mantener(){
  if (mapa.carga) {
    papel.drawImage(mapa.imagen, 0, 0);
  }
  if (vaca.carga) {

    for(v = 0; v < cantidad_vaca; v++){
      papel.drawImage(vaca.imagen, x_vaca[v], y_vaca[v]);
    }
  }
  if (cerdo.carga) {

    for(c = 0; c < cantidad_cerdo; c++){
      papel.drawImage(cerdo.imagen, x_cerdo[c], y_cerdo[c]);
    }
  }
  if (pollo.carga) {
      papel.drawImage(pollo.imagen, x, y);
  }
}
function moverPollo(evento) {
  switch(evento.keyCode) {
    case teclas.UP:
      y -= velocidad;
      mantener();
      break;
    case teclas.DOWN:
      y += velocidad;
      mantener();
      break;
    case teclas.LEFT:
      x -= velocidad;
      mantener();
      break;
    case teclas.RIGHT:
      x += velocidad;
      mantener();
      break;
  }
}
