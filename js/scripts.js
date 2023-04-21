// PROJECT 10 - PRESERVING DATA IN THE BROWSER

// FIRST, TAKE THE INFO FROM 3 INPUTS AN STORE IN LOCALSTORAGE (JSON).

body.addEventListener('load', myFunction() {
  myFunction();
  // console.log('La página ha terminado de cargarse!!');
});

myFunction() {
  const myContactData = { name: 'Francisco Garcia', email: 'fgarcia@email.com', message: 'This is my message' }
  
  localStorage.setItem('contactForm', JSON.stringify(myContactData));
}


// THEN, IF THERE IS ANY DATA IN LOCALSTORAGE, WHEN THE PAGE LOADS,
// THE INPUT FIELDS ARE PREFILLED WITH THE DATA.
// Get the form elements
const nameinput = document.querySelector('#names');
const emailinput = document.querySelector('#email');
const msginput = document.querySelector('#textarea');


// Listen for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
  // Retrieve the form data from local storage
  chrome.storage.local.get(['name', 'email', 'message'], (result) => {
    // Check if the data exists in local storage
    if (result.name && result.email && result.message ) {
      // Set the input values to the stored data
      nameInput.value = result.name;
      emailInput.value = result.email;
      msginput.value = result.message;
    }
  });
});


// THIRD, WHEN THE USER CHANGES ANY INPUT FIELD, THE DATA IS SAVED IN
// LOCALSTORAGE
// Get the form elements
  const nameInput = document.querySelector('#names');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#textarea');

  let string1 = "{ name: " + nameInput + ", email: " + emailInput + ", message: " + messageInput + "}";

  localStorage.setItem('contactForm', JSON.stringify(string1));

//  E X A M P L E S
// if (!localStorage.getItem("bgcolor")) {
//     populateStorage();
//   } else {
//     setStyles();
//   }

//   function setStyles() {
//     const currentColor = localStorage.getItem("bgcolor");
//     const currentFont = localStorage.getItem("font");
//     const currentImage = localStorage.getItem("image");
  
//     document.getElementById("bgcolor").value = currentColor;
//     document.getElementById("font").value = currentFont;
//     document.getElementById("image").value = currentImage;
  
//     htmlElem.style.backgroundColor = `#${currentColor}`;
//     pElem.style.fontFamily = currentFont;
//     imgElem.setAttribute("src", currentImage);
//   }

//   function populateStorage() {
//     localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
//     localStorage.setItem("font", document.getElementById("font").value);
//     localStorage.setItem("image", document.getElementById("image").value);
  
//     setStyles();
//   }

// bgcolorForm.onchange = populateStorage;
// fontForm.onchange = populateStorage;
// imageForm.onchange = populateStorage;


// window.addEventListener("storage", (e) => {
//     document.querySelector(".my-key").textContent = e.key;
//     document.querySelector(".my-old").textContent = e.oldValue;
//     document.querySelector(".my-new").textContent = e.newValue;
//     document.querySelector(".my-url").textContent = e.url;
//     document.querySelector(".my-storage").textContent = JSON.stringify(
//       e.storageArea
//     );
//   });

//   Storage.removeItem(); 
//   // takes a single argument — the key of the data item you want to
//   // remove — and removes it from the storage object for that domain.
//   Storage.clear(); 
  // takes no arguments, and empties the entire storage object for
  // that domain.