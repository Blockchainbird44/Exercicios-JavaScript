let numeroAleatorio = () => Math.floor(Math.random() * 100);
let numero = numeroAleatorio();

let Primo = (numero) => {
	for (let i = 2; i < numero; i++) {
		if (numero % i === 0) {
			return false;
		}
	}
	return true;
};

console.log(`O número ${numero} ${Primo(numero) ? "é primo!" : "não é primo!"}`);