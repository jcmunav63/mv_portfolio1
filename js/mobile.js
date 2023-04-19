const menuToggle = document.querySelector('.menu');
const modal = document.querySelector('.overlay');
const closeButton = document.querySelector('.toolbar-2');

<<<<<<< HEAD
// Define constants for popup window
const open-popup = document.getElementById('open-popup');
const popup-container = document.getElementById('popup-container');
const close-popup = document.getElementById('close-popup');

// Add the data object

// Open and close the popup window
open-popup.addEventListener('click', () => {
    popup-container.classList.add('show-popup');
});

close-popup.addEventListener('click', () => {
    popup-container.classList.remove('show-popup');
});


=======
>>>>>>> 02e117b603905381c9d08867ab780fdb2a0c6f4d
menuToggle.addEventListener('click', () => {
  modal.classList.add('show');
});

closeButton.addEventListener('click', () => {
  modal.classList.remove('show');
});

modal.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    modal.classList.remove('show');
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> 02e117b603905381c9d08867ab780fdb2a0c6f4d
