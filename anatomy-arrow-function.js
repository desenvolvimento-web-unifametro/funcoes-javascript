// FORMAS DE CRIAR FUNCOES NO JAVASCRIPT

// arrow function

// function expression
const increment = function (number) {
    return number + 1;
}

// para transformar a function expression acima em uma arrow function
// retira a palavra function e acrescenta = e =>
const incrementArrow = (number) => {
    return number + 1;
}


// sem os colchetes que definem o corpo da funcao

const incrementArrowSmaller = (number) => number + 1; // return fica implicito. Se tentar colocar vai da erro

// sem parenteses
const incrementArrowSmaller2 = number => number + 1; // return fica implicito. Se tentar colocar vai da erro

// para funcoes com mains de um parametro

const soma = (numberA, numberB) => numberA + numberB; // precisa coloca os parentes nas variaveis
