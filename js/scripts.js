// PRESERVE DATA IN THE BROWSER (LOCAL STORAGE)
const myBody = document.body;
myBody.onload = checkDataExists();

function checkDataExists() {
  var myContactData = "";

  if(localStorage.getItem('contactForm') !== undefined && localStorage.getItem('contactForm')){
    getDataToInputs();
  } else {
    insertDataFirstTime();
    getDataToInputs();
  }
}

function insertDataFirstTime() {
  myContactData = { name: 'Francisco Garcia', email: 'fgarcia@email.com', message: 'This is my message' };
  localStorage.setItem('contactForm', JSON.stringify(myContactData));
};

function getDataToInputs() {
  const forms = document.getElementById('form1');

  let storedData = JSON.parse(localStorage.getItem('contactForm'));
  let data1 = storedData.name;
  let data2 = storedData.email;
  let data3 = storedData.message;

  document.querySelector('#names').value = data1;
  document.getElementById('textarea').innerHTML = data3;
  document.querySelector('#email').value = data2;

  forms.addEventListener('submit', (event) => {
    recordInputData();
  });
}

function recordInputData() {
  nameInput = document.querySelector('#names').value;
  emailInput = document.querySelector('#email').value;
  msgInput = document.querySelector('#textarea').value;

  let myContactData = { name: nameInput, email: emailInput, message: msgInput };
  localStorage.setItem('contactForm', JSON.stringify(myContactData));

};
