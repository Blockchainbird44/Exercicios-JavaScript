
let string = "Estação de esqui nos Alpes franceses é desativada devido à mudança climática";
let substring = "desativada";

let verifica_substring = (string,substring) => {
        return string.includes(substring);
}

const resultado = verifica_substring(string,substring);
console.log(`A frase indicada contém a substring "${substring}": ${resultado}`);