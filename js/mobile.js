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

  let email2 = email.value;
  let isValid = emailValidation(email2);
  const msg = document.querySelector('.message1');
  if (!isValid) {
    msg.innerHTML = `<img class="" href="/images/cancel1.png" />
    <p class="message1-p">Error: Email needs to be in lowercase letters!</p>
                   `;
  } else {
    form.submit();
    form.reset();
  }
});
