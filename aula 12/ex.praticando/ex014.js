var cod= 200
var pagamento= "pix"
var produto= ''
var valor= 0



 


switch(cod){
    case 100:
       produto= 'cachorro quente'
       valor= 8
        break
    case 200:
       produto= 'x-salada'
       valor= 12
        break
    case 300:
      produto= 'refrigerante'
      valor= 5
        break
     default:
        console.log('Codigo invalido')
}




if(pagamento=== 'dinheiro' || pagamento === 'pix'){
 console.log('voce recebeu 10% de desconto')
}
 else if(pagamento==='cartao'){
    console.log('voce nao tem desconto a receber!')
 }
 else {
    console.log('Forma de pagamento invalida!')
 }

 console.log(`seu pedido foi um ${produto} e o valor final é R$ ${valor.toFixed(2)}`)



