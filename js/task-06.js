const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("input",()=>{
  inputEl.addEventListener("blur", (event) => {
    if (inputEl.dataset.length = event.currentTarget.value.length) {
      inputEl.currentTarget..add('valid')
      inputEl.currentTarget.value.length.remove('invalid')
    } else {
      inputEl.add('invalid')
      inputEl.remove('valid')
    }
  })
});
