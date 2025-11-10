
// sem parametro
function nomeDaFuncao() {
    return `Meu nome é:`; // Meu nome é:
}

// com parametro
function nomeDaFuncao(parametro) {
    return `Meu nome é: ${parametro}`; // Meu nome é: Fulano;    
}

// let nomeDaPessoa = 'Fulano';
// const variavelDaFuncao = function (parametro) {
//   return `Meu nome é: ${parametro}`; // Meu nome é: Fulano;    
// }

// console.log(variavelDaFuncao(nomeDaPessoa));


let nomeDaPessoa = 'Fulano';
const variavelDaFuncao = (parametro) => {
  return `Meu nome é: ${parametro}`; // Meu nome é: Fulano;    
}

console.log(variavelDaFuncao(nomeDaPessoa));