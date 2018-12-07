var la_x_inicial = document.getElementById('input_x_inicial');
var la_y_inicial = document.getElementById('input_y_inicial');
var la_x_final = document.getElementById('input_x_final');
var la_y_final = document.getElementById('input_y_final');
var el_boton_linea = document.getElementById('boton_linea');
el_boton_linea.addEventListener("click", clickeaLinea);
var el_extremo_menor_x = document.getElementById('input_extremo_menor_x');
var el_extremo_mayor_x = document.getElementById('input_extremo_mayor_x');
var el_boton_cuadrado = document.getElementById('boton_cuadrado');
var el_boton_cuadrado_inception = document.getElementById('boton_cuadrado_inception');
el_boton_cuadrado.addEventListener("click", clickeaCuadrado);
el_boton_cuadrado_inception.addEventListener("click", clickeaCuadradoInception);
var la_x_inicial_curva = document.getElementById('input_x_inicial_curva');
var la_y_inicial_curva = document.getElementById('input_y_inicial_curva');
var la_y_final_curva = document.getElementById('input_y_final_curva');
var el_boton_curva = document.getElementById('boton_curva');
el_boton_curva.addEventListener("click", clickeaCurva);
var el_extremo_menor_x_dibujo = document.getElementById('input_x_extremo_menor_dibujo');
var el_extremo_mayor_x_dibujo = document.getElementById('input_x_extremo_mayor_dibujo');
var el_boton_dibujo = document.getElementById('boton_dibujo');
var el_boton_reset = document.getElementById('boton_reset');
el_boton_dibujo.addEventListener("click", clickeaDibujo);
el_boton_reset.addEventListener("click", clickeaReset);
//---------------------------------------------------------------------------------------------------------------
var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
document.addEventListener("keydown", tocanTeclado);
var elcanvas = document.getElementById('dibujo');
var lienzo = elcanvas.getContext("2d");
elcanvas.addEventListener("mousedown", tocanMouse);
document.addEventListener("mouseup", sueltanMouse);
elcanvas.addEventListener("mousemove", mueveMouse);
lienzo.beginPath();
lienzo.strokeStyle = "#2E294E";
var x = elcanvas.width / 2;
var y = elcanvas.height / 2;
var apretado = false;
lienzo.moveTo(x, y);
lienzo.lineWidth = 3;

function dibujarCuadrado(esq1, esq2){
  var elcanvas = document.getElementById('dibujo');
  var lienzo = elcanvas.getContext("2d");
  lienzo.beginPath();
  lienzo.strokeStyle = "#C20114";
  lienzo.moveTo(esq1, esq1);
  lienzo.lineTo(esq1, esq2);
  lienzo.lineTo(esq2, esq2);
  lienzo.lineTo(esq2, esq1);
  lienzo.lineTo(esq1, esq1);
  lienzo.stroke();
  lienzo.closePath();
}
function dibujarCuadradoInception(extremo1, extremo2){
  var j = parseInt(extremo1);
  for (var i= parseInt(extremo2); i>j; i-=5){
    dibujarCuadrado(i,j);
    j+=5;
  }
}
function dibujarCurva(x_inicio, y_inicio, y_final, alreves){

  for(var h = 0; y_inicio < y_final; h+=1){
    if (alreves){
      dibujarLinea(y_inicio, x_inicio, y_final, x_inicio + h);
    }
    else {
    dibujarLinea(x_inicio, y_inicio, x_inicio + h, y_final);
    }
    y_inicio +=1;
  }
}
function dibujarLinea(x_inicial, y_inicial, x_final, y_final){
  var elcanvas = document.getElementById('dibujo');
  var lienzo = elcanvas.getContext("2d")
  lienzo.beginPath();
  lienzo.strokeStyle = "#2E294E";
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}
function hacerDibujo(esquina1, esquina2) {
  dibujarCurva(esquina1,esquina1,esquina2,false);
  dibujarCurva(esquina1,esquina1,esquina2,true);
  dibujarCuadradoInception(esquina1, esquina2);
}
function clickeaLinea() {
  dibujarLinea(la_x_inicial.value, la_y_inicial.value, la_x_final.value, la_y_final.value)
}
function clickeaCuadrado() {
  dibujarCuadrado(el_extremo_menor_x.value, el_extremo_mayor_x.value);
}
function clickeaCuadradoInception() {
  dibujarCuadradoInception(el_extremo_menor_x.value, el_extremo_mayor_x.value)
}
function clickeaCurva() {
  dibujarCurva(parseInt(la_x_inicial_curva.value), parseInt(la_y_inicial_curva.value), parseInt(la_y_final_curva.value), false)
}
function clickeaDibujo() {
  hacerDibujo(parseInt(el_extremo_menor_x_dibujo.value), parseInt(el_extremo_mayor_x_dibujo.value))
}
function clickeaReset(){
  lienzo.clearRect(0,0,elcanvas.width,elcanvas.height);
}
function tocanTeclado(evento){
  var velocidad = 10;
  switch (evento.keyCode){
    case teclas.RIGHT:
      dibujarLinea(x,y,x+velocidad,y)
      x+=velocidad;
      break;
    case teclas.UP:
      dibujarLinea(x,y,x,y-velocidad)
      y-=velocidad;
      break;
    case teclas.LEFT:
      dibujarLinea(x,y,x-velocidad,y)
      x-=velocidad;
      break;
    case teclas.DOWN:
      dibujarLinea(x,y,x,y+velocidad)
      y+=velocidad;
      break;
  }
}
function tocanMouse(evento){
    apretado = true;
    x = evento.layerX;
    y = evento.layerY;
}
function mueveMouse(evento) {
  if(apretado) {
    dibujarLinea(x,y,evento.layerX,evento.layerY)
    x = evento.layerX;
    y = evento.layerY;
  }
}
function sueltanMouse(){
  apretado = false;
}
var ruta = window.location;
document.write("Tú ruta es: " + ruta);
