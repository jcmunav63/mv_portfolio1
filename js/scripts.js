// FIRST, TAKE THE INFO FROM 3 INPUTS AN STORE IN LOCALSTORAGE (JSON).
// CHECK IF myContactData EXISTS IN LOCALSTORAGE
const myBody = document.body;
myBody.onload = checkDataExists();

function checkDataExists() {
  var myContactData = "";
  const nameInput = document.querySelector('#names');
  const emailInput = document.querySelector('#email');
  const msgInput = document.querySelector('#textarea');
  if(localStorage.getItem('contactForm') !== undefined && localStorage.getItem('contactForm')){
    // alert("Already exists data in localStorage!");
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
  let itemsArray = localStorage.getItem('contactForm') ?
JSON.parse(localStorage.getItem('contactForm')) : [];

  nameInput = itemsArray["name"];
  emailInput = itemsArray["email"];
  msgInput = itemsArray["message"];

  forms.addEventListener('submit', (event) => {
    recordInputData();
  });
}

function recordInputData() {
  alert("Data is to be recorded!");
  nameInput = document.getElementById('#names').value;
  emailInput = document.getElementById('#email').value;
  msgInput = document.getElementById('#textarea').value;

  myContactData = { name: nameInput, email: emailInput, message: msgInput };
  localStorage.setItem('contactForm', JSON.stringify(myContactData));
};

// Listen for the DOMContentLoaded event
// document.addEventListener('DOMContentLoaded', () => {
//   // Retrieve the form data from local storage
//   chrome.storage.local.get(['name', 'email', 'message'], (result) => {
//     // Check if the data exists in local storage
//     if (result.name && result.email && result.message ) {
//       // Set the input values to the stored data
//       nameInput.value = result.name;
//       emailInput.value = result.email;
//       msginput.value = result.message;
//     }
//   });
// });

// THIRD, WHEN THE USER CHANGES ANY INPUT FIELD, THE DATA IS SAVED IN
// LOCALSTORAGE
// Get the form elements
  // const nameInput = document.querySelector('#names');
  // const emailInput = document.querySelector('#email');
  // const messageInput = document.querySelector('#textarea');

  // let string1 = "{ name: " + nameInput + ", email: " + emailInput + ", message: " + messageInput + "}";

  // localStorage.setItem('contactForm', JSON.stringify(string1));
