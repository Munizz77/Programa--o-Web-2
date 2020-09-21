let contador= tabuada.value;
    let x = 1;

    let variavel = contador;

    let variavel2 = x;
    while(x <= 10){

        let resultado = contador * x;
        imprime(resultado);

        variavel2 = x + 1;
          
        function imprime(texto){
	    document.querySelector("#box").innerHTML += variavel + "x" + variavel2 + "="+ texto + "<br>";
        }

        x++;
    }
 
	

