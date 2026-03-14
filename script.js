const peliculas = {

1001: "1vJfbFCHQn_hZoGm2OymWkGeJburnaE0S"

};

const parametros = new URLSearchParams(window.location.search);

const id = parametros.get("id");

const video = peliculas[id];

const player = document.getElementById("player");

const boton = document.getElementById("playButton");

boton.addEventListener("click", function(){

player.src =
"https://drive.google.com/file/d/" + video + "/preview";

if (player.requestFullscreen) {

player.requestFullscreen();

}

boton.style.display = "none";

});
