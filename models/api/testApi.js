// API key 121eab3cd80c3bca77d2becee94b9536
//API Read Access Token eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjFlYWIzY2Q4MGMzYmNhNzdkMmJlY2VlOTRiOTUzNiIsInN1YiI6IjY1YTllMjBjMzU3YzAwMDBjN2Q2OWIzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SV-_5QG5VKxwVIqt9dsTV6f1StawzQYXlBgqfPRSVdc

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=121eab3cd80c3bca77d2becee94b9536';
let SEARCH_URL =
  BASE_URL + 'search/movie?' + API_KEY + '&sort_by=popularity.desc&query=';

function getMovies(my_api) {
  return fetch(my_api, {
    method: 'GET',
    cache: 'no-cache',
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err.message);
    });
}

function renderMovies(res) {
  let ul = document.getElementById('results');
  ul.innerHTML = '';
  res.results.forEach((result) => {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(result.title));
    ul.appendChild(li);
  });
}

let f = document.getElementById('search_movie');
f.addEventListener('click', () => {
  let user_input = search_input.value;
  if (user_input && user_input.trim() != '') {
    let query = SEARCH_URL + user_input;
    getMovies(query).then(renderMovies);
  }
});
