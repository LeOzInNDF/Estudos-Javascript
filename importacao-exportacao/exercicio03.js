// 3) Faça um programa que calcule e imprima o salário salário a ser transferido para um funcionário.
// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
// O salário salário a ser transferido é calculado da seguinte maneira: 

//    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

// Para calcular o percentual de imposto segue as aliquotas:

//     De R$ 0.00 a R$ 1100.00 = 5.00%
//     De R$ 1100.01 a R$ 2500.00 = 10.00%
//     Maior que R$ 2500.00 = 15.00%

//     Exemplo:
//         Entrada:
//             2000
//             250

//         Saída:
//             2050.00

const { gets, print } = require('./funcoes-auxiliaresex03');

const salarioBruto = gets();
const valorBeneficios = gets();

function calcularPorcentagem(valor, percentual) {
  return valor * (percentual / 100.00);
}

function pegarAliquota(salario) {
  if (salario >= 0.00 && salario <= 1100.00) {
    return 5.00;
  }
  else if (salario >= 1100.01 && salario <= 2500.00) {
    return 10.00;
  }
  else {
    return 15.00;
  }
}
const alicotaImposto = pegarAliquota(salarioBruto);
const valorImposto = calcularPorcentagem(salarioBruto, alicotaImposto);
const valorATranferir = salarioBruto - valorImposto + valorBeneficios;

print(valorATranferir +'.00');
