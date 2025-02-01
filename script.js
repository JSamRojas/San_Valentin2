'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

let originalXno = document.querySelector('.no').style.left;
let originalYno = document.querySelector('.no').style.top;

document.querySelector('.yes').addEventListener('click', function () {
  document.querySelector('.no').style.left = originalXno;
  document.querySelector('.no').style.top = originalYno;
});

document.querySelector('.yes').addEventListener('click', openModal);

document.querySelector('.no').addEventListener('click', function () {
  let maxX = window.innerWidth * 0.8;
  let maxY = window.innerHeight * 0.8;
  let x = Math.random() * maxX;
  let y = Math.random() * maxY;
  this.style.left = `${x / 2}px`;
  this.style.top = `${y / 2}px`;
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
