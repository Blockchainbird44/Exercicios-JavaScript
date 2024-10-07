function contacaractere(texto, caractere) {
    let contador = 0;
    for (let letra of texto) {
      if (letra === caractere) contador++;
    }
    return contador;
  }
  
  let letra = contacaractere("Pindamonhangaba", "n")

  console.log(`A quantidade do caracter destacado na palavra informada é: ${letra}.`);