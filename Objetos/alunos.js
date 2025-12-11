const alunos = [
  {
    nome: "davi",
    idade: 20,
    media: 6,

    verificarAprovacao() {
      if (this.media >= 7) {
        console.log(`${this.nome}: APROVADO`);
      } else {
        console.log(`${this.nome}: REPROVADO`);
      }
    }
  },
  {
    nome: "jose",
    idade: 18,
    media: 8,

    verificarAprovacao() {
      if (this.media >= 7) {
        console.log(`${this.nome}: APROVADO`);
      } else {
        console.log(`${this.nome}: REPROVADO`);
      }
    }
},
    { 

    nome: "henrique",
    idade: 21,
    media: 4,

    verificarAprovacao() {
      if (this.media >= 7) {
        console.log(`${this.nome}: APROVADO`);
      } else {
        console.log(`${this.nome}: REPROVADO`);
      }
    }
  },
];
for (let aluno of alunos ) {
  aluno.verificarAprovacao();
}
