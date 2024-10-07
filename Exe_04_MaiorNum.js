let primeiroNumero = Math.floor(Math.random() * 100);
let segundoNumero = Math.floor(Math.random() * 100);

let maiorNumero = (primeiroNumero, segundoNumero) => primeiroNumero > segundoNumero ? primeiroNumero : segundoNumero;

console.log(`O maior número entre ${primeiroNumero} e ${segundoNumero} é: ${maiorNumero(primeiroNumero, segundoNumero)}`);