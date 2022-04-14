var displaySavedItemEl = document.querySelector("#displaySavedItem");
var time = moment().format("DD/MM/YYYY h :m :s");

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
          console.log(data);
          console.log(data.value);
          
          // var jokes = [];

          localStorage.setItem("joke", JSON.stringify(data.value));
          displayRandomJoke();
        });
      } else {
        alert("Error: " + response.statusText);
      }
    });
}
 
function displayRandomActivity(activity) {
  if (activity.length === 0) {
    displaySavedItemEl.textContent = 'No content found.';
    return;
  }

  var newEl = document.createElement('li');
  newEl.classList ='liDisplay';
  newEl.innerHTML = `<p> Activity: ${activity.activity}<a href=\" \" id=\"heart\" class=\"material-icons\">favorite </a> </p><p>Type: ${activity.type} </p> <p>Link: <a href= \"${activity.link}\">${activity.link}</a></p><p><i class="material-icons">person_outline</i> ${activity.participants} </p> <br><span id=\"clock\"> ${time}</span> `;
  displaySavedItemEl.appendChild(newEl);

}

function displayRandomJoke() {
  var randomJoke = JSON.parse(localStorage.getItem("joke"));
  console.log(randomJoke);
  var newEl = document.createElement('li');
  newEl.classList ='liDisplay';
  newEl.innerHTML = `<p>Joke: ${randomJoke} <span id=\"clock\"><br> ${time}</span> <a href=\" \" id=\"heart\" class=\"material-icons\">favorite </a>`
  displaySavedItemEl.appendChild(newEl);
}





// Sample code for testing multiple items in UI to be updated later.
fetchAndDisplayRandomActivity();
fetchAndDisplayRandomJoke();
fetchAndDisplayRandomActivity();
fetchAndDisplayRandomJoke();
