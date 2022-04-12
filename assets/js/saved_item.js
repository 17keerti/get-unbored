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


var displayRandomActivity = function (activity) {
  if (activity.length === 0) {
    displaySavedItemEl.textContent = 'No content found.';
    return;
  }

  var newEl = document.createElement('li');
  newEl.innerHTML = `<p> Activity: ${activity.activity} </p><p>Type: ${activity.type} <p> <p>Link: <a href=" ${activity.link} "></a>${activity.link}<p>Participants: ${activity.participants}`;
  displaySavedItemEl.appendChild(newEl);

}

// Sample code for testing multiple items in UI to be updated later.

fetchAndDisplayRandomActivity();
fetchAndDisplayRandomActivity();
fetchAndDisplayRandomActivity();
fetchAndDisplayRandomActivity();
fetchAndDisplayRandomActivity();
