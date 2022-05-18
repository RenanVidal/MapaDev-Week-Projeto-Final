/* 
Objetivo¹ - Conforme ir passando mouse sobre as opções de personagens ir alterando a classe selecionado para 
personagem que estiver abaixo do mouse para colocar a marcação de seleção e retirar esta 
marcação do personagem anterior

Objetivo² - Conforme ir passando mouse sobre as opções de personagens ir alterando a imagem do personagem e o
nome conforme o persenagem que estiver selecionado 
*/

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        
        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado==='ultron') return;
        
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');
        
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;
        
        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');
        nomeJogador1.innerHTML = nomeSelecionado;

    })
})

