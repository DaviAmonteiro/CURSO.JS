function contar(){
    let inicio= document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo= document.getElementById('txtp')
    let res= document.getElementById('res')

   if (inicio.value.length==0 || fim.value.length==0 || passo.value.length==0){
    window.alert('[ERRO]- digite um numero valido')
   }
   else {
    var i= Number(inicio.value)
    var f= Number(fim.value)
    var p= Number(passo.value)
   }

   if (p<=0){
   window.alert('[ERRO]- considerando passo 1!')
   p= 1
   }

 if (i<f){
    for (let c= i; c<=f; c+=p){
res.innerHTML+= `${c} 👉`
   }
 }

   else {
    for (let c= i; c>=f; c-=p){
    res.innerHTML+= `${c} 👉`
   }
   }

}

