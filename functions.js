function adicionarFilme(){
    var filmeFavorito = document.getElementById("filme").value;

    if (filmeFavorito.endsWith(".jpg")){   
        listarFilmesNaTela(filmeFavorito);
    }
    else {
        console.error("Endereço de imagem inválido");
    }
    
    document.getElementById("filme").value = "";

}


function listarFilmesNaTela(filme) {
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}


///////Desafios 

//um botão para remover um filme da lista

// colocar também o nome do filme e não só a imagem

// também  guardaros filmes em uma lista e mostrar a lista de filmes na tela

// criar várias funções de conversão 
// -- toda vez que chamar a função e passar parametro, devolver um valor(retorno)
// -- colocar radio button para escolher qual conversão fazer