const fatMensal = [
    {
        estado: "SP",
        valor: 67836.43
    },
    {
        estado: "RJ",
        valor: 36678.66
    },
    {
        estado: "MG",
        valor: 29229.88
    },
    {
        estado: "ES",
        valor: 27165.48
    },
    {
        estado: "Outros",
        valor: 19849.53
    }
];

function calcularPercentual(total, item) {
    const percentual = (item.valor * 100) / total;

    return percentual.toFixed(2);
}

function somaValores() {
    let soma = 0;

    fatMensal.forEach(item => {
        soma += item.valor;
    });

    return soma;
}

function execute() {
    const total = somaValores();
    
    fatMensal.forEach((item) => {
        const percentual = calcularPercentual(total, item);
        console.log(`Estado: ${item.estado}\nPercentual: ${percentual}%\n\n`);
    });  
    console.log(total);  
}

execute();