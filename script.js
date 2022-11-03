var jogador;
var pontuacao =[];
var texto = document.querySelector("#textoJogador");
var res = document.querySelector("#resultado");


function iniciarJogo(){
    pontuacao = [['','',''], ['','',''], ['','','']];
    texto.classList.remove("textoJogador");
    res.textContent='';
    var quadros =document.querySelectorAll(".quadro");
    jogador = '\u{1F419}';
    document.getElementById("jogadorDoTurno").textContent = jogador;
    for(let quadro of quadros){
        quadro.addEventListener('click', marcarQuadro);
        quadro.textContent="";
    }
}

function conferirResultado(){
    var possuiGanhador = false;
    for(var linha=0;linha<3;linha++){
        if(pontuacao[linha][0]!='' && pontuacao[linha][1]!='' && pontuacao[linha][2]!=''){
            if(pontuacao[linha][0] == pontuacao[linha][1] && pontuacao[linha][0] == pontuacao[linha][2]){
                possuiGanhador = true;
            }
        }
    }

    for(var coluna=0;coluna<3;coluna++){
        if(pontuacao[0][coluna]!='' && pontuacao[1][coluna]!='' && pontuacao[2][coluna]!=''){
            if(pontuacao[0][coluna] == pontuacao[1][coluna] && pontuacao[0][coluna] == pontuacao[2][coluna]){
                possuiGanhador = true;
            }
        }
    }

    //diagonais
    if(pontuacao[0][0] != '' && pontuacao[1][1]!= '' && pontuacao[2][2]!= ''){
        if(pontuacao[0][0] == pontuacao[1][1] && pontuacao[0][0] ==  pontuacao[2][2]){
            possuiGanhador=true;
        }
    }
    if(pontuacao[2][0] != '' && pontuacao[1][1]!= '' && pontuacao[0][2]!= ''){
        if(pontuacao[2][0] == pontuacao[1][1] && pontuacao[2][0] ==  pontuacao[0][2]){
            possuiGanhador=true;
        }
    }
    if(possuiGanhador){
        encerrarJogo();
    }
}

function encerrarJogo(){
    //alert("Jogador " + jogador + " ganhou !!!");
    
    texto.classList.add("textoJogador");
    res.textContent = `Jogador ${jogador} ganhou!!!`
    document.querySelectorAll(".quadro");
    var quadros =document.querySelectorAll(".quadro"); 
    for(let quadro of quadros){
        quadro.removeEventListener("click", marcarQuadro);
    }
}

function trocarJogador(){
    if(jogador == '\u{1F419}')
        jogador = '\u{1F41E}';
    else
        jogador = '\u{1F419}';
}

//função para marcar X ou O
function marcarQuadro(){
    if(this.textContent ==''){
        //this é o elemento do quadro que foi clicado
        this.textContent = jogador;
        var linha = this.dataset.linha - 1;
        var coluna = this.dataset.coluna - 1;
        pontuacao[linha][coluna] = jogador;
        conferirResultado();
        trocarJogador();
        document.getElementById("jogadorDoTurno").textContent = jogador; 
    }
}

document.getElementById('reiniciar').addEventListener('click', iniciarJogo);
iniciarJogo();