const aluno = {
    nome: 'mika',
    idade: 19,
    media: 6,
    verificarAprovacao(){
        if (this.media>=7){
            console.log("aprovada")
        } else {
            console.log("reprovado")
        }

    } 
}
aluno.verificarAprovacao()