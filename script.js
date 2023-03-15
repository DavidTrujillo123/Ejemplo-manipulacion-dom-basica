const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#resultado');

form.addEventListener('submit', calcular);
// btn.addEventListener('evento', calcular);
function calcular(event){
    event.preventDefault();
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    result.innerText = " = "+(num1+num2);
}





