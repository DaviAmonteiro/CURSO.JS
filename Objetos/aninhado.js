const user = {
  name: "davi",
  age: 20,
  adress: {
    street: "av lasar segall",
    num: 380,
    city: "praia grande",
    state: "SP",
  },

  compras: [
    {
      nome: "camisa",
      valor: 60,
      entregue: true,
    },

    {
      nome: "calça",
      valor: 100,
      entregue: true,
    },
  ],

  mostrarEndereco() {
    console.log(
      `${this.name} mora na rua ${this.adress.street}, numero ${this.adress.num}, cidade ${this.adress.city}- ${this.adress.state}`
    );
  },

  listarCompras() {
    for (compra of this.compras) {
      if (compra.entregue === true) {
        console.log(`${compra.nome} foi entregue`);
      } else {
        console.log(`${compra.nome} não foi entregue`);
      }
    }
  },
};

user.mostrarEndereco();
user.listarCompras();
