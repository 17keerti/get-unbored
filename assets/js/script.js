// initial modal with have a laugh or random activity options
// based on their choice they will be redirected to a new page
//page 1 joke: 
    //  tabs for memes and jokes
    // saved memes/jokes on the left hand side

    var apiUrl ="http://www.boredapi.com/api/activity?accessibility=1";
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);
          });
        } else {
          alert("Error: " + response.statusText);
        }
      });

      var jokeUrl ="https://api.imgflip.com/get_memes";
      fetch(jokeUrl)
        .then(function (response) {
          if (response.ok) {
            response.json().then(function (data) {
              console.log(data);
            });
          } else {
            alert("Error: " + response.statusText);
          }
        });