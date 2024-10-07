function retornaDivisores(numero){
    let divisores = [];
    let i = 1;
    while(i <= numero){
        if(numero % i === 0){
            divisores.push(i);
        }
        i++;
    }
    return divisores;
}
let result_divisores = retornaDivisores(54)
console.log(`Os divisores do número informado são: ${result_divisores}.`);