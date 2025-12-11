var agora= new Date()
var horas= agora.getHours()
var minuto= agora.getMinutes()

console.log(`agora sao exatamente ${horas} horas e ${minuto} minutos`)

if (horas>=5 && horas<12){
    console.log('bom dia!')
}
 else if (horas >=12 && horas<=18){
    console.log('Boa tarde')
 }
 else if(horas>18 && horas <=23){
        console.log('boa noite!')
 }
  else{
    console.log('Boa madrugada')
  }