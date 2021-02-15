let form = document.querySelector('#registration');
let regBtn = form.querySelector('.btn .btn-register');
let email = form.querySelector('#email');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('clicked on register')
});