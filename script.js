const peliculas = {

1001: "1vJfbFCHQn_hZoGm2OymWkGeJburnaE0S"

};

const parametros = new URLSearchParams(window.location.search);

const id = parametros.get("id");

const video = peliculas[id];

if(video){

const player = document.getElementById("player");

player.src = "https://drive.google.com/file/d/" + video + "/preview";

setTimeout(() => {

if (player.requestFullscreen) {
player.requestFullscreen();
}

}, 2000);

}
