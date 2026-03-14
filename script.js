const peliculas = {

1001: "1vJfbFCHQn_hZoGm2OymWkGeJburnaE0S"

};

const parametros = new URLSearchParams(window.location.search);

const id = parametros.get("id");

const video = peliculas[id];

if(video){

document.getElementById("player").src =
"https://drive.google.com/file/d/" + video + "/preview";

}