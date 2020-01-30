const email = document.getElementById('email');
const button = document.getElementById('button');

function validateEmail(email) {
    const ex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return ex.test(email);
}

email.addEventListener('keydown', function() {
  const email = this.value;
  email = "";
  if(validateEmail(email)) {
    button.classList.add('is-active');
  }
});

button.addEventListener('click', function(e){
  e.preventDefault();
  this.classList.add('is-done','is-active');
  
  setTimeout(function(){ 
    button.innerHTML = "Thanks! Please Check Your Email."
  }, 500);
});