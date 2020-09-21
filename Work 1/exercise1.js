const p1 = document.getElementById("numeroum");
const p2 = document.getElementById("numerodois");
const btnEnviar = document.getElementById("btnEnviar");



btnEnviar.addEventListener("click", enviaMensagem);			

function enviaMensagem(e){

	const msg = numeroum.value;
	const msg1 = numerodois.value;

	if (msg == msg1) {
		alert(" Números identicos, use outros!")
	}else {
		if (msg > msg1) {
			box.innerHTML = msg;
		}else if (msg1 > msg) {
			box.innerHTML = msg1;
		}
	}
}






