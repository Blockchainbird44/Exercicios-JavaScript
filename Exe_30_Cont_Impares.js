function cont_impares(lista) {
    return lista.filter((numero) => numero % 2 !== 0).length;
  }
  
  let tot_cont_impares = cont_impares([5, 8, 4, 3, 9, 7, 10, 15, 17, 23, 85])
  console.log(`O total de números impares da lista é: ${tot_cont_impares}.`);