document.getElementById('salario').addEventListener('input', calcular);

function calcular() {
    // Obter o salário bruto
    const salarioBruto = parseFloat(document.getElementById('salario').value);
    // Obter o salário bruto

    // Manter valores zerados enquanto salario bruto está nulo
    if (isNaN(salarioBruto)) {
        document.getElementById('inss').textContent = 'R$ 0,00';
        document.getElementById('fgts').textContent = 'R$ 0,00';
        document.getElementById('liquido').textContent = 'R$ 0,00';
        return;
    }

    // Calcular o INSS com base nos valores de 2024, incluindo as parcelas a deduzir
    let inss;
    if (salarioBruto <= 1412.00) {
        inss = salarioBruto * 0.075;
    } else if (salarioBruto <= 2666.68) {
        inss = (salarioBruto * 0.09) - 21.18;
    } else if (salarioBruto <= 4000.03) {
        inss = (salarioBruto * 0.12) - 101.18;
    } else if (salarioBruto <= 7786.02) {
        inss = (salarioBruto * 0.14) - 181.18;
    } else {
        inss = 7786.02 * 0.14 - 181.18;
    }

    // Calcular o FGTS (8% do salário bruto)
    const fgts = salarioBruto * 0.08;

    // Calcular o salário líquido
    const salarioLiquido = salarioBruto - inss;

    // Atualizar os valores na tela
    document.getElementById('inss').textContent = formatarMoeda(inss);
    document.getElementById('fgts').textContent = formatarMoeda(fgts);
    document.getElementById('liquido').textContent = formatarMoeda(salarioLiquido);
}

// Corrigi a formatação dos valores apresentados na tela
function formatarMoeda(valor) {
    return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}
