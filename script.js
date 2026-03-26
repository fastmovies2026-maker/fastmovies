function verPelicula() {

  const peliculas = {
    1001: "1vJfbFCHQn_hZoGm2OymWkGeJburnaE0S"
  };

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
