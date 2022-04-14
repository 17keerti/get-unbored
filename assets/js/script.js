// initial modal with have a laugh or random activity options
// based on their choice they will be redirected to a new page
//page 1 joke: 
    //  tabs for memes and jokes
    // saved memes/jokes on the left hand side


    
    $(document).ready(function(){
        $('select').formSelect();
      });
  
  var displaySavedItemEl = document.querySelector("#displaySavedItem");
  
  function getUserPreferences() {
    var userPreference ={};
    userPreference.education = document.getElementById("educational").checked ;
    userPreference.recreational =document.getElementById("recreational").checked ;
    userPreference.social =document.getElementById("social").checked ;
    userPreference.diy =document.getElementById("diy").checked ;
    userPreference.charity =document.getElementById("charity").checked ;
    userPreference.cooking =document.getElementById("cooking").checked ;
    userPreference.relaxation =document.getElementById("relaxation").checked ;
    userPreference.music =document.getElementById("music").checked ;
    userPreference.busywork =document.getElementById("busywork").checked ;
  
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
function getContent() {
    console.log("Getting Content")
    displaySavedItemEl.classList.remove('hidden')
    fetchAndDisplayRandomActivity()
    fetchAndDisplayRandomJoke();
    getUserPreferences();
}

var jokeTab = document.getElementById("jokeTab")
jokeTab.addEventListener("click", getJokeContent)
function getJokeContent() {
    console.log("Getting Joke Content")
    displaySavedItemEl.classList.remove('hidden')
    fetchAndDisplayRandomJoke();
}

var activityTab = document.getElementById("activityTab")
activityTab.addEventListener("click", getActivityContent)
function getActivityContent() {
    console.log("Getting Activity Content")
    displaySavedItemEl.classList.remove('hidden')
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

