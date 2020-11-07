// Endpoint
// https://restcountries.eu/rest/v2/

const url = 'https://restcountries.eu/rest/v2/all';


fetch(url)
    .then( (resposta) => resposta.json() )
    .then( (dados) => { 
        console.log(dados);
               
        let html = "";
 
        for (let i = 0; i < dados.length; i++){

        	html += `
        	    <option value="paises">${dados[i].name}</option>`;

            document.getElementById("btnEnviar").onclick = function() {


              var selecionado = document.getElementById("paises");
              var npais = selecionado.selectedIndex;

              var n = dados[npais].name;
              var a = dados[npais].capital;
              var b = dados[npais].population;             
              let c = `
                  <img src="${dados[npais].flag}" />
              `;
              var d = dados[npais].region;
              var e = dados[npais].area;
 
              for(let moeda = 0; moeda < dados[npais].currencies.length; moeda++){
                  
                  var moeda1 = dados[npais].currencies[moeda].name;
                  document.querySelector("#moeda").innerHTML = moeda1;

              }

              for(let g = 0; g < dados[npais].languages.length; g++){
                  
                  var gg = dados[npais].languages[g].name;


                  document.querySelector("#idioma").innerHTML = gg;
                

              }
               document.querySelector("#nome").innerHTML = n;
               document.querySelector("#capital").innerHTML = a;
               document.querySelector("#populacao").innerHTML = b;
               document.querySelector("#bandeira").innerHTML = c;
               document.querySelector("#continente").innerHTML = d;
               document.querySelector("#area").innerHTML = e;
               
           };
         
        }
        document.querySelector("#paises").innerHTML = html;

    })
    .catch( (erro) => console.log(erro) );
