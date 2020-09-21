const primeirahora = document.getElementById("primeirahora");
const segundahora = document.getElementById("segundahora");
const box = document.getElementById("box");
const btnEnviar = document.getElementById("btnEnviar");



btnEnviar.addEventListener("click", enviaMensagem);			

function enviaMensagem(e){

	const numero1 = primeirahora.value;
	const numero2 = segundahora.value;
	const resultado = numero1 - numero2;

	box.innerHTML =  resultado;
}






