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

var contadorPostagem = 1;
function mostrarFormulario() {
    if(contadorPostagem == 0){
        document.getElementById("formulario").style.visibility = "hidden";
        contadorPostagem = 1;
    }else{
        document.getElementById("formulario").style.visibility = "visible";
        contadorPostagem = 0;
    }
  
}

function enviarMensagem(){
    var enviar = document.querySelector("#txtComentario");

    var novoComentario = `
        <div class="comentario">
            <span>Plinio</span>
            <p>${enviar.value}</p>
        </div>
    `;

    var comentarios = document.querySelector("#comentarios");

    var elemento = document.createElement("div");
    elemento.innerHTML = novoComentario;

    comentarios.appendChild(elemento);
    
    
}