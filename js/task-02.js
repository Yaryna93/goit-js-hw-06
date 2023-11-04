const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]; 
const items = [];
const ingredientsRef = document.getElementById("ingredients");


ingredients.forEach((ingredient => {
  const ingredientsEl = document.createElement('LI');
  ingredientsEl.className = "item";
  ingredientsEl.textContent = ingredient;
  items.push(ingredientsEl);

  
}));
console.log(items);

ingredientsRef.append(...items);