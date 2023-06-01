function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls [type='number']")
const createBtn = document.querySelector("#controls [data-create]")
const destroyBtn = document.querySelector("#controls [data-destroy]")
const container = document.querySelector("#boxes")

createBtn.addEventListener('click', createBoxes)

destroyBtn.addEventListener('click', ()=>{
  container.innerHTML = ""
})

function createBoxes (){
  const amount = input.value
  const boxes = []
  
  for (let i=0; i<amount; i+=1) {
  const size = 30+i*10+'px'
  const box = `<div style="background-color:${getRandomHexColor()}; width:${size}; height:${size};"></div>`

  boxes.push(box)
  }

  const boxesList = boxes.join('');
  container.innerHTML = boxesList;
}