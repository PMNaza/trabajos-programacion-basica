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
    var cantidad = random(0, 15);
    for(v = 0; v < cantidad; v++){
      papel.drawImage(vaca.imagen, random(0,420), random(0,420));
    }
  }
  if (cerdo.carga) {
    var cantidad = random(0, 15);
    for(c = 0; c < cantidad; c++){
      papel.drawImage(cerdo.imagen, random(0,420), random(0,420));
    }
  }
  if (pollo.carga) {
    var cantidad = 1;
    for(p = 0; p < cantidad; p++){
      papel.drawImage(pollo.imagen, x, y);
    }
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
function moverPollo(evento) {
  switch(evento.keyCode) {
    case teclas.UP:
      y--;
      dibujar();
    case teclas.DOWN:
      y++;
      dibujar();
    case teclas.LEFT:
      x--;
      dibujar();
    case teclas.RIGHT:
      x++;
      dibujar();
      break;
  }
}
