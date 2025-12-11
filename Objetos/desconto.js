
const lista = [
  {
    nome: "camaro",
    preco: 119000* 0.1,
    novoPreco: 119000 - 119000 * 0.1,
    estoque: true,

    MostrarPrecoComDesconto() {
      if (this.estoque === true) {
        console.log(
          `o preço do ${this.nome} com desconto aplicado é ${this.novoPreco}k `
        );
      }
    },
  },

  {
    nome: "ferrari",
    preco: 300000,
    novoPreco: 300000 - 300.0 * 0.1,
    estoque: true,

    MostrarPrecoComDesconto() {
      if (this.estoque === true) {
        console.log(
          `o preço do ${this.nome} com desconto aplicado é ${this.novoPreco}k `
        );
      }
    },
  },
  {
    nome: "porshe",
    preco: 500000,
    novoPreco: 500000 - 500000 * 0.1,
    estoque: true,

    MostrarPrecoComDesconto() {
      if (this.estoque === true) {
        console.log(
          `o preço do carro ${this.nome} com desconto aplicado é ${this.novoPreco}k`
        );
      }
    },
  },
];

for (listado of lista) {
  listado.MostrarPrecoComDesconto();
}
