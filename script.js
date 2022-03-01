'use strict';

let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');
let mainImg = document.querySelector('.dice');
let newBtn = document.querySelector('.btn--new');
let RollBtn = document.querySelector('.btn--roll');
let HoldBtn = document.querySelector('.btn--hold');

// 1-listener
let a = [];
let c = [];
let sum1;
let sum2;
let sum3;
let random;
RollBtn.addEventListener('click', () => {
  let random = Math.trunc(Math.random() * 6 + 1);
  mainImg.setAttribute('src', `dice-${random}.png`);
  a.push(random);
  sum1 = a.reduce((partialSum, b) => partialSum + b, 0);

  if (
    document
      .querySelector('.player--active')
      .contains(document.querySelector('#name--0')) &&
    random !== 1
  ) {
    c = [];
    document.querySelector('#current--0').textContent = sum1;
    document.querySelector('#current--1').textContent = 0;
  }
  if (
    !document
      .querySelector('.player--active')
      .contains(document.querySelector('#name--0'))
  ) {
    a = [];
    let random2 = Math.trunc(Math.random() * 6 + 1);
    mainImg.setAttribute('src', `dice-${random2}.png`);
    c.push(random2);
    sum2 = c.reduce((partialSum, b) => partialSum + b, 0);
    document.querySelector('#current--0').textContent = 0;
    document.querySelector('#current--1').textContent = sum2;
    if (random2 === 1) {
      document.querySelector('.player--0').classList.add('player--active');
      document.querySelector('.player--1').classList.remove('player--active');
    }
  }
  if (
    random === 1 &&
    document
      .querySelector('.player--active')
      .contains(document.querySelector('#name--0'))
  ) {
    a = [];
    document.querySelector('#current--0').textContent = 0;
    document.querySelector('#current--1').textContent = 0;
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
  }
});
let d = [];
let f = [];
let score1Sum;
let score2Sum;
HoldBtn.addEventListener('click', () => {
  let random = Math.trunc(Math.random() * 6 + 1);
  let random2 = Math.trunc(Math.random() * 6 + 1);
  if (
    document
      .querySelector('.player--active')
      .contains(document.querySelector('#name--0'))
  ) {
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
    d.push(sum1);
    score1Sum = d.reduce((partialSum, b) => partialSum + b, 0);
    document.querySelector('#score--0').textContent = score1Sum;
    document.querySelector('#current--0').textContent = 0;
  } else if (
    !document
      .querySelector('.player--active')
      .contains(document.querySelector('#name--0'))
  ) {
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    f.push(sum2);
    score2Sum = f.reduce((partialSum, k) => partialSum + k, 0);
    document.querySelector('#score--1').textContent = score2Sum;
    document.querySelector('#current--1').textContent = 0;
  }
});
newBtn.addEventListener('click', () => {
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
});

let promt2 = prompt('Ismingizni kiriting:');

document.querySelector('#name--1').textContent = `${promt2}`;
console.log(promt2);
