class PersonajeGot
{
  constructor(nombre, edad, casa, localidad){
    this.nombre = nombre;
    this.edad = edad;
    this.casa = casa;
    this.localidad = localidad;
    this.imagen = new Image();
    this.imagen.src = Imagenes[this.nombre];
  }
  display(){
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<strong> Nombre: " + this.nombre + "</strong><br />");
    document.write("<strong> Edad: " + this.edad + "</strong><br />");
    document.write("<strong> Casa: " + this.casa + "</strong><br />");
    document.write("<strong> Localidad: " + this.localidad + "</strong><hr />");
    document.write("</p>");
  }
  ajustarImagen(ancho, alto){
    this.imagen.width = ancho;
    this.imagen.height = alto;
  }
}
