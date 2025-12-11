const filme = {
  titulo: "De repente 30",
  ano: 2003,
  gen: "comedia",
  nota: 24,
  validarNota() {
    if (this.nota >= 1 && this.nota <= 10) {
      console.log("nota valida!");
    } else {
      console.log("nota invalida!");
    }
  },
};
console.log(
  `o nome do filme é ${filme.titulo}, o genero do filme é ${filme.gen}, e a nota do filme foi avaliada com ${filme.nota} pontos. `
);
filme.validarNota();

//const filmes =['se beber não case', 'homem aranha', 'venom']

//console. log(filme.titulo, filme.gen, filme.nota)

//console.log(filmes[2])
