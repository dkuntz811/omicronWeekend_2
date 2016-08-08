var people = [];
var currentIndex = 0;

  $(document).ready(function(){
    loadData();

    function showPerson () {
      var person = people[currentIndex];
      var gitLink = "https://github.com" + person.git_username;
      $("#person-name").text(person.name);
      $("#person-shoutout").text(person.shoutout);
      $("#person-git").attr("href", gitLink + person.git_username);
    }

  $('#next').on('click', function() {
    for (var i = 0; i < people.length; i++);
    currentIndex++;



   //console.log('This is my ' + data);
      console.log("clicked");

  });

  $('#prev').on('click', function () {
      console.log("clicked");
  });
  function loadData() {
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){   //fetches the data from server
         people = data.omicron;
         showPerson();
      },
     error: function () {
        console.log('Error with request');    //displays error if data request cannot be fulfilled.
      }

    });
  }
});










// people = omicron
// git_username:
// name:
// shoutout:
