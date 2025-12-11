//window.alert('Seja bem vindo!')

function carregar() {
  var msg = window.document.getElementById("container");
  var data = new Date();
  var hora = data.getHours();
  msg.innerText = `agora são ${hora} horas`;

  if (hora >= 0 && hora < 12) {
 comprimentar.innerText= 'bom dia'
  } else if (hora >= 12 && hora < 19) {
comprimentar.innerText='boa tarde'
  } else {
comprimentar.innerText= 'boa noite'
  }
}
