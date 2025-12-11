const lista = [
  {
    nome: "boné",
    preco: 24.99,
    estoque: true,

    verificarEstoque(){
        if(this.estoque=== true){
            console.log(`${this.nome } em estoque!`)
        } else {
         console.log(`${this.nome} fora de estoque`)
        }
    }
  },
  {
    nome: "calça",
    preco: 99.99,
    estoque: false,
      verificarEstoque(){
        if(this.estoque=== true){
           console.log(`${this.nome } em estoque!`)
        } else {
            console.log(`${this.nome} fora de estoque`)
        }
    }
  },
  {
    nome: "camisa",
    preco: 59.99,
    estoque: true,
      verificarEstoque(){
        if(this.estoque=== true){
            console.log(`${this.nome } em estoque!`)
        } else {
             console.log(`${this.nome} fora de estoque`)
        }
    }
  },
];
for(produto of lista){
    produto.verificarEstoque()
}
