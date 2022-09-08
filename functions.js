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

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}
