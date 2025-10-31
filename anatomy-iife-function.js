// IIFE - Imediately Invoked Function Expression

// Sao funções que são executadas logo após serem definidas.

// sem parametro é mais comum de ver em funcoes anonimas
(function () {
    let name = "Fulano"
    console.log(name) ;
})();

// com parametros - menos comum
(function (a, b, c) {
    console.log(a + b + c) 
})(1, 2, 3); // sem ponto e virgula vai dar erro, pq tem outra funcao em seguida

(function (d, e, f) {
    console.log(d + e + f)
})(4, 5, 6);


//  IIFE - Imediately Invoked Function Expression com Arrow Function

(() => {
    console.log("IFFE com Arrow Function");
})();

// versao reduzida
(() => console.log("IFFE com Arrow Function"))();