$(document).ready(function () {
  $('select').formSelect();
});
$(document).ready(function () {
  $('.slider').slider();
});

var time = moment().format("DD/MM/YYYY hh :mm ");
var displaySavedItemEl = document.querySelector("#displaySavedItem");
var contentBtn = document.getElementById("contentBtn");
var jokeTab = document.getElementById("jokeTab");
var activityTab = document.getElementById("activityTab");
var filledHeart = document.getElementById("heart");
var heartOutline = document.getElementById("heartOutline");
var currentlyDisplayedItem;
var userPreference;

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
  return userPreference;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function checkboxHandler() {
  var userPreference = getUserPreferences();
  console.log(userPreference);
  var checkIfFalse = Object.values(userPreference).every(
    value => value === false
  ); 
  if(checkIfFalse == true){
    var index = getRandomInt(2);
    if (index == 1) {
      fetchAndDisplayRandomActivity();
    } else {
      fetchAndDisplayRandomJoke();
    }
  } else {
  
    var activityPreferences = [];
    if (userPreference.education) {
      activityPreferences.push("education");
    } if (userPreference.recreational) {
      activityPreferences.push("recreational");
    } if (userPreference.social) {
      activityPreferences.push("social");
    } if (userPreference.diy) {
      activityPreferences.push("diy");
    } if (userPreference.charity) {
      activityPreferences.push("charity");
    } if (userPreference.cooking) {
      activityPreferences.push("cooking");
    } if (userPreference.relaxation) {
      activityPreferences.push("relaxation");
    } if (userPreference.busywork) {
      activityPreferences.push("busywork");
    } if (userPreference.music) {
      activityPreferences.push("music");
    }
    
  var selectedActivityType = activityPreferences[getRandomInt(activityPreferences.length)];
  console.log(selectedActivityType);
  var urlWithActivityType = "https://www.boredapi.com/api/activity?type=" + selectedActivityType;

  fetch(urlWithActivityType)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (activity) {
          console.log(activity);
          if (activity.link == "") {
            var newEl = document.createElement('p');
            $(displaySavedItemEl).empty();
            newEl.innerHTML = `<p> Activity: ${activity.activity}</p><p>Type: ${activity.type} <p> <i class="material-icons">person_outline</i> : ${activity.participants}`;
            displaySavedItemEl.appendChild(newEl);
          } else {
            var newEl = document.createElement('p');
            $(displaySavedItemEl).empty();
            newEl.innerHTML = `<p> Activity: ${activity.activity}</p><p>Type: ${activity.type} <p> <p>Link: <a href=\" ${activity.link} \">${activity.link}</a><p><i class="material-icons">person_outline</i> ${activity.participants}`;
            displaySavedItemEl.appendChild(newEl);
          }

        });
      } else {
        console.log("Error: " + response.statusText);
      }
    });
  }
}

function fetchAndDisplayRandomActivity() {
  var activityUrl = "https://www.boredapi.com/api/activity ";
  fetch(activityUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          displayRandomActivity(data);
        });
      } else {
        console.log("Error: " + response.statusText);
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
        console.log("Error: " + response.statusText);
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
  if (activity.link == "") {
    var newEl = document.createElement('p');
    $(displaySavedItemEl).empty();
    newEl.innerHTML = `<p> Activity: ${activity.activity}</p><p>Type: ${activity.type} <p><i class="material-icons">person_outline</i> ${activity.participants}`;
    displaySavedItemEl.appendChild(newEl);
  } else {
    var newEl = document.createElement('p');
    $(displaySavedItemEl).empty();
    newEl.innerHTML = `<p> Activity: ${activity.activity}</p><p>Type: ${activity.type} <p> <p>Link: <a href=\" ${activity.link} \">${activity.link}</a><p><i class="material-icons">person_outline</i>  ${activity.participants}`;
    displaySavedItemEl.appendChild(newEl);
  }

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
  newEl.innerHTML = `<p>Joke: ${joke.value}`
  displaySavedItemEl.appendChild(newEl);
}

function getContent() {
  displaySavedItemEl.classList.remove('hidden');
  checkboxHandler();
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