function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var gen = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      gen = "Homem";
      if (idade >= 0 && idade <= 12) {
        img.setAttribute("src", "crianca-m.jpg");
      } else if (idade <= 17) {
        img.setAttribute("src", "adolescente-m.jpg");
      } else if (idade < 50) {
        img.setAttribute("src", "adulto-m.jpg");
      } else {
        img.setAttribute("src", "idoso-m.jpg");
      }
    } else if (fsex[1].checked) {
      gen = "Mulher";
      if (idade >= 0 && idade <= 12) {
        img.setAttribute("src", "crianca-f.jpg");
      } else if (idade <= 17) {
        img.setAttribute("src", "adolescente-f.jpg");
      } else if (idade < 60) {
        img.setAttribute("src", "adulta-f.jpg");
      } else {
        img.setAttribute("src", "senhora-f.jpg");
      }
    }

    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${gen} com ${idade} anos.`;
    console.log("Imagem antes de append:", img);
    res.appendChild(img);
  }
} // <-- fecha a função
