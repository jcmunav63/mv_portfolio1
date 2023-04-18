const menuToggle = document.querySelector('.menu');
const modal = document.querySelector('.overlay');
const closeButton = document.querySelector('.cancel1');

menuToggle.addEventListener('click', () => {
  modal.add('show');
  menu-list.classList.add('show');
});