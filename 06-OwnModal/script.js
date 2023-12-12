'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

function show() {
  document.querySelector('.modal').classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function hide() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let x = 0; x < btnOpenModal.length; x++) {
  btnOpenModal[x].addEventListener('click', show);
}
btnCloseModal.addEventListener('click', hide); // we dont call the function with the () because it would call it instantly
overlay.addEventListener('click', hide);
document.addEventListener('keydown', function (event) {
  console.log(event);
  if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) {
    hide();
  }
});
