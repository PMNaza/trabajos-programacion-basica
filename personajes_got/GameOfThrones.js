var Imagenes = [];
var Personajes = [];
agregarImagenes();
crearPersonajes();
ajustarImagenes(600, 600);
mostrarPersonajes();
//--Funciones----------------------------------------------------------------------------------------------------------------------------------
function agregarImagenes(){
  Imagenes["Tyrion"] = "Imagenes/Tyrion.PNG";
  Imagenes["Cersei"] = "Imagenes/Cersei.PNG";
  Imagenes["Jaime"] = "Imagenes/Jaime.PNG";
  Imagenes["Eddard"] = "Imagenes/Eddard.PNG";
  Imagenes["Catelyn"] = "Imagenes/Catelyn.PNG";
  Imagenes["Robb"] = "Imagenes/Robb.PNG";
  Imagenes["Jon"] = "Imagenes/Jon.PNG";
  Imagenes["Sansa"] = "Imagenes/Sansa.PNG";
  Imagenes["Arya"] = "Imagenes/Arya.PNG";
  Imagenes["Bran"] = "Imagenes/Bran.PNG";
  Imagenes["Margaery"] = "Imagenes/Margaery.PNG";
}
function crearPersonajes(){
  Personajes.push(new PersonajeGot("Tyrion", 27, "Lannister", "Roca Casterly"));
  Personajes.push(new PersonajeGot("Cersei", 34, "Lannister", "Roca Casterly"));
  Personajes.push(new PersonajeGot("Jaime", 34, "Lannister", "Roca Casterly"));
  Personajes.push(new PersonajeGot("Margaery", 17, "Tyrell", "Altojardín"));
  Personajes.push(new PersonajeGot("Eddard", 36, "Stark", "Invernalia"));
  Personajes.push(new PersonajeGot("Catelyn", 35, "Stark", "Invernalia"));
  Personajes.push(new PersonajeGot("Robb", 16, "Stark", "Invernalia"));
  Personajes.push(new PersonajeGot("Jon", 17, "Snow", "Invernalia"));
  Personajes.push(new PersonajeGot("Sansa", 14, "Stark", "Invernalia"));
  Personajes.push(new PersonajeGot("Arya", 11, "Stark", "Invernalia"));
  Personajes.push(new PersonajeGot("Bran", 10, "Stark", "Invernalia"));
}
function mostrarPersonajes(){
  for(personaje of Personajes){
    personaje.display();
  }
}
function ajustarImagenes(ancho, alto){
  for (per of Personajes){
    per.ajustarImagen(ancho, alto);
  }
}
