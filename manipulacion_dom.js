const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
const todos_p = document.querySelectorAll('p');

console.log(h1);
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
    todos_p
});

// h1.innerHTML = `
//     Hola, mundo <br>
//     Feo
// `;
h1.innerText = `
    Hola, mundo <br>
    Feo
`;
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'title_edit');
h1.classList.add('title_edit');
h1.classList.remove('title');
h1.classList.toggle('title');
h1.classList.contains('title');

input.value = '456';

const img = document.createElement('img');
img.setAttribute('src', 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
// pid.innerHTML = '';
// pid.append(img);
pid.replaceWith(img);