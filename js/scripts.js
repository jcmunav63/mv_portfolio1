// PRESERVE DATA IN THE BROWSER (LOCAL STORAGE)
function recordInputData() {
  const nameInput = document.querySelector('#names').value;
  const emailInput = document.querySelector('#email').value;
  const msgInput = document.querySelector('#textarea').value;

  const myContactData = { name: nameInput, email: emailInput, message: msgInput };
  localStorage.setItem('contactForm', JSON.stringify(myContactData));
}

function getDataToInputs() {
  const forms = document.getElementById('form1');

  const storedData = JSON.parse(localStorage.getItem('contactForm'));
  const data1 = storedData.name;
  const data2 = storedData.email;
  const data3 = storedData.message;

  forms.querySelector('#names').value = data1;
  forms.querySelector('#textarea').value = data3;
  forms.querySelector('#email').value = data2;

  forms.addEventListener('submit', recordInputData);
}

function insertDataFirstTime() {
  const myContactData = { name: 'Francisco Garcia', email: 'fgarcia@email.com', message: 'This is my message' };
  localStorage.setItem('contactForm', JSON.stringify(myContactData));
}

function checkDataExists() {
  if (localStorage.getItem('contactForm') !== undefined && localStorage.getItem('contactForm')) {
    getDataToInputs();
  } else {
    insertDataFirstTime();
    getDataToInputs();
  }
}

const myBody = document.body;
myBody.onload = checkDataExists();