const peliculas = {

  terminator: {
    titulo: "Terminator",
    anio: "1984",
    genero: "Ciencia ficción",
    sinopsis: "Los Ángeles, año 2029. Las máquinas dominan el mundo. Los rebeldes que luchan contra ellas envían a un guerrero al pasado para proteger a Sarah Connor y asegurar el futuro de la humanidad.",
    poster: "img/terminator-1_cover.jpg",
    drive: "1MscfZqRAVWdEYEnRFyqGx7v6ym2PS-WV"
  }

  // Agrega más películas aquí
  /*
  ,
  akira: {
    titulo: "Akira",
    anio: "1988",
    genero: "Anime / Ciencia ficción",
    sinopsis: "En una Tokio futurista, un joven desarrolla poderes psíquicos que amenazan con desencadenar una nueva catástrofe.",
    poster: "img/akira.jpg",
    drive: "ID_DE_GOOGLE_DRIVE"
  }
  */

};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const pelicula = peliculas[id];

if (pelicula) {

  document.getElementById("titulo").textContent =
    pelicula.titulo;

  document.getElementById("info").textContent =
    pelicula.anio + " • " + pelicula.genero;

  document.getElementById("sinopsis").textContent =
    pelicula.sinopsis;

  document.getElementById("poster").src =
    pelicula.poster;

  document.title =
    pelicula.titulo + " | FastMovies";

} else {

  document.getElementById("titulo").textContent =
    "Película no encontrada";

  document.getElementById("info").textContent = "";

  document.getElementById("sinopsis").textContent =
    "La película solicitada no existe o el enlace es incorrecto.";

}

function verPelicula() {

  if (!pelicula) return;

  document.getElementById("video").style.display =
    "block";

  document.getElementById("player").src =
    "https://drive.google.com/file/d/" +
    pelicula.drive +
    "/preview?autoplay=1";

  // Intentar girar pantalla en móviles compatibles
  if (screen.orientation && screen.orientation.lock) {

    screen.orientation
      .lock("landscape")
      .catch(() => {});

  }

  // Desplazar automáticamente al reproductor
  document.getElementById("video")
    .scrollIntoView({
      behavior: "smooth"
    });

}
