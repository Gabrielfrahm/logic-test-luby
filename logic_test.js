//1 Implemente um método que crie um novo array baseado nos valores passados
function newArray(qtd,value){
    return Array(qtd).fill(value);
}

console.log(newArray(3,"a"))

//2 Implemente um método que inverta um array, não utilize métodos nativos do array
function arrayReverse(array){
    const arr = [];
    for( let  i = array.length - 1; i >= 0 ; i--){
        arr.push(array[i]);
        //console.log(i);
    }
    return arr;
}

console.log(arrayReverse([1,2,3,4]));

//3 Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).

function clearArray(array){
    const newArr = array.filter( item => item >= 1);
    return newArr;
}

console.log(clearArray(([1,2,'', undefined])));

//4 Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor

function arrayForObject(array){
    const newArr = Object.fromEntries(array);

    return newArr;
}

console.log(arrayForObject([["c",2],["d",4]]));

//5 Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada
function clearParams(array, param1, param2){
    // vai retorna apenas se os item do array for diferente dos parâmetros
    return array.filter((item) => item !== param1 && item !== param2);
}

console.log(clearParams([5,4,3,2,5], 5,3))

// 6 Implemente um método que retorne um array, sem valores duplicados

function arrayNoRepeated(array){
  return [...new Set(array)];
}

console.log(arrayNoRepeated([1,2,3,3,2,4,5,4,7,3]));

// 7 Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano

function compareArray(array,array2) {
    if(array.length !== array2.length){
        return false;
    }

    for(let i = 0; i < array.length ; i++){
        if(array[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}

console.log(compareArray([1,2,3,4],[1,2,3,4]));

// 8 Implemente um método que remova os aninhamentos de um array de arrays para um array unico

function uniqArray(array){
    // posso retorna um array no reduce
    return array.reduce((acc, curr) => {
        return acc.concat(curr);
    }, []);

}

console.log(uniqArray([1, 2, [3], [4, 5]]));

// 9 Implemente um método divida um array por uma quantidade passada por parâmetro

function divideArray(array, qtd){
    const newArr = [];
    while(array.length !== 0){
        newArr.push(array.splice(0, qtd));
    }

    return newArr;
}

console.log(divideArray([1, 2, 3, 4, 5], 2))

// 10 Implemente um método que encontre os valores comuns entre dois arrays

function findCommonArray(array, array2){
    return array.filter(item => array2.includes(item));
}

console.log(findCommonArray([6, 8], [8, 9]));