const anoNasc = document.getElementById("anoNasc");
const btnEnviar = document.getElementById("btnEnviar");
let box = document.getElementById("box");




btnEnviar.addEventListener("click", enviaMensagem);	
function enviaMensagem(e){

	
    let contador= anoNasc.value;

    while(contador < 2020){

    
    	imprime(contador);
    	contador++;
    }
 
	


}



function imprime(texto){
	document.querySelector("#box").innerHTML += texto + "<br>";
}