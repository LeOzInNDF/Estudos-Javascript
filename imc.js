/*
Formula imc = peso / (altura * altura)

Condições:
Abaixo de 18.5 Abaixo do peso;
Entre 18.5 e 25 peso normal;
Entre 25 e 30 Acima do peso;
Entre 30 e 40 Obeso;
Acima de 40 Obseidade Grave;
*/

const peso = 125;
const altura = 1.75;
const imc = peso / Math.pow(altura, 2);
console.log(imc);

if(imc < 18.5){
console.log('Abaixo do Peso');
}
else if (imc >=18.5 && imc < 25){
    console.log('Peso normal');
}
else if (imc >=25 && imc < 30){
    console.log('Acima do peso');
}
else if (imc >=30 && imc < 40){
    console.log('Obeso');
}
else {
    console.log('Obsidade Grave')
}