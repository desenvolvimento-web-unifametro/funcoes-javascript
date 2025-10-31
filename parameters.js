// parameters

// function myParameters(a, b, c) {
//     console.log(a + b + c);

//     // return a + b + c;

//     // return console.log(a + b + c);
// }

// // myParameters(1, 2);

// let varMyParameters = myParameters(3, 4, 5);

// console.log(varMyParameters); // undefined

// menos parametos do que o declarado na funcao

// function myParameters(a, b, c) {
//     console.log(a, b, c);
// }
// myParameters(2, 3); // 2 3 undefined

// // definir um valor padrao
//  function myDefaultParameters(a, b, c = 0) {
//     console.log(a, b, c);
// };

// myDefaultParameters(2, 3); // 2 3 0 


// valor padrao foi sobreescrito

// function myDefaultParameters(a = 1, b = 3, c = 5) {
//     console.log(a, b, c);
// };

// myDefaultParameters(6, 7, 8); // qual valor vai ser impresso? 6, 7, 8

function exibirNumeros (nums) {

    // For tradicional (com índice)
    // for (let i = 0; i < nums.length; i++) {
    //     console.log(nums[i]);
    // }

    // For...of (sem índice)
    for (let num of nums) { // num e inicializada recebendo cada valor de nums
        console.log(num);
    }
}

// exibirNumeros([1, 2, 3, 4, 5]);

exibirNumeros(1); // da erro pois nao esta sendo definido como um array
exibirNumeros([1]);



function exibirNumeros (nums) {
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]);
    }
}

exibirNumeros(1); // da erro pois nao esta sendo definido como um array
exibirNumeros([1]);

// spread operator

function exibirNumeros (...nums) {
    console.log(Array.isArray(nums)); // true (verifica se nums e um array) 

    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]);
    }
}

exibirNumeros(1); // agora da certo pois foi usado o spread operator

// spread operator dispensa o uso tambem da iteracao, no caso que nao precisa manipular apenas exibir
function exibirNumeros (...nums) {
    return nums;
}

exibirNumeros(1, 3, 4, 5, 6, 7); // 1, 3, 4, 5, 6, 7

let numeros = exibirNumeros(1, 3, 4, 5, 6, 7);
console.log(numeros); // consigo exibir, porem manipular ja e outra historia


// somar todos os valores que forem passados pelo usuario

function sumAll (...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(sumAll(1, 2, 3)); // 6
