const peliculas = {

  terminator: {
    titulo: "Terminator",
    anio: "1984",
    genero: "Ciencia ficción",
    sinopsis: "Los Ángeles, año 2029. Las máquinas dominan el mundo. Los rebeldes que luchan contra ellas envían a un guerrero al pasado para proteger a Sarah Connor y asegurar el futuro de la humanidad.",
    poster: "img/terminator.jpg",
    drive: "1MscfZqRAVWdEYEnRFyqGx7v6ym2PS-WV"
  },

  skyfall: {
    titulo: "skyfall",
    anio: "2012",
    genero: "Accion",
    sinopsis: " la lealtad de James Bond hacia M se pone a prueba cuando secretos del pasado de ella vuelven para atormentarla. Tras el ataque a la sede del MI6, el agente 007 debe localizar y destruir a Silva, un peligroso ciberterrorista y exagente que busca venganza.",
    poster: "img/skyfall.jpg",
    drive: "1h-rD3VRfI2sxLtYKD35to6RSZJ9SCYB9"
  },
  akira: {
    titulo: "Akira",
    anio: "1988",
    genero: "Anime / Ciencia ficción",
    sinopsis: "En una Tokio futurista, un joven desarrolla poderes psíquicos que amenazan con desencadenar una nueva catástrofe.",
    poster: "img/akira.jpg",
    drive: "1JW12cBSkXKYzYZypRL_wkYaWyp7yX-Kf"
  },
  harrypotterylacamarasecreta: {
    titulo: "Harry Potter Y La Camara Secreta",
    anio: "202",
    genero: "Aventura / Ciencia ficción",
    sinopsis: "Tras derrotar una vez más a lord Voldemort, su siniestro enemigo en Harry Potter y la piedra filosofal, Harry espera impaciente en casa de sus insoportables tíos el inicio del segundo curso del Colegio Hogwarts de Magia y Hechicería. Sin embargo, la espera dura poco, pues un elfo aparece en su habitación y le advierte que una amenaza mortal se cierne sobre la escuela. Así pues, Harry no se lo piensa dos veces y, acompañado de Ron, su mejor amigo, se dirige a Hogwarts en un coche volador. Pero ¿puede un aprendiz de mago defender la escuela de los malvados que pretenden destruirla? Sin saber que alguien ha abierto la Cámara de los Secretos, dejando escapar una serie de monstruos peligrosos, Harry y sus amigos Ron y Hermione tendrán que enfrentarse con arañas gigantes, serpientes encantadas, fantasmas enfurecidos y, sobre todo, con la mismísima reencarnación de su más temible adversario..",
    poster: "img/volveralfuturo.jpg",
    drive: "1fqFCLk1fIFJVkkymJ7_wipDkLyjXvh7q"
  },
  volveralfuturo: {
    titulo: "volver al futuro",
    anio: "1985",
    genero: "Aventura / Ciencia ficción",
    sinopsis: "sigue al adolescente Marty McFly, quien viaja accidentalmente de 1985 a 1955 en un vehículo DeLorean modificado por su amigo, el excéntrico científico Doc Brown. Al interferir con el primer encuentro de sus padres, Marty debe lograr que se enamoren antes de desaparecer de la existencia y encontrar la manera de regresar a su época.",
    poster: "img/volveralfuturo.jpg",
    drive: "1RgSCNX_Oz4b0j2DnnMMFB6bv8a8-mRCq"
  },
  thor: {
    titulo: "thor",
    anio: "2011",
    genero: "accion / Ciencia ficción",
    sinopsis: "Thor, el príncipe heredero de Asgard, es desterrado a la Tierra por su padre Odín tras reavivar imprudentemente una antigua guerra. Despojado de su martillo Mjölnir y obligado a vivir como un humano, Thor aprende el verdadero significado de la humildad mientras se enamora de la científica Jane Foster",
    poster: "img/thor.jpg",
    drive: "1Oi3Z3oMuIxZd5DcFe4Ev0w5eC-uKq3TY"
  },

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
