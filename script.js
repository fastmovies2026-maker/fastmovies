const peliculas = {
  1001: "1vJfbFCHQn_hZoGm2OymWkGeJburnaE0S",
  1002: "ID_DE_TU_SEGUNDA_PELICULA"
};

function verPelicula() {

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (peliculas[id]) {

    const videoID = peliculas[id];

    document.getElementById("player").src =
      "https://drive.google.com/file/d/" + videoID + "/preview";

  } else {
    alert("Película no encontrada");
  }

}
