const numeroEquipe = document.getElementById("numerodaequipe");
const btnEnviar = document.getElementById("btnEnviar");



btnEnviar.addEventListener("click", enviaMensagem);			

function enviaMensagem(e){

	const msg = numeroEquipe.value;
	

	const basquete = "basquete";
	const tenis = "Tenis";
	const futebol = "Futebol";
	const volei = "Volei";

	if (msg  <= 0) {
		alert("Incorreto. Digitar um número válido.");
	} if(msg <= 2) {
        box.innerHTML = tenis;
	} if(msg > 2 && msg < 6) {
        box.innerHTML = basquete;
	} if(msg == 6) {
        box.innerHTML = volei;
	} if(msg >  6 && msg < 11) {
        box.innerHTML = futebol;
	} if(msg > 11){
		alert("Número grande demais para entrar em alguma equipe.");
	}

}






