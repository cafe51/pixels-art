const body = document.querySelector('body');
const paleta = document.querySelector('#color-palette');
const grade = document.querySelector('#pixel-board');

function criaSecaoClear() {
  const secao = document.createElement('section');
  secao.setAttribute('id', 'section-clear');
  body.appendChild(secao);
}

function criaBotaoClear() {
  const botaoClear = document.createElement('button');
  botaoClear.innerText = 'Limpar';
  botaoClear.setAttribute('id', 'clear-board');
  const secaoClear = document.querySelector('#section-clear');
  secaoClear.appendChild(botaoClear);
}

function gradeSizer(tamanho) {
  for (let i = 0; i < tamanho; i += 1) {
    const linha = document.createElement('section');
    const pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.appendChild(linha);
    linha.className = 'line';
    for (let j = 0; j < tamanho; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      const line = document.querySelectorAll('.line')[i];
      line.appendChild(pixel);
    }
  }
}

function trocaSeletor(evt) {
  const selecionado = document.querySelector('.selected');
  selecionado.classList.remove('selected');
  evt.target.classList.add('selected');
}

function pinta(evt) {
  const selecionado = document.querySelector('.selected');
  const corNova = selecionado.classList[1];
  const alvo = evt.target;
  if (alvo.classList[0] === 'pixel') {
    alvo.style.backgroundColor = corNova;
  }
}

function clear() {
  const pixeis = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixeis.length; i += 1) {
    pixeis[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

function botaoEventoClear() {
  const botao = document.querySelector('#clear-board');
  botao.addEventListener('click', clear);
}

criaSecaoClear();

criaBotaoClear();

gradeSizer(5);

paleta.addEventListener('click', trocaSeletor);

grade.addEventListener('click', pinta);

botaoEventoClear();

