var rafa = {
    name: 'Rafael',
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
}

var paulo = {
    name: 'Paulo',
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
}

var gui = {
    name: 'Guilherme',
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

var jogadores = [rafa, paulo, gui];


for(var i = 0; i < jogadores.length; i++){
    console.log(jogadores[i].name);
}


function exibeJogadoresNaTela(jogadores){
    var elemento = "";
    for(var i = 0; i < jogadores.length; i++){
        elemento += "<tr><td>" + jogadores[i].name + "</td>";
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>";
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;

}


exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i){
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i){
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i){
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
}




//Desafio 
//Aumentar um empate para outros jogadores - - usar  lógica para verificar se a lista está válida 
// criar uma coluna nova - válido ou inválido
//identificar o vencedor - quem tem mais pontos
// Colocar uma imagem para cada jogador
// Colocar um botão para zerar tudo do jogo
// Adicionar um novo jogador com o botão apenas utilizando o nome