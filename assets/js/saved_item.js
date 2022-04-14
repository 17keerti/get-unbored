var displaySavedItemEl = document.querySelector("#displaySavedItem");
var time = moment().format("DD/MM/YYYY h :m :s");


function displayRandomActivity() {
  var newEl = document.createElement('li');
  newEl.classList = 'liDisplay';
  newEl.innerHTML = `<p> Activity: ${currentlyDisplayedItem[i].activityData}<a href=\" \" id=\"heart\" class=\"material-icons\">favorite </a> </p><p>Type: ${currentlyDisplayedItem[i].activityType} </p> <p>Link: <a href= \"${currentlyDisplayedItem[i].activityLink}\">${currentlyDisplayedItem[i].activitylink}</a></p><p><i class="material-icons">person_outline</i> ${currentlyDisplayedItem[i].activityParticipants} </p> <br><span id=\"clock\"> ${time}</span> `;
  displaySavedItemEl.appendChild(newEl);

}

function displayRandomJoke() {

  var newEl = document.createElement('li');
  newEl.classList = 'liDisplay';
  newEl.innerHTML = `<p>Joke: ${currentlyDisplayedItem[i].jokeData} <span id=\"clock\"><br> ${time}</span> <a href=\" \" id=\"heart\" class=\"material-icons\">favorite </a>`
  displaySavedItemEl.appendChild(newEl);
}

function displaySavedItem() {
  var currentlyDisplayedItem = JSON.parse(localStorage.getItem("currentlyDisplayedItem"));
  console.log(currentlyDisplayedItem);
  for (var i = 0; i < currentlyDisplayedItem.length; i++) {
    if (currentlyDisplayedItem[i].jokeData == null) {

      var newEl = document.createElement('li');
      newEl.classList = 'liDisplay';
      newEl.innerHTML = `<p> Activity: ${currentlyDisplayedItem[i].activityData.activity}<a href=\" \" id=\"heart\" class=\"material-icons\">favorite </a> </p><p>Type: ${currentlyDisplayedItem[i].activityData.type} </p> <p>Link: <a href= \"${currentlyDisplayedItem[i].activityData.link}\">${currentlyDisplayedItem[i].activityData.link}</a></p><p><i class="material-icons">person_outline</i> ${currentlyDisplayedItem[i].activityData.participants} </p> <br><span id=\"clock\"> ${time}</span> `;
      displaySavedItemEl.appendChild(newEl);

    } else {

      var newEl = document.createElement('li');
      newEl.classList = 'liDisplay';
      newEl.innerHTML = `<p>Joke: ${currentlyDisplayedItem[i].jokeData} <span id=\"clock\"><br> ${time}</span> <a href=\" \" id=\"heart\" class=\"material-icons\">favorite </a>`
      displaySavedItemEl.appendChild(newEl);
    }
  }

}
displaySavedItem();
