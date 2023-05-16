/*
- При завантаженні сторінки показати користувачеві поле введення (`input`) з написом `Price`. Це поле буде служити для введення числових значень
- Поведінка поля має бути такою:
- При фокусі на полі введення – у нього має з'явитися рамка зеленого кольору. При втраті фокусу вона пропадає.
- Коли забрали фокус з поля - його значення зчитується, над полем створюється `span`, в якому має бути виведений текст:. 
Поруч із ним має бути кнопка з хрестиком (`X`). Значення всередині поля введення фарбується зеленим.
- При натисканні на `Х` - `span` з текстом та кнопка `X` повинні бути видалені.
- Якщо користувач ввів число менше 0 - при втраті фокусу підсвічувати поле введення червоною рамкою, 
під полем виводити фразу - `Please enter correct price`. `span` зі значенням при цьому не створюється.
*/

'use strict'

const container = document.createElement('div');
container.classList.add('container__1');
document.body.prepend(container);
const title = document.createElement('div');
title.classList.add('price');
title.textContent = 'Price';
container.prepend(title);
const input = document.createElement('input');
title.after(input)



input.addEventListener('focus', () => {
  input.classList.add('focus', 'green__bg');
});

input.addEventListener('blur', () => {
  input.classList.remove('focus');
});

input.addEventListener('change', () => {
  const span = document.createElement('span');
  span.textContent = input.value;
  title.before(span);
  const button = document.createElement('button');
  button.textContent = '❌';
  container.prepend(button);
  button.addEventListener('click', (e) => {
    e.target.nextElementSibling.remove();
    e.target.remove();
  });
});

input.addEventListener('blur', () => {
  if (input.value <= 0) {
    input.classList.add('erorr');
    // container.innerText = `Please enter correct price`;
  }
});

input.addEventListener('focus', () => {
    input.classList.remove('erorr');
});