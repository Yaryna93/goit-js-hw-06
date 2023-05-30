const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {

  event.preventDefault()

  const {email,password} = event.currentTarget.elements
  if (email === "" || password === "") {
    alert(`Заповніть всі поля`);
    return; }

  const data = {
    email: email.value,
    password: password.value,
  };

  console.log(data);
  
} 