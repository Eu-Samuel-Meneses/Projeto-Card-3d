const card = document.getElementById("card");
const btnPerfil = document.getElementById("btnPerfil");
const btnVoltar = document.getElementById("btnVoltar");

btnPerfil.addEventListener("click", function(){
    card.classList.add("girar");
});
btnVoltar.addEventListener("click", function(){
    card.classList.remove("girar");
});
