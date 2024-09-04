/* 
    2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

// Função que testa se o número é Fibonacci
function testarValor(numero) { 
    let a = 0;
    let b = 1;
    let res = 0;  

    while(res <= numero) {
        if(res === numero) {
            return true;
        }

        res = a + b;
        a = b;
        b = res;   
    }

    return false;
}

const numeroEscolhido = 10; // Valor escolhido pelo usuário
const resultado = testarValor(numeroEscolhido);

// Resultado do teste
if(resultado === true) {
    console.log(`O número "${numeroEscolhido}" PERTENCE à sequência de Fibonacci!`);
}
else {
    console.log(`O número "${numeroEscolhido}" NÃO PERTENCE à sequência de Fibonacci!`);
}