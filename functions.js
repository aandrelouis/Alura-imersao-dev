

var listaFilmes = ["Escola de Rock" , "A chegada", "Nárnia", "O rei leão", "O pequeno príncipe", "A casa"]

listaFilmes.push("Monstros S.A")

/* document.write("<h1>"+ listaFilmes[0]+ "<h1/>");
document.write("<h1>"+ listaFilmes[1]+ "<h1/>");
document.write("<h1>"+ listaFilmes[2]+ "<h1/>");
document.write("<h1>"+ listaFilmes[3]+ "<h1/>");
document.write("<h1>"+ listaFilmes[4]+ "<h1/>");
document.write("<h1>"+ listaFilmes[5]+ "<h1/>"); */



//valor inicial; condição; incremento
for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<h1>"+ listaFilmes[indice]+ "<h1/>");
}