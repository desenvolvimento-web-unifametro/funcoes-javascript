// importancia do retorno da funcao

function mostrarOndeVaiParar() {
  return "Só vou ler até aqui"; // A função vai parar AQUI
  
  // Este código vai ser ignorado
  console.log("Este código nunca vai rodar."); 
}


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
function somarSemReturn(numero1, numero2) {
    console.log(numero1 + numero2);
}

// vamos tentar armazenar o retorno da funcao em uma variavel
const retornoDaFuncao = somarSemReturn(2, 3); // saida: undefined

somarSemReturn(2, 3); // saida: 5
function somarComReturn(numero1, numero2) {
    return console.log(numero1 + numero2);
}

somarComReturn(2, 3); // saida:5

