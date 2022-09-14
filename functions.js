var nomeFilmes = [];

function adicionarFilme(){
    var filmeFavorito = document.getElementById("filme").value;
    var nomeFilme = document.getElementById("filmeNome").value;

    if (filmeFavorito.endsWith(".jpg")){   
        nomeFilmes.push(nomeFilme);
        listarFilmesNaTela(filmeFavorito);
    }
    else {
        console.error("Endereço de imagem inválido");
    }
    
    document.getElementById("filme").value = "";

}


function listarFilmesNaTela(filme) {
    var elementoFilmeFavorito = "<div>" + "<img src=" + filme + ">" + "<p>" + nomeFilmes[nomeFilmes.length - 1] + "</p>" + "</div>";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    console.log(elementoListaFilmes.value)
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}


///////Desafios 
//um botão para remover um filme da lista -- Feito
function removerFilme(nome){
    var nomeFimeRemover = document.getElementById("filmeNomeRemove").value;
    var indice = nomeFilmes.indexOf(nomeFimeRemover);

    if (indice > -1) {
        var elementoListaFilmes = document.getElementById("listaFilmes");
        for (var i = 0; i < nomeFilmes.length; i++){
            if (nomeFilmes[i] == nomeFimeRemover){
                nomeFilmes.splice(i, 1);
                //remove um determinado elemento, nesse caso a div
                elementoListaFilmes.removeChild(elementoListaFilmes.childNodes[i]);
            }
        }
    }
    else {
        console.error("Filme não encontrado");
    }

    
 
    console.log(elementoListaFilmes);

}

// colocar também o nome do filme e não só a imagem --Feito
// também  guardar os filmes em uma lista e mostrar a lista de filmes na tela -- Feito
// var nomeFilmes = [];



// criar várias funções de conversão 
// -- toda vez que chamar a função e passar parametro, devolver um valor(retorno)
// -- colocar radio button para escolher qual conversão fazer