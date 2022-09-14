var carta1 = {
    nome: "Guts",
    imagem: "https://i.pinimg.com/originals/ce/3e/06/ce3e063428891a9efce8c70c6440433e.png",
    atributos: {
      ataque: 10,
      defesa: 9,
      magia: 0,
          }
  }
  
  var carta2 = {
    nome: "Femto",
    imagem:"https://i.pinimg.com/originals/fd/1a/aa/fd1aaabe4b310a19e109b3567e58456f.jpg",
    atributos: {
      ataque: 2,
      defesa: 9,
      magia: 9,
      
    }
  }
  
  var carta3 = {
    nome: "Schierke",
    imagem:"https://i.pinimg.com/originals/99/04/39/9904395b5396a6ef8edd2aeed4e5022f.png",
    atributos: {
      ataque: 2,
      defesa: 6,
      magia: 8,
      agilidade: 4
    }
  }
  
  var carta4 = {
    nome: "Mozgus",
    imagem:"https://cdn.myanimelist.net/images/characters/16/87108.jpg",
    atributos: {
      ataque: 7,
      defesa: 5,
      magia: 2,
      agilidade : 3
    }
  }
  
  var carta5 = {
    nome: "Serpico",
    imagem:"https://cdn.myanimelist.net/images/characters/12/48733.jpg",
    atributos: {
      ataque: 9,
      defesa: 3,
      magia: 0,
      
    }
  }
  
  var carta6 = {
    nome: "Nosferatu Zodd",
    imagem:"https://i.pinimg.com/736x/b0/3c/0c/b03c0c7a6d4cf977c5b54a82f657491e.jpg",
    atributos: {
      ataque: 10,
      defesa: 8,
      magia: 9,
      
    }
  };
  
  var cartas = [carta1, carta2, carta3, carta4, carta5, carta6]
  var cartaMaquina
  var cartaJogador
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 6) 
    cartaMaquina = cartas [numeroCartaMaquina]
  
    var numeroCartaJogador = parseInt(Math.random() * 6)
    while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 6)  
    }
    cartaJogador= cartas [numeroCartaJogador]
     console.log(cartaJogador)
    
    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
    
    exibirCartaJogador()
    }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo")
    
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var divResultado = document.getElementById("resultado")
    
    var elementoResultado = document.getElementById("resultado")
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
    
    if (valorCartaJogador > valorCartaMaquina) {
      divResultado = "<p class='resultado-final'>Venceu!</p>"
    } else if (valorCartaMaquina > valorCartaJogador) {
      divResultado = "<p class='resultado-final'>Perdeu...</p>"
    } else {
      divResultado = "<p class='resultado-final'>Empatou!</p>"
    }
    console.log(cartaMaquina)
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
    
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
                                
    var tagHTML = "<div id= 'opcoes' class='carta-status'>"
    
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>" ;
    }
  var nome = `<p> class="carta-subtitle">${cartaJogador.nome}</p>`
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
  }