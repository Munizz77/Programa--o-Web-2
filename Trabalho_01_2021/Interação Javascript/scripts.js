var cont = 1;
function changehearts(){


    if(cont == 0){
        document.getElementById("like").src="icones/coracao.png";
        cont=1
    }else{
        document.getElementById("like").src="icones/coracao_red.png";
        cont = 0;

    }
}
function mostrarFormulario() {
    var visibilidade = document.getElementById("formulario").style.visibility;
    if(visibilidade == "hidden"){
        document.getElementById("formulario").style.visibility = "visible";
    }else{
        document.getElementById("formulario").style.visibility = "hidden";

    }

}