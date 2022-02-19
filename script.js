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

gradeSizer(5);

const paleta = document.querySelector('#color-palette');
const grade = document.querySelector('#pixel-board');

function trocaSeletor(evt) {
  const selecionado = document.querySelector('.selected');
  selecionado.classList.remove('selected');
  evt.target.classList.add('selected');
}

paleta.addEventListener('click', trocaSeletor);

function pinta(evt) {
  const selecionado = document.querySelector('.selected');
  const corNova = selecionado.classList[1];
  const alvo = evt.target;
  if (alvo.classList[0] === 'pixel') {
    alvo.style.backgroundColor = corNova;
  }
}

grade.addEventListener('click', pinta);
