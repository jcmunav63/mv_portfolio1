// MOBILE MENU SCRIPT
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

// EMAIL VALIDATION SCRIPT
const form = document.getElementById('form1');
const email = form['email'];

function emailValidation(mail) {
  const pattern = new RegExp(/^[0-9a-z\_]+@[0-9a-z\.]+\.[a-z]{2,4}$/);
  if (pattern.test(mail) === false) {
    return false;
  } else {
    return true;
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let isValid = emailValidation(email.value);
  var modal2 = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];

  if (!isValid) {
    modal2.style.display = "block";
    span.onclick = function() {
      modal2.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
    }
  } else {
    form.submit();
    form.reset();
  }
});
