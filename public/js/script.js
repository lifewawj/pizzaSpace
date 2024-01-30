/* ---------- NAVIGATION ---------- */

/* USER INTERACTION */

/* SETTINGS DROP DOWN */

/* ---------- LANDING PAGE ---------- */

/* SIGN UP MODAL */
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("signupModal");
  var btn = document.getElementById("signupBtn");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
    showScreen("screenOne"); // Show the first screen when modal opens
  };

  span.onclick = function () {
    modal.style.display = "none";
    resetFormScreens(); // Hide all form screens when modal closes
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      resetFormScreens(); // Hide all form screens when modal closes
    }
  };
});

function showScreen(screenId) {
  var screens = document.getElementsByClassName("form-screen");
  for (var i = 0; i < screens.length; i++) {
    screens[i].classList.remove("active");
  }
  document.getElementById(screenId).classList.add("active");
}

function resetFormScreens() {
  var screens = document.getElementsByClassName("form-screen");
  for (var i = 0; i < screens.length; i++) {
    screens[i].classList.remove("active");
  }
}

function showNextScreen(currentScreenId, nextScreenId) {
  var currentScreen = document.getElementById(currentScreenId);
  var nextScreen = document.getElementById(nextScreenId);

  if (currentScreen && nextScreen) {
    currentScreen.classList.remove("active");
    nextScreen.classList.add("active");
  }
}

/* LOG IN MODAL */

/* ---------- PROFILE PAGE ---------- */

/* LEFT CONTAINER */
/* PROFILE PIC */
/* USERNAME */
/* PRONOUNS */
/* LOCATION */
/* FAVORITE MOVIE QUOTE */
/* DUDES LIST */

/* CENTER CONTAINER */
/* USER FEED */

/* RIGHT CONTAINER */
/* PIZZASPACE */
/* FAVORITE PIZZA */
/* LEAST FAVORITE TOPPING */
/* FAVORITE CRUST STYLE */
/* GO TO PIZZA SPOT */
/* GOOGLE MAPS API */

/* MOVIESPACE */
/* FAVORITE MOVIE */
/* GO TO MOVIE GENRE */
/* FAVORITE MOVIE SNACK */
/* GO TO MOVIE THEATER */

/* ---------- EXPLORE PAGE ---------- */

/* WRITE POST */
/* DATE AND TIME GENERATOR */
/* ADD PHOTO OPTION */
/* EATING */
/* PIZZA API */
/* WATCHING */
/* MOVIE API */

/* New Post */
async function fetchPosts() {
  const response = await fetch('/posts');
  const data = await response.json();
  return data;
}

async function post() {
  const username = document.getElementById('username').value;
  const imageUrl = document.getElementById('imageUrl').value;
  const caption = document.getElementById('caption').value;

  if (username && imageUrl) {
      const response = await fetch('/posts', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, imageUrl, caption }),
      });

      if (response.ok) {
          const newPost = await response.json();
          addPostToFeed(newPost);
          document.getElementById('username').value = '';
          document.getElementById('imageUrl').value = '';
          document.getElementById('caption').value = '';
      } else {
          console.error('Failed to create post');
      }
  }
}

function addPostToFeed(post) {
  const feedDiv = document.getElementById('feed');
  const postDiv = document.createElement('div');
  postDiv.innerHTML = `<strong>${post.username}</strong>: ${post.caption}<br>
                       <img src="${post.imageUrl}" alt="Post Image">`;
  feedDiv.insertBefore(postDiv, feedDiv.firstChild);
}

async function initialize() {
  const initialPosts = await fetchPosts();
  initialPosts.forEach(addPostToFeed);
}

initialize();

/* LOAD MORE BUTTON */

/* LEFT CONTAINER */
/* EXPLORE */
/* DUDES */

/* RIGHT CONTAINER */
/* PIZZA OF THE DAY API */
/* MOVIE SUGGESTION API */

/* ---------- DUDES LIST ---------- */
/* WHERE DOES THIS GET STORED */
