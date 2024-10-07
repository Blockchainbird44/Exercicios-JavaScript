let frase = "Hezbollah e Hamas atacam Israel, que bombardeia Gaza e Beirute";

let substituir_vogais = (texto) => {
  return texto.replace(/[aeiouáéíóúãâêîôûàèìòù]/gi, '*');
};

const nova_frase = substituir_vogais(frase);
console.log(`A nova frase, reescrita, será: ${nova_frase}.`);