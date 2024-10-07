let num_random = ()  => Math.floor(Math.random() * 10 + 1);
let lista = Array.from({ length: 5 }, num_random);

let ordem_crescente = (lista) => {
	for (let i = 0; i < lista.length - 1; i++) {
		if (lista[i] > lista[i + 1]) {
			return false;
		}
	}
    return true;
};

console.log(`A lista de números é: ${lista}`);
console.log(ordem_crescente(lista));