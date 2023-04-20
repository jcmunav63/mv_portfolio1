const menuToggle = document.querySelector('.menu');
const modal = document.querySelector('.overlay');
const closeButton = document.querySelector('.toolbar-2');

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
});

const form = document.getElementById("form1");
const email = form["email"];

let email2 = email.value;
const pattern = new RegExp(/^[0-9a-z\_]+@[0-9a-z\.]+\.[a-z]{2,4}$/);
// /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$
// /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("The submit button is working!");
});

if (pattern.test(email2) = false) {
  //show the error message
  alert('Email is invalid! Use lowercase letters.');
} else {
  //All good! Letters are lowercase. Send the form.
  
}
