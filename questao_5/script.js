/* 
    5) Escreva um programa que inverta os caracteres de um string.

    IMPORTANTE:
    a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
    b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function inverterString(string) {
    let str = string.split(''); // Separa os caracteres da string;
    let arrayInvertido = [];

    for(let i = str.length - 1; i >=0; i--) {
        arrayInvertido.push(str[i]);
    }

    arrayInvertido = arrayInvertido.join('');

    return arrayInvertido;
}

const stringInvertida = inverterString("Javascript!");

console.log(stringInvertida);




