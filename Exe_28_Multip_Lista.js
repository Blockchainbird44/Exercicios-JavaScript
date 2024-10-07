let num_randomicos = ()  => Math.floor(Math.random() * 10);
let numeros = Array.from({ length: 6 }, num_randomicos);

const multiplica_itens_lista = (lista) => {
  let resultado = 1;

  for (let i = 0; i < lista.length; i++) {
    resultado *= lista[i];
  }

  return resultado;
};

let resultado = multiplica_itens_lista(numeros);
console.log(`Os números da lista são: ${numeros}, e produto destes itens é ${resultado}.`);
