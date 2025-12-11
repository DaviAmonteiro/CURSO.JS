function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("manha");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `agora são ${hora} horas`;

  if (hora >= 0 && hora < 12) {
    //Bom dia!
    img.src = "manhapng.jpg";
    document.body.style.background = '#d2d87fff'  
  } else if (hora >= 12 && hora < 18) {
    //Boa tarde!
    img.src = "tardepng.jpg";
    document.body.style.background= 'rgb(241, 163, 99)'
  } 
  else{
  img.src= "noitepng.jpg"
  document.body.style.background='rgb(2, 2, 88)'
  
  }
}
