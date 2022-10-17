



const precoEtiqueta = 100;
const formaDePagamento = 4;

if(formaDePagamento === 1){
 console.log(precoEtiqueta - precoEtiqueta * 0.1);
}
else if (formaDePagamento === 2){
    console.log(precoEtiqueta - precoEtiqueta * 0.15)
}
else if (formaDePagamento === 3){
    console.log(precoEtiqueta);
}
else {
     console.log(precoEtiqueta + precoEtiqueta * 0.1);
}

let nomeDoAluno = 'Renan Johannsen de Paula';
console.log(nomeDoAluno);

nomeDoAluno = 'Vitor Johansen Guerra';
console.log(nomeDoAluno);

const numero = 5;

    if (numero % 2 === 0) {
        console.log('Número par');
    } else {
        console.log('Número ímpar');
    }


    const numero = 10;
    
    if (numero >= 10) {
        console.log('Sucesso demais!');
    }