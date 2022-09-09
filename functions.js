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
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}


///////Desafios 

//um botão para remover um filme da lista
function removerFilme(nome){
    var indice = nomeFilmes.indexOf(nome);
    nomeFilmes.splice(indice, 1);
    
    var elementoListaFilmes = document.getElementById("listaFilmes");

}

// colocar também o nome do filme e não só a imagem --Feito
// também  guardar os filmes em uma lista e mostrar a lista de filmes na tela -- Feito
// var nomeFilmes = [];



// criar várias funções de conversão 
// -- toda vez que chamar a função e passar parametro, devolver um valor(retorno)
// -- colocar radio button para escolher qual conversão fazer