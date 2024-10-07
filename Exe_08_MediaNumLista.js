
let numero = () => Math.floor(Math.random() * 100);

let numlista = [];

for (let i = 0; i < 10 ; i++) {
	numlista.push(numero());
	console.log(numlista)
}

let soma = 0;
for (let i = 0; i < numlista.length; i++) {
	soma += numlista[i];
}

console.log(`A soma e a média dos números respectivos são: ${soma} e ${soma / numlista.length}`);