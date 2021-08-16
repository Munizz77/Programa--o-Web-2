function changehearts(){
    var hearts = document.getElementById('like');
    var contador = 1;
    
    if (contador == 0){
        hearts.style.backgroundImage = "url('./icones/coracao.png')";
        contador = 1;
    }
    else{
        hearts.style.backgroundImage = "url('./icones/coracao_red.png')";
        contador = 0;
    }
}