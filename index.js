const first = document.querySelector('.container');

const p = document.createElement('p');
p.textContent = 'Hey I am red!';
p.setAttribute('style', 'color: red');

const h3 = document.createElement('h3');
h3.textContent = 'I am a blue h3!';
h3.setAttribute('style', 'color: blue');

const div = document.createElement('div');
div.setAttribute('style', 'border: 2px solid black; background: pink');

const h1 = document.createElement('h1');
h1.textContent = 'I am in a div.';
const p_div = document.createElement('p');
p_div.textContent = 'ME TOO!';

div.appendChild(h1);
div.appendChild(p_div);

first.appendChild(p);
first.appendChild(h3);
first.appendChild(div);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});