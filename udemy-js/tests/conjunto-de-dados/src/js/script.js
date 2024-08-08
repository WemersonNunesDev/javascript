let num = Math.floor(Math.random() * 6) + 1;
let numGerado = Number(num)
const res = document.querySelector('.resultado');


document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'button') {
        res.innerHTML = numGerado;
    }
})
