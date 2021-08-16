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