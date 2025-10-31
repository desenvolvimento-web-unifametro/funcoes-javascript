// create a range function

// range(5) -> [0, 1, 2, 3, 4]
// range(6, 11) -> [6, 7, 8, 9, 10, 11]
// range(10, 19, 2) -> [10, 12, 14, 16, 18]
// range(6, 2) -> [6, 5, 4, 3, 2]
// range(8, -3, 4) -> [8, 4, 0]

// objetivos - trabalhar com diferentes tipos de parametros

// function range1to5(...numbers) {
//     for (let num of numbers) {
//         console.log(num);
//         // return num; // quando coloco o return aqui so retorna o primeiro
//     }
// }

// console.log(range1to5(1, 2, 3, 4, 5));


// function range1to5(...numbers) {
//     let result = []; // array vazio que vai receber os numeros dos parametros
//     for (let num of numbers) {
//         result.push(num); // push - acrescenta um item na ultima posicao do array
//     }
//     return result;
// }

// console.log(range1to5(1, 2, 3, 4, 5));



// range(5) -> [0, 1, 2, 3, 4]

// para cada quantidade de parametros vai ser feito algo diferente

// no caso de 1 parametro
// fazer ...

function quantityOfParameters (...parameters) { 
    let numbers = parameters;

    if (parameters.length === 1) { 
        // no caso de 1 parametro
        // axibir ate aquele numero 

        return numbers;
    } else if (parameters.length === 2 && parameters[0] < parameters[1]) { 
        // no caso de 2 parametros, e o primeiro for menor que o segundo  
        // exibir em ordem crescente

        let exibition = []; // vai ser usado para armazenar os numeros 

        for (let i = parameters[0]; i <= parameters[1]; i++) {     
            exibition.push(i); // a cada iteracao vai acrescentar + 1 (i++)
        }

        return exibition; // retornar o array completo apos finalizar a iteracao

    } else if (parameters.length === 2 && parameters[0] > parameters[1]) { 
        // no caso de 2 parametros, e o primeiro for maior que o segundo  
        // exibir em ordem decrescente

        // return numbers;

        let exibition = []; // vai ser usado para armazenar os numeros 

        for (let i = parameters[0]; i >= parameters[1]; i--) {     
            exibition.push(i); // a cada iteracao vai diminuir -1 (i--)
        }

        return exibition; // retornar o array completo apos finalizar a iteracao
        
    } else if (parameters.length === 3) {
        // no caso de 3 parametros
        
        // pegar o primeiro como inicio
        // pegar o segundo como fim, porem o ultimo item tem que ser menor que esse parametro
        // pega o ultimo parametro e usa para incrementar de acordo com o valor que foi passado
    } 
    
    // else if (){
        
    // }

    return "nao tem nenhuma opcao para a quantidade de parametros que voce colocou";
}

console.log(quantityOfParameters(10, 5));

