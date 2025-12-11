const pessoa = {
    nome: 'davi',
    idade: 20,

    falar (){
        console.log(this.nome);
    }
}
pessoa.falar() 

const filme= {
    nome: 'Homem aranha',
    gen: 'Ação',
    nota: 7,
    validarNota(){
        if (this.nota >=1 && this.nota <=10){
            console.log('Nota valida')
        } else {
 console.log('Nota invalida')
        }
    }
}
filme.validarNota()