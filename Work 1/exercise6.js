const conteudo = document.getElementById("conteudo");
const b = document.getElementById("box");
const c = document.getElementById("box2");
const btnEnviar = document.getElementById("btnEnviar");
const btnCopiar = document.getElementById("btnCopiar");



btnEnviar.addEventListener("click", enviarMensagem);
btnLimpar.addEventListener("click",Limpar);
btnLimpar2.addEventListener("click",Limpar1);
btnCopiar.addEventListener("click",Copiar);

var conteudoBox;

function enviarMensagem(e){
    const msg = conteudo.value;
    
    
    b.innerHTML = msg;
    
}
function Limpar(e){
    b.innerHTML = " ";
   
}
function Limpar1(e){
    c.innerHTML = " ";
    
}
function Copiar(e){
    conteudoBox = b.innerHTML;
    c.innerHTML += conteudoBox;

}

    



