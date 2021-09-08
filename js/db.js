// add new recipe
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
  evt.preventDefault();
  
  const recipe = {
    name: form.title.value,
    ingredients: form.ingredients.value
  };

  db.collection('recipes').add(recipe)
    .catch(err => console.log(err));

  form.title.value = '';
  form.ingredients.value = '';
});