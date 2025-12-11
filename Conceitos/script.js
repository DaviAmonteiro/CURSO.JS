//object
const atividade = {
  nome: "almoço",
  data: new Date("2025-11-30 12:00"),
  finalizada: false,
};
//lista, vetor, arrays
const atividades = [
    atividade, 
    {
        nome: 'Academia em grupo',
        data: new Date("2025-12-01 12:00"),
        finalizada: false 
    }, 
     {
        nome: 'Gaming Session',
        data: new Date("2025-12-01 18:00"),
        finalizada: true
    }, 
]

const criarItemDeAtividade = (atividade) => {

    let input= ' <input type="checkbox" '
 if (atividade.finalizada){
    input= input + 'checked'
 }

    input+=  '>' 

  return `
   <div>
           ${input}
            <span>${atividade.nome}</span>
            <time>${atividade.data}</time>
        </div>
  `;
}; //arrow function



const section = document.querySelector("section");
for (let atividade of atividades){
    section.innerHTML += criarItemDeAtividade(atividade)
}


