

var imagemFilmes = ["https://br.web.img3.acsta.net/medias/nmedia/18/90/59/44/20103781.jpg", "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
"https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg"
]


document.getElementById("imagens").innerHTML = "";
for (var i = 0; i < imagemFilmes.length; i++) {
        document.getElementById("imagens").innerHTML += "<img src=" + imagemFilmes[i] + ">";
    }



////////////////////////Desafios/////////////////////////////////

//Desafio - Utilizar o while para exibir os filmes
/* var i =0;
while( i < imagemFilmes.length) {
    document.write("<img src=" + imagemFilmes[i] + ">");
    i++;
} */





//Desafio - Utilizar o forEach para exibir os filmes
/* imagemFilmes.forEach(function(imagem) {
    document.write("<img src=" + imagem + ">");
})
 */




//vertificar se o link da imagem já foi adicionado
/* image = "https://br.web.img3.acsta.net/medias/nmedia/18/90/59/44/20103781.jpg";

if (imagemFilmes.includes(image)) {
    console.log("Imagem já adicionada");
} else {
    console.log("Imagem não adicionada");
    imagemFilmes.push(image);
} */






//Adicionar uma imagem Através de um input na tela e recarregar as imagens na tela
function Adicionar(){
    var link = document.getElementById("imagem").value;
    
    if(imagemFilmes.includes(link)){
        alert("Imagem já adicionada");
        
    }
    else{
        imagemFilmes.push(link);
        document.getElementById("imagens").innerHTML = "";
        for (var i = 0; i < imagemFilmes.length; i++) {
            document.getElementById("imagens").innerHTML += "<img src=" + imagemFilmes[i] + ">";
        }

    }
    
    console.log(imagemFilmes);

}