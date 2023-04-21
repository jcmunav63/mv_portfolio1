// PROJECT 10 - PRESERVING DATA IN THE BROWSER

// FIRST, TAKE THE INFO FROM 3 INPUTS AN STORE IN LOCALSTORAGE (JSON).

//Si no existe myContactData

const myBody = document.body;
myBody.onload = myFunction();
// myBody.addEventListener('load', myfunction(), () => {
//   // myFunction();
//   console.log('La página ha terminado de cargarse!!');
// });

function myFunction() {
  const myContactData = { name: 'Francisco Garcia', email: 'fgarcia@email.com', message: 'This is my message' };
  localStorage.setItem('contactForm', JSON.stringify(myContactData));
};


// THEN, IF THERE IS ANY DATA IN LOCALSTORAGE, WHEN THE PAGE LOADS,
// THE INPUT FIELDS ARE PREFILLED WITH THE DATA.
// Get the form elements
// const nameinput = document.querySelector('#names');
// const emailinput = document.querySelector('#email');
// const msginput = document.querySelector('#textarea');


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
