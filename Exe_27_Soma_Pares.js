function retornapareslista(numeros){
    let soma = 0;
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            soma += numeros[i];
        }
        
    }
    return soma;
}

let soma_pares_lista = retornapareslista([1,6,3,2,7,15,22,36,45,47]);
console.log(`A soma dos números pares da lista informada é ${soma_pares_lista}.`);