let random_lista = () => Math.floor(Math.random() * 100);

const listaNumeros = Array.from({ length: 5 }, random_lista);
console.log(`A lista com números randômicos será: ${listaNumeros}`);

listaNumeros.sort((a, b) => a - b);
console.log(`Ordenando a lista temos: ${listaNumeros}`);