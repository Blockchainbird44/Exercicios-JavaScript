let fatorial = (numero) => {
  
  if (numero < 0) return "Número inválido";
  if (numero === 0 || numero === 1) return 1;

  let resultado = 1;
  for (let i = 2; i <= numero; i++) {
      resultado *= i;
  }
  return resultado;
};

let numeroAleatorio = () => Math.floor(Math.random() * 20);
let numero = numeroAleatorio();
console.log(`O fatorial de ${numero} é: ${fatorial(numero)}`);