let vogais = ["a", "e", "i", "o", "u"];

let string = "Educação transforma";

let contador = 0;

for (let i = 0; i < string.length; i++) {
	if (vogais.includes(string[i])) {
		contador++;
	}
}
console.log(`O número de vogais na frase "${string}" é: ${contador}`);