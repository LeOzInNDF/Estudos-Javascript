function escrevaMeuNome(nome){
  return 'Meu nome é ' + nome;
}


function verificarIdade(idade){
  if (idade >= 18){
    console.log(escrevaMeuNome('Leonardo ') + 'Maior de idade');
  }
  else {
      console.log('Menor de idade')
    }
  }

  

  verificarIdade(18);