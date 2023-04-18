const menuToggle = document.querySelector('.menu');
const menu-list = document.querySelector('.menu-list');
const closeButton = document.querySelector('.cancel1');

menuToggle.addEventListener('click', () => {
  toolbar-2.add('show');
  menu-list.classList.add('show');
});