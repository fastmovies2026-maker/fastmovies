const peliculas = {

1001: "1vJfbFCHQn_hZoGm2OymWkGeJburnaE0S"
1002: "1EJuOGaZgkROv_a4YgKgSGdz7e29_bs8H"  

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
