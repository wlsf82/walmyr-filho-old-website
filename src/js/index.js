var images = [
  '../assets/img/404_1.png',
  '../assets/img/404_2.png'
];

style404ImageRandomly();

function style404ImageRandomly() {
  return Math.random() > 0.5 ? styleImage(0) : styleImage(1);
}

function styleImage(image) {
  document.querySelector('#page-not-found')
    .innerHTML = "<img src='" + images[image] + "' alt='Página não encontrada' width='700' height='600'/>";
}
