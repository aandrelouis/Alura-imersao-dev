var carta1 = {
    nome: "Bulbassauro",
    imagem: "https://static.wikia.nocookie.net/pokepediabr/images/3/3c/001Bulbassauro.png/revision/latest?cb=20210330173024&path-prefix=pt-br",
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
    imagem: "https://static.wikia.nocookie.net/saintseya/images/9/9e/Shiryu_3_255.png/revision/latest?cb=20151229134313&path-prefix=pt",
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
    exibirCartaJogador();

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

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById('carta-jogador');
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png' style=' width: inherit; height: inherit; position: absolute;'>";
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>';
}