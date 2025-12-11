const produtos = [
  {
    nome: "mouse",
    preco: 150,
    estoque: true,
    vendido: false,

    status() {
      if (this.estoque === true && this.vendido === false) {
        console.log(
          `o ${this.nome} está disponivel para venda, preço de ${this.preco}`
        );
      } else if (this.estoque === true && this.vendido === true) {
        console.log(`${this.nome} foi vendido`);
      } else {
        console.log(`o produto ${this.nome} está indisponivel`);
      }
    },
  },

  {
    nome: "teclado",
    preco: 300,
    estoque: false,
    vendido: true,
    status() {
          if (this.estoque === true && this.vendido === false) {
        console.log(
          `o ${this.nome} está disponivel para venda, preço de ${this.preco}`
        );
      } else if (this.estoque === true && this.vendido === true) {
        console.log(`${this.nome} foi vendido`);
      } else {
        console.log(`o produto ${this.nome} está indisponivel`);
      }
    },
  },

  {
    nome: "mousepad",
    preco: 100,
    estoque: true,
    vendido: false,
    status() {
          if (this.estoque === true && this.vendido === false) {
        console.log(
          `o ${this.nome} está disponivel para venda, preço de ${this.preco}`
        );
      } else if (this.estoque === true && this.vendido === true) {
        console.log(`${this.nome} foi vendido`);
      } else {
        console.log(`o produto ${this.nome} está indisponivel`);
      }
    },
  },
];

for(perifericos of produtos){
    perifericos.status()
}
