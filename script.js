const peliculas = {
  avatar: {
    titulo: "Terminator",
    anio: "1984",
    genero: "Ciencia ficción",
    sinopsis: "Los Ángeles, año 2029. Las máquinas dominan el mundo. Los rebeldes que luchan contra ellas tienen como líder a John Connor, un hombre que nació en los años ochenta. Para acabar con la rebelión, las máquinas deciden enviar al pasado a un robot -Terminator- cuya misión será eliminar a Sarah Connor, la madre de John, e impedir así su nacimiento",
    poster: "img/img/terminator-l_cover.jpg",
    drive: "1MscfZqRAVWdEYEnRFyqGx7v6ym2PS-WV"
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
