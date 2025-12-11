function calcularIMC() {
  var peso = window.document.getElementById("txtpeso");
  var altura = window.document.getElementById("txtaltura");
  var res = window.document.getElementById("res");
  var p = Number(peso.value);
  var a = Number(altura.value);
 if (a>10){
    a=a/100  
 }
var img= window.document.createElement('img')
img.setAttribute('id', 'foto')

  if (p <=0|| a <=0) {
    window.alert('Preencha os campos corretamente!')
  }
  var calculo = p / (a ** 2);
  res.innerHTML= `<strong>Seu peso corporal é ${calculo.toFixed(2)}</strong>`

if (calculo<18.5){
    //magro
    img.setAttribute('src', 'magro.jpg')
}
else if(calculo>=18.5 && calculo <= 24.9){
    //peso normal
    img.setAttribute('src', 'coracao.jpg')
    res.innerHTML+= '<br>Continue se cuidando!'
}
else if(calculo >24.9 && calculo <=29.9 ) {
    //sobrepeso
    img.setAttribute('src', 'sobrepeso.jpg')
}
else {
    //obeso
    img.setAttribute('src', 'obeso.jpg')
}
res.appendChild(img)
}


/*O cálculo do IMC é feito dividindo o peso (em quilogramas) pela altura*/
