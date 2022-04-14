$(document).ready(function () {
  $('select').formSelect();
});
var time = moment().format("DD/MM/YYYY hh :mm ");
var displaySavedItemEl = document.querySelector("#displaySavedItem");
var contentBtn = document.getElementById("contentBtn");
var jokeTab = document.getElementById("jokeTab");
var activityTab = document.getElementById("activityTab");
var filledHeart = document.getElementById("heart");
var heartOutline = document.getElementById("heartOutline");
var currentlyDisplayedItem;

function getUserPreferences() {
  var userPreference = {};
  userPreference.education = document.getElementById("educational").checked;
  userPreference.recreational = document.getElementById("recreational").checked;
  userPreference.social = document.getElementById("social").checked;
  userPreference.diy = document.getElementById("diy").checked;
  userPreference.charity = document.getElementById("charity").checked;
  userPreference.cooking = document.getElementById("cooking").checked;
  userPreference.relaxation = document.getElementById("relaxation").checked;
  userPreference.music = document.getElementById("music").checked;
  userPreference.busywork = document.getElementById("busywork").checked;

  console.log(userPreference);
}
//     var allActivityTypes =  ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
//     // convert this allActivityTypes var to only contain values user has selected
//     // put random value from allActivityTypes to selectedActivity
//     var selectedActivity = "recreational"
//     var url = "http://www.boredapi.com/api/activity?type=" + selectedActivity ;
//     // now fetch the url and show the result
//     // if a check box equals true then we want it show
// return
//   }
//   function getRandomInt(allActivityTypes.length) {
//     return Math.floor(Math.random() * max);
//   }
//   pass allActivityTypes..index.length

function fetchAndDisplayRandomActivity() {
  var activityUrl = "http://www.boredapi.com/api/activity?accessibility=1";
  fetch(activityUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          // console.log(data);
          displayRandomActivity(data);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    });
}

function fetchAndDisplayRandomJoke() {
  var jokeUrl = "https://api.chucknorris.io/jokes/random";
  fetch(jokeUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          // console.log(data);
          displayRandomJoke(data);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    });
}

var displayRandomActivity = function (activity) {
  if (activity.length === 0) {
    displaySavedItemEl.textContent = 'No content found.';
    return;
  }
  $(heartOutline).show();
  $(heart).hide();

  currentlyDisplayedItem = {};
  currentlyDisplayedItem.activityData = activity;
  currentlyDisplayedItem.timeData = time;
  // console.log(currentlyDisplayedItem);

  var newEl = document.createElement('p');
  $(displaySavedItemEl).empty();
  newEl.innerHTML = `<p> Activity: ${activity.activity}</p><p>Type: ${activity.type} <p> <p>Link: <a href=" ${activity.link} "></a>${activity.link}<p>Participants: ${activity.participants}<br><span id=\"clock\"> ${time}</span> `;
  displaySavedItemEl.appendChild(newEl);


}

var displayRandomJoke = function (joke) {
  if (joke.length === 0) {
    displaySavedItemEl.textContent = 'No content found.';
    return;
  }
  $(heartOutline).show();
  $(heart).hide();
  currentlyDisplayedItem = {};
  currentlyDisplayedItem.jokeData = joke.value;
  currentlyDisplayedItem.timeData = time;

  // console.log(currentlyDisplayedItem);

  var newEl = document.createElement('p');
  $(displaySavedItemEl).empty();
  newEl.innerHTML = `<p>Joke: ${joke.value} <br><span id=\"clock\"> ${time}</span>`
  displaySavedItemEl.appendChild(newEl);
}

function getContent() {
  displaySavedItemEl.classList.remove('hidden');
  fetchAndDisplayRandomActivity();
  fetchAndDisplayRandomJoke();
  getUserPreferences();
}


jokeTab.addEventListener("click", getJokeContent);
function getJokeContent() {
  displaySavedItemEl.classList.remove('hidden');
  fetchAndDisplayRandomJoke();
}

activityTab.addEventListener("click", getActivityContent);
function getActivityContent() {
  displaySavedItemEl.classList.remove('hidden');
  fetchAndDisplayRandomActivity();
}

function likeButtonHandler() {
  $(heartOutline).is(':visible');
  var isLikeAction = true;
  console.log("isLikedAction: " + isLikeAction);
  if (isLikeAction) {
    $(filledHeart).show();
    $(heartOutline).hide();

    var previousSavedItem = JSON.parse(localStorage.getItem("currentlyDisplayedItem"));
    if (previousSavedItem == null) {
      previousSavedItem = [];
    }
    previousSavedItem.push(currentlyDisplayedItem);
    localStorage.setItem("currentlyDisplayedItem", JSON.stringify(previousSavedItem));

  } else {

    $(filledHeart).hide();
    $(heartOutline).show();
    var findDislikedItem = previousSavedItem.findIndex(Element => Element == displayedItem);
    previousSavedItem.splice(findDislikedItem);
    localStorage.setItem("currentlyDisplayedItem", JSON.stringify(previousSavedItem));
  }


}
$(filledHeart).hide();
$(heartOutline).hide();

contentBtn.addEventListener("click", getContent);
filledHeart.addEventListener("click", likeButtonHandler);
heartOutline.addEventListener("click", likeButtonHandler);
