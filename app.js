 
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1

function exibirTexto (tag,texto){
    let campo =  document.querySelector (tag);  
    campo.innerHTML = texto;
    responsiveVoice.speak (texto,'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirMensagemIinicial (){
exibirTexto ('h1', 'Jogo do número secreto');
exibirTexto ('p' , 'Escolha um número entre 1 e 10');
}

exibirMensagemIinicial ()


function verificarChute (){
    let chute = document.querySelector ('input').value;
    
    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTexto('p', mensagemTentativas);
        document.getElementById ('reiniciar').removeAttribute ('disabled');

    } else {
     if (chute > numeroSecreto) {
        exibirTexto ('h1', 'Que pena :( você errou o número');
        exibirTexto('p', 'O número secreto é menor');
        limparCampo();
    } else {
        exibirTexto ('h1', 'Que pena :( você errou o número');
        exibirTexto('p', 'O número secreto é maior');
        limparCampo();
    }

    tentativas++;

    }

}
function gerarNumero (){
   let numeroEscolhido =  parseInt (Math.random () * numeroLimite + 1);
   let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNalista == numeroLimite ){
    listaDeNumerosSorteados = [];
   }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
 }

function limparCampo(){
    document.querySelector ('input').value = ' ';


}
function novoJogo () {
    limparCampo();
    numeroSecreto = gerarNumero();
    tentativas = 1;
    exibirMensagemIinicial ();
    document.getElementById ('reiniciar').setAttribute ('disabled', true);

}





