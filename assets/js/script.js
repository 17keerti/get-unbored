// initial modal with have a laugh or random activity options
// based on their choice they will be redirected to a new page
//page 1 joke: 
//  tabs for memes and jokes
// saved memes/jokes on the left hand side
$(document).ready(function () {
  $('select').formSelect();
});

var displaySavedItemEl = document.querySelector("#displaySavedItem");

function getUserPreferences() {
  var userPreference = {};
  userPreference.joke = document.getElementById("joke").checked;
  userPreference.activity = document.getElementById("activity").checked;
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



function fetchAndDisplayRandomActivity() {
  var activityUrl = "http://www.boredapi.com/api/activity?accessibility=1";
  fetch(activityUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
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
          console.log(data);
          displayRandomJoke(data);
          console.log(data.value);
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

  var newEl = document.createElement('p');
  newEl.innerHTML = `<p> Activity: ${activity.activity} </p><p>Type: ${activity.type} <p> <p>Link: <a href=" ${activity.link} "></a>${activity.link}<p>Participants: ${activity.participants}`;
  displaySavedItemEl.appendChild(newEl);

}

var displayRandomJoke = function (joke) {
  if (joke.length === 0) {
    displaySavedItemEl.textContent = 'No content found.';
    return;
  }
  var newEl = document.createElement('p');
  newEl.innerHTML = `<p>Joke: ${joke.value} `
  displaySavedItemEl.appendChild(newEl);
}



// Getting button to display content
var contentBtn = document.getElementById("contentBtn")
contentBtn.addEventListener("click", getContent)
var displayedContent = document.getElementById("displaySavedItem")

function getContent() {
  getUserPreferences();
  console.log("Getting Content")
  displayedContent.classList.remove('hidden')
  fetchAndDisplayRandomActivity();
  fetchAndDisplayRandomJoke();
}


var displayedContent = document.getElementById("displaySavedItem")

function getJokeContent() {
  console.log("Getting Joke Content")
  displayedContent.classList.remove('hidden')
  fetchAndDisplayRandomJoke();
}


var displayedContent = document.getElementById("displaySavedItem")

function getActivityContent() {
  console.log("Getting Activity Content")
  displayedContent.classList.remove('hidden')
  fetchAndDisplayRandomActivity();

}


// assuming displayedItem = {
//   joke_data: full joke API response
//   activity_data: full activity API response
// }
function likeButtonHandler(displayedItem) {
  var filledHeart = document.getElementById("heart");
  var heartOutline = document.getElementById("heartOutline");
  $(heartOutline).is(':visible');
  var isLikeAction = true;
  console.log("isLikedAction: " + isLikeAction);
  // when user selects the heart
  if (isLikeAction) {
    // show filled heart and hide outlined heart
    $(filledHeart).show();
    $(heartOutline).hide();

    var previousSavedItem = JSON.parse(localStorage.getItem("displayedItem"));
    if (previousSavedItem == null) {
      previousSavedItem = [];
    }
    previousSavedItem.push(displayedItem);
    localStorage.setItem("userScores", JSON.stringify(previousSavedItem));

  } else {

    $(filledHeart).hide();
    $(heartOutline).show();
    // when user unselects the heart
    // find the index of the displayedIndex in the previousSavedItem[] and delete that item and save the updated array.
    var findDislikedItem = previousSavedItem.findIndex(Element => Element == displayedItem);
    previousSavedItem.splice(findDislikedItem);
    localStorage.setItem("userScores", JSON.stringify(previousSavedItem));
  }

// 





// var store = {

// }
// let randomNum = <math.random function random {

// }>;

// if (randomNum = 1) {
//   fetchAndDisplayRandomActivity();
// } else {
//   fetchAndDisplayRandomJoke
// };

// function random (store) {
//     var index = Math.floor(Math.random()*store.length);
//     var randomize = store[index];
//     return randomize;





