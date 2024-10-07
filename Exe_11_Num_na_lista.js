
function numeroNaLista(lista, numero) {
  return lista.includes(numero);
}

let lista = [8, 6, 3, 2, 5];
let numero = 5;


if (numeroNaLista(lista, numero) == true){
  console.log(`O número ${numero} está na lista.`);
} else {
  console.log(`O número ${numero} não está na lista.`);
}