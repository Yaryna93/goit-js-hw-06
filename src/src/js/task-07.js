const textSizeEl = document.querySelector("#font-size-control");
const textValueEl = document.querySelector("#text");

textSizeEl.addEventListener("input", () => {
  textValueEl.style.fontSize = `${textSizeEl.value}px`;
});