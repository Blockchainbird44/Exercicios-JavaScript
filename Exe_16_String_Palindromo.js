function palindromo(frase){
    frase = frase.replace(/\s/g,'').toUpperCase();
    if(frase === frase.split('').reverse().join('').toUpperCase()){
        return console.log(`A frase '${frase}' é um palíndromo!`);
    } else {
        return console.log(`A frase '${frase}' NÃO é um palíndromo!`);
    }
}

palindromo('A torre da derrota');