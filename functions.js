var carta1 = {
    nome: "Bulbassauro",
    imagem: "https://assets.materialup.com/uploads/16628596-91da-45c6-8bd3-f514a2d5a58b/preview.jpg",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};

var carta2 = {
    nome: "Darth Vader",
    imagem: "https://assets.materialup.com/uploads/16628596-91da-45c6-8bd3-f514a2d5a58b/preview.jpg",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
 };

var carta3 = {
    nome: "Shiryu de Dragão",
    imagem: "https://assets.materialup.com/uploads/16628596-91da-45c6-8bd3-f514a2d5a58b/preview.jpg",
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
        divResultado.innerHTML = '<p class="resultado-final">Venceu</p>';
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        divResultado.innerHTML = '<p class="resultado-final">Perdeu</p>';
    } else {
        divResultado.innerHTML = '<p class="resultado-final">Empatou</p>';
    }
    document.getElementById('btnJogar').disabled = true;
    exibirCartaMaquina();
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

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById('carta-maquina');
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png' style=' width: inherit; height: inherit; position: absolute;'>";
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>';
}




//desafios 
//Adicionar um baralho com várias outras cartas
//Adicionar um sistema para qunado vc ganha , ganahr a carta do outro jogador
//quando zerar as cartas a pessoa perde
//fazer a função exibir carta para a maquina e o jogador, mudando apenas os parametros