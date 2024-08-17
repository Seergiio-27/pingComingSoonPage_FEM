const textInput = document.getElementById('email');
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  const errorMsg = document.querySelector('.error-msg');
  const errorMsgLandscape = document.querySelector('.error-msg-landscape');

  if (textInput.checkValidity()) {
    errorMsg.textContent = '';
    errorMsgLandscape.textContent = '';
    console.log('Valid Input');
  } else {
    errorMsg.textContent = 'Please provide a valid email address'; 
    errorMsgLandscape.textContent = 'Please provide a valid email address';
    console.log('Invalid Input');
  }
});