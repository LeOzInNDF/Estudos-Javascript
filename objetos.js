/*
1 - Crie uma classe para representar carros.
Os  carros possuem uma marca, uma cor e um gasto médio de combustivel por kilômetro rodado.
Crie um método que dado a quantidade de quilómetors e o preço do combustivel nos dê o valor gasto em reais para realizar este percurso.
*/


  class Carro {
          marca;
          cor;
          gastomedio;

  constructor (marca ,cor, gastomedio){
    this.marca = marca;
    this.cor = cor;
    this.gastomedio = gastomedio;

  }   
      calcularGastoDePercuso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastomedio * precoCombustivel;
      }    
  }

  const uno = new Carro('Fiat ', 'Prata ', 1 / 12);
  const palio = new Carro('Fiat', 'Preto', 1 / 10);

  
  console.log(uno.calcularGastoDePercuso(70, 5));

  console.log(palio.calcularGastoDePercuso(70, 5))