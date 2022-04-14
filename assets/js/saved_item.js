var displaySavedItemEl = document.querySelector("#displaySavedItem");

function displaySavedItem() {
  var currentlyDisplayedItem = JSON.parse(localStorage.getItem("currentlyDisplayedItem"));
  console.log(currentlyDisplayedItem);
  for (var i = 0; i < currentlyDisplayedItem.length; i++) {
    if (currentlyDisplayedItem[i].jokeData == null) {

      var newEl = document.createElement('li');
      newEl.classList = 'liDisplay';
      newEl.innerHTML = `<p> Activity: ${currentlyDisplayedItem[i].activityData.activity}<a href=\" \" id=\"heart\" class=\"material-icons\">favorite </a> </p><p>Type: ${currentlyDisplayedItem[i].activityData.type} </p> <p>Link: <a href= \"${currentlyDisplayedItem[i].activityData.link}\">${currentlyDisplayedItem[i].activityData.link}</a></p><p><i class="material-icons">person_outline</i> ${currentlyDisplayedItem[i].activityData.participants} </p> <br><span id=\"clock\"> ${currentlyDisplayedItem[i].timeData}</span> `;
      displaySavedItemEl.appendChild(newEl);

    } else {

      var newEl = document.createElement('li');
      newEl.classList = 'liDisplay';
      newEl.innerHTML = `<p>Joke: ${currentlyDisplayedItem[i].jokeData} <span id=\"clock\"><br> ${currentlyDisplayedItem[i].timeData}</span> <a href=\" \" id=\"heart\" class=\"material-icons\">favorite </a>`
      displaySavedItemEl.appendChild(newEl);
    }
  }

}
displaySavedItem();
