const textoH2 = "ANDERSON VASCONCELOS";
const textoH3 = "FULL STACK DEVELOPER";
let indexH2 = 0;
let indexH3 = 0;
const intervalo = 200; 
function escreverTexto() {
  const elementoH2 = document.querySelector('.main-content .texto');
  const elementoH3 = document.querySelector('.main-content .subtexto');

  if (indexH2 < textoH2.length) {
    elementoH2.textContent += textoH2.charAt(indexH2);
    indexH2++;
    setTimeout(escreverTexto, intervalo);
  }

  if (indexH3 < textoH3.length) {
    elementoH3.textContent += textoH3.charAt(indexH3);
    indexH3++;
    setTimeout(escreverTexto, intervalo);
  }
}

escreverTexto();

















const boxes = document.querySelectorAll('.box-portfolio');

boxes.forEach(box => {
    const conteudo = box.querySelector('.conteudo');

    box.addEventListener('mouseenter', () => {
        conteudo.style.bottom = '0';
    });

    box.addEventListener('mouseleave', () => {
        conteudo.style.bottom = '-100%';
    });
});



