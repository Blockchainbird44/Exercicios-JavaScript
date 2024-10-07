let fibonacci = (num) => {
	if (num <= 0) return "Insira um número válido.";
	if (num === 1) return [0];
	if (num === 2) return [0, 1];
	let fibonacci = [0, 1];

	for (let i = 2; i < num; i++) {
		fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
	}

	return fibonacci;
};

let num = 10;
console.log(`A sequência de Fibonacci para ${num} posições será: ${fibonacci(num)}`);