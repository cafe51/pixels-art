function grade(tamanho) {
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

grade(5);

// for (let i = 2; i < l; i += 1) {
//   document.createElement('section');
//   document.querySelector('#pixel-board').appendChild(document.createElement('section'));
//   document.querySelectorAll('section')[i].className = 'line';
//   for (let j = 0; j < c.length; j += 1) {
//     let pixel = document.createElement('div');
//     pixel.className = 'pixel';
//     let line = document.querySelectorAll('.line')[i];
//     line.appendChild(pixel);
//   }
// }