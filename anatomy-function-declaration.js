// FORMAS DE CRIAR FUNCOES NO JAVASCRIPT

// Function Declaration (Funções Nomeadas)

// 1 - Declarar a funcao(cria) usando FUNCTION DECLARATION
// 2 - Invoca a funcao (ativa/chama)
// 3 - Paramentros de entrada
// 4 - Retorno da funcao


// Invoca a funcao usando o nome com os parenteses. Ex: sayHello()
// sayHello();
sayHello();

// funcao sem parametros
function sayHello() {
    console.log('Hello World!');
}

// 3 - funcao com parametros
function sayHelloTo(name) {
    console.log('Hello' + name);
}

sayHelloTo('Fulano'); // Hello Fulano

// 4 - Retorno da funcao

function returnMensage() {
    return 'Hello World!';
}

// posso armazenar o retorno da funcao em uma variavel
const mensageFromFunction = returnMensage();
console.log(mensageFromFunction); // Hello World!

const mensage = returnMensage();
console.log(mensage);

console.log(returnMensage());

function returnHiTo(name) {
    return `Hi ${name}`;
}

// outro exemplo de funcao ... dessa vez sem o return

function somar(numero1, numero2) {
    console.log(numero1 + numero2);
}

somar(2, 3); // 5

// outro exemplo de funcao ... dessa vez com o return
function somar(numero1, numero2) {
    return console.log(numero1 + numero2);
}

somar(2, 3); // 5

// escopo de uma funcao

const fatorial = function calcularFatorial(n) { // eu nao consigo chamar a funcao calcularFatorial fora da funcao fatorial
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calcularFatorial(n - 1); // Recursão usando o nome da função
    }
};

console.log(fatorial(5)); // 120

// eu nao consigo chamar a funcao calcularFatorial fora da funcao fatorial
// porque essa funcao so existe dentro da funcao fatorial
calcularFatorial(2) // calcularFatorial is not defined

