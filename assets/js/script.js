// initial modal with have a laugh or random activity options
// based on their choice they will be redirected to a new page
//page 1 joke: 
    //  tabs for memes and jokes
    // saved memes/jokes on the left hand side
    $('.dropdown-trigger').dropdown();

var displaySavedItemEl = document.querySelector("#displaySavedItem");


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
  newEl.innerHTML=`<p>Joke: ${joke.value} `
  displaySavedItemEl.appendChild(newEl);
}



// Getting button to display content
var contentBtn = document.getElementById("contentBtn")
contentBtn.addEventListener("click", getContent)
var displayedContent= document.getElementById("displaySavedItem")

function getContent() {
    console.log("Getting Content")
    displayedContent.classList.remove('hidden')
    fetchAndDisplayRandomActivity(); 
    fetchAndDisplayRandomJoke();
}

var jokeTab = document.getElementById("jokeTab")
jokeTab.addEventListener("click", getJokeContent)
var displayedContent= document.getElementById("displaySavedItem")

function getJokeContent() {
    console.log("Getting Joke Content")
    displayedContent.classList.remove('hidden')
    fetchAndDisplayRandomJoke();
}

var activityTab = document.getElementById("activityTab")
activityTab.addEventListener("click", getActivityContent)
var displayedContent= document.getElementById("displaySavedItem")

function getActivityContent() {
    console.log("Getting Activity Content")
    displayedContent.classList.remove('hidden')
    fetchAndDisplayRandomActivity();

}


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

