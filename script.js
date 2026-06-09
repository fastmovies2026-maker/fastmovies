const peliculas = {
  avatar: {
    titulo: "Avatar",
    anio: "2009",
    genero: "Ciencia ficción",
    sinopsis: "Un exmarine llega a Pandora y se ve envuelto en un conflicto entre humanos y los Na'vi.",
    poster: "img/avatar.jpg",
    drive: "TU_ID_DE_GOOGLE_DRIVE"
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const pelicula = peliculas[id];

if(pelicula){

  document.getElementById("titulo").textContent =
    pelicula.titulo;

  document.getElementById("info").textContent =
    pelicula.anio + " • " + pelicula.genero;

  document.getElementById("sinopsis").textContent =
    pelicula.sinopsis;

  document.getElementById("poster").src =
    pelicula.poster;
}

function verPelicula(){

  document.getElementById("video").style.display =
    "block";

  document.getElementById("player").src =
    "https://drive.google.com/file/d/" +
    pelicula.drive +
    "/preview?autoplay=1";
}
