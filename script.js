const body = document.querySelector('body');
const paleta = document.querySelector('#color-palette');
const grade = document.querySelector('#pixel-board');

function criaImputGrade() {
  const sectionInput = document.createElement('section');
  const entrada = document.createElement('input');
  const indicador = document.createElement('p');
  const botao = document.createElement('button');
  entrada.setAttribute('id', 'board-size');
  entrada.type = 'number';
  entrada.min = 1;
  indicador.innerText = 'Insira um valor de 5 a 50 ->';
  indicador.style.fontSize = '10px';
  indicador.style.display = 'inline';
  botao.innerText = 'VQV';
  botao.setAttribute('id', 'generate-board');
  sectionInput.appendChild(indicador);
  body.appendChild(sectionInput);
  sectionInput.appendChild(entrada);
  sectionInput.appendChild(botao);
}

// #board-size[type='number'][min='1']

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

function gradeRemover() {
  const linha = document.querySelectorAll('.line');
  for (let i = 0; i < linha.length; i += 1) {
    linha[i].parentNode.removeChild(linha[i]);
  }
}

function apagaEcria(quantidade) {
  gradeRemover();
  gradeSizer(quantidade);
}

function input() {
  const inputText = document.querySelector('#board-size');
  const size = inputText.value;
  if (size >= 5 && size <= 50) {
    apagaEcria(size);
  } else if (size < 5 && size != 0) {
    apagaEcria(5);
  } else if (size > 50) {
    apagaEcria(50);
  } else {
    alert('Board inválido!');
  }
}

// function input() {
//   const inputText = document.querySelector('#board-size');
//   const size = inputText.value;
//   if (size >= 5 && size <= 50) {
//     gradeRemover();
//     gradeSizer(size);
//   } else if (size < 5 && size != 0) {
//     gradeRemover();
//     gradeSizer(5);
//   } else if (size > 50) {
//     gradeRemover();
//     gradeSizer(50);
//   } else {
//     alert('Board inválido!');
//   }
// }

function botaoInput() {
  const botao = document.querySelector('#generate-board');
  botao.addEventListener('click', input);
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

gradeSizer(5);

criaSecaoClear();

criaBotaoClear();

paleta.addEventListener('click', trocaSeletor);

grade.addEventListener('click', pinta);

botaoEventoClear();

criaImputGrade();

botaoInput();
