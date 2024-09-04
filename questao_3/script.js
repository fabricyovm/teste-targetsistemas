/* 
    3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
    • O menor valor de faturamento ocorrido em um dia do mês;
    • O maior valor de faturamento ocorrido em um dia do mês;
    • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

    IMPORTANTE:
    a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
    b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

// Elementos do HTML
const maiorValor = document.querySelector('#maior-valor');
const menorValor = document.querySelector('#menor-valor');
const dias = document.querySelector('#dias');

// Formata o valor para real
function formatarValor(valor) {
    const numero = Intl.NumberFormat('pt-BR', {
        style: 'currency', 
        currency: 'BRL'
    }).format(valor);
    
    return numero;
}

// Função que retorna os dias com valores acima da média mensal e retorna uma array com esses dias.
function verificarDias(faturamento, media) {    
    const array = faturamento.filter(item => item.valor > media).map(item => item.dia);
    const dias = array.length;

    return {
        totalDias: dias,
        arrayDias: array,
    }
}

// Retorna o menor valor
function getMenorValor(faturamento) {
    let menor = faturamento[0].valor;

    faturamento.map(item => {
        if(item.valor != 0 && item.valor < menor) {
            menor = item.valor;
        }
    });

    return menor;
}

// Retorna o Maior valor
function getMaiorValor(faturamento) {
    let maior = 0;

    faturamento.map(item => {
        if(item.valor > maior) {
            maior = item.valor;
        }
    });

    return maior;
}

// Retorna a media
function calcularMedia(faturamento) {
    let soma = 0;
    let media = 0;

    faturamento.map(item => {
        if(item.valor != 0) {
            soma += item.valor
        }
    });

    media = (soma / faturamento.length);
    
    return media;
}

// Pega os dados do JSON
async function getDados() {
    try {
        const response = await fetch('./data/dados.json');
        const informacao = await response.json();        

        return informacao;
        
    } catch (error) {
        console.error('Erro ao buscar dados: ', error)
    }
}

//  Função principal
async function execute() {
    const faturamento = await getDados();    
    let maior = getMaiorValor(faturamento);
    let menor = getMenorValor(faturamento);
    const media = calcularMedia(faturamento);
    const {totalDias, arrayDias} = verificarDias(faturamento, media);

    maior = formatarValor(maior);
    menor = formatarValor(menor);    
    
    maiorValor.textContent = `O maior valor de faturamento é: ${maior}`
    menorValor.textContent = `O menor valor de faturamento é: ${menor}`
    dias.textContent = `Os dias ${arrayDias.join(', ')} (${totalDias} dias) tiveram valores acima da média.`;

    console.log(`O maior valor de faturamento é: ${maior}`);
    console.log(`O menor valor de faturamento é: ${menor}`);
    console.log(`Os dias ${arrayDias.join(', ')} (${totalDias} dias) tiveram valores acima da média.`);    
}

execute();