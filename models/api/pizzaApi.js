// API Key: 549304fb09a74a5bb4ab89b9d72c70c1
// Request Random Url: https://api.spoonacular.com/recipes/random?number=1&include-tags=pizza
// Base Url: https://api.spoonacular.com/recipes/random

const API_URL =
  'https://api.spoonacular.com/recipes/random?number=1&include-tags=pizza';
const KEY = '549304fb09a74a5bb4ab89b9d72c70c1';

function randomPizza(my_api) {
  return fetch(my_api, {
    method: 'GET',
    cache: 'no-cache',
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err.message);
    });
}

function renderPizza(res) {
  let ul = document.getElementById('pizzaOfDay');
  p.textContent = '';
  res.results.forEach((pizzaOfDay) => {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(pizzaOfDay.title));
    ul.appendChild(li);
  });
}
