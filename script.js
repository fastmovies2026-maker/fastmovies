const peliculas = {
  1001: "1vJfbFCHQn_hZoGm2OymWkGeJburnaE0S",
  1002: "1EJuOGaZgkROv_a4YgKgSGdz7e29_bs8H",
  1003: "1l6EPg6goP80fgryYucoFYxL-_vW2oIcs",
  1004: "1DSN20MlensUmmlNAXEMOvb23W2QSQXtg"
};

function verPelicula() {

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (peliculas[id]) {

    document.getElementById("inicio").style.display = "none";
    document.getElementById("video").style.display = "block";

    const videoID = peliculas[id];

    document.getElementById("player").src =
      "https://drive.google.com/file/d/" + videoID + "/preview";

  }

}
