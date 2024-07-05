// Aula 38 - Ex with NodeList
const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');


const estilosBody = getComputedStyle(document.body);
const bkgColorBody = estilosBody.backgroundColor;

console.log(bkgColorBody);


function addColors() {
    // CSS
    for (let p of ps) {
        p.style.backgroundColor = bkgColorBody;
        p.style.color = '#fff';
        p.style.paddingInline = '0.5rem';
    }
}

addColors();
