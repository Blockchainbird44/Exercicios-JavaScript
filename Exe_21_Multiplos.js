let num_randomico = () => Math.floor(Math.random() * 10);

let primeironumero = num_randomico();
let segundonumero = num_randomico();

let Multiplo = (primeironumero, segundonumero) => {
	return primeironumero % segundonumero === 0;
}

console.log(`Os números ${primeironumero} e ${segundonumero} ${Multiplo(primeironumero, segundonumero) ? "são múltiplos." : "não são múltiplos."}`);