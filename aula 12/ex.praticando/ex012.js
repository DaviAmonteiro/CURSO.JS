var classificação =1;
switch (classificação) {
  case 0:
    console.log("Livre para todos os publicos");
    break;
  case 1:
    console.log("Não recomendado para menores de 10 anos");
    break;
  case 2:
    console.log("Não recomendado para menores de 14 anos");
    break;
    case 3:
        console.log('Não recomendado para menores de 18 anos')
        break
  default:
        console.log("classificação invalida!");

}

//0 → “Livre para todos os públicos”

//1 → “Não recomendado para menores de 10 anos”

//2 → “Não recomendado para menores de 14 anos”

//3 → “Não recomendado para menores de 18 anos”

//Qualquer outro valor → “Classificação inválida!”