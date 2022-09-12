var carta1 = {
    nome: "Bulbassauro",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};

var carta2 = {
    nome: "Darth Vader",
    imagem: "https://www.sideshowtoy.com/wp-content/uploads/2017/04/star-wars-episode-vi-return-of-the-jedi-darth-vader-sixth-scale-figure-hot-toys-feature-903269.jpg",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
 };

var carta3 = {
    nome: "Shiryu de Dragão",
    imagem: "https://pm1.narvii.com/6319/1c3b3f4b3f9b1c3b3f4b3f9b1c3b3f4b3f9b1c3b_hq.jpg",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
};

var cartaMaquina;
var cartaJogador;
var cartas = [carta1, carta2, carta3];

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false; 

    exibirOpcoes();
}

function exibirOpcoes() {
    var opcoes = document.getElementById('opcoes');
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
}


function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName('atributo');
    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById('resultado');
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        divResultado.innerHTML = "Venceu";
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        divResultado.innerHTML = "Perdeu";
    } else {
        divResultado.innerHTML = "Empatou";
    }
    console.log(cartaMaquina);
}


///////////////////////// Desafios /////////////////////////
// fazer tratamento de erro para o caso de não selecionar nenhum atributo
// fazer adição de mais cartas ao jogo
// fazer a imagem da carta ser exibida na tela
