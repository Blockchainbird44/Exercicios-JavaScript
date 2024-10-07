function somaDigitos(num){ 
    let soma = 0; 
    let digitos = num.toString(); 
    for(let i = 0; i < digitos.length; i++){ 
        soma += parseInt(digitos[i]); 
    }
    return soma;
}

let somando = somaDigitos(135)
console.log(`A soma dos dígitos do número informado é: ${somando}.`); 