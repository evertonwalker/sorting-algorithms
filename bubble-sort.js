const arrayToSort = [];

for(let i = 0; i < 100; i += 1) arrayToSort.push(parseInt(Math.random() * 100));

console.time('Time to sorting');

for(let i = 0; i < arrayToSort.length; i += 1) {
    for(let j = 0; j < arrayToSort.length - 1; j += 1) { 
            if(arrayToSort[i] > arrayToSort[j + 1]) {
                let aux = arrayToSort[j];
                arrayToSort[j] = arrayToSort[j + 1]
                arrayToSort[j + 1] = aux;
            }
    }

}

console.timeEnd('Time to sorting');

console.log(arrayToSort)

//O algoritmo de classificação mais simples é o de bolha. Ele funciona por iteração de uma matriz a ser ordenada a partir do primeiro elemento até o último, 
// comparando cada par de elementos e alterando suas posições, se necessário.
// Esse processo é repetido tantas vezes quanto for necessário, até que a matriz seja classificado.