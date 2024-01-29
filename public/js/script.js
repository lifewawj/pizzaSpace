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

/* LOAD MORE BUTTON */

/* LEFT CONTAINER */
/* EXPLORE */
/* DUDES */

/* RIGHT CONTAINER */
/* PIZZA OF THE DAY API */
/* MOVIE SUGGESTION API */

/* ---------- DUDES LIST ---------- */
/* WHERE DOES THIS GET STORED */
