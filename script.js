const CLIQUES_NECESSARIOS = 15;
let contadorCliques = 0;

const pot = document.getElementById('pot');
const container = document.getElementById('game-container');
const finalScene = document.getElementById('final-scene');

function tocarSomPop() {
    const somPop = new Audio('pop.mp3');
    somPop.volume = 0.5;
    somPop.play();
}

pot.addEventListener('click', () => {
if (contadorCliques >= CLIQUES_NECESSARIOS) return;

contadorCliques++;
tocarSomPop();
estourarPipoca();

if (contadorCliques === CLIQUES_NECESSARIOS) {
    setTimeout(mostrarCenaFinal, 1000);
}
});

function estourarPipoca() {
const pipoca = document.createElement('div');
pipoca.classList.add('popcorn');

pipoca.innerHTML = '<img src="pipoca.png" width="40" height="40">'; 

const randomDX = (Math.random() - 0.5) * 600;
const randomDY = (Math.random() * -300) - 100;

pipoca.style.setProperty('--dx', `${randomDX}px`);
pipoca.style.setProperty('--dy', `${randomDY}px`);

container.appendChild(pipoca);
}

function mostrarCenaFinal() {
finalScene.classList.add('show');
gerarCoracoes();
}

function gerarCoracoes() {
setInterval(() => {
    const coracao = document.createElement('div');
    coracao.classList.add('heart');
    coracao.innerHTML = '💜';
    
    coracao.style.left = Math.random() * 100 + 'vw';
    coracao.style.animationDuration = (Math.random() * 2 + 3) + 's';
    
    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 5000);
}, 300);
}