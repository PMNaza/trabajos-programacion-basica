var caja = [];
plataInicial();
var entregar = [];
var hacerdisplay = true;
laplata = document.getElementById("plata");
boton_retirar = document.getElementById("retirar");
boton_retirar.addEventListener("click", retirar);
var parrafo;
//--Funciones-------------------------------------------------------------------------------------------------------------------------------------
function plataInicial(){
  caja.push(new Billete(500, 5));
  caja.push(new Billete(200, 5));
  caja.push(new Billete(100, 5));
  caja.push(new Billete(50, 5));
  caja.push(new Billete(20, 5));
  caja.push(new Billete(10, 5));
  caja.push(new Billete(5, 5));
}
function chequearPlata(plata){
  entregar = [];
  if (plata < 0){
    parrafo = document.getElementById('entrega');
    parrafo.innerHTML = parrafo.innerHTML + "<h2>Este valor no tiene sentido</h2>";
    hacerdisplay = false;
    return;
  }
  for (b of caja){
    var cant_billetes_a_usar = Math.floor(plata / b.valor);
    if (cant_billetes_a_usar > b.cantidad){
      cant_billetes_a_usar = b.cantidad;
    }
    b.cantidad -= cant_billetes_a_usar;
    plata -= (cant_billetes_a_usar * b.valor);
    entregar.push(new Billete(b.valor, cant_billetes_a_usar));
  }
  if (plata != 0){
    for (x of entregar){
      for (b of caja){
        if (x.valor == b.valor){
          b.cantidad += x.cantidad;
        }
      }
    }
    parrafo = document.getElementById('entrega');
    parrafo.innerHTML = parrafo.innerHTML + "<h2>No podemos pagarle</h2>";
    hacerdisplay = false;
  }
  console.log(caja[0].cantidad, caja[1].cantidad, caja[2].cantidad, caja[3].cantidad, caja[4].cantidad, caja[5].cantidad, caja[6].cantidad);
}
function retirar(evento){
  chequearPlata(laplata.value);
  if (hacerdisplay){
    display();
  }
  hacerdisplay = true;
}
function display(){
  parrafo = document.getElementById('entrega');
  parrafo.innerHTML = parrafo.innerHTML + "<br><h3>Se le ha entregado:</h1>";
  for (x of entregar){
    if (x.cantidad > 0){
      parrafo.innerHTML += "<br>" + x.cantidad + " billetes de " + x.valor + "<hr />";
    }
  }
}
