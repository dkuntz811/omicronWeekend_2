$(document).ready(function(){
  //$('#ajax-data').remove();
  //$('#ajax-data').append(data.omicron);
  $('#next').on('click', function() {

   //console.log('This is my ' + data);
      console.log("clicked");

  });

  $('#prev').on('click', function () {
      console.log("clicked");
  })
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){   //fetches the data from server

        for (var i = 0; i < data.omicron.length; i ++) {
          $('#ajax-data').append('<div class="omicron"></div>'); //creates a div to append data
          var $el = $('#ajax-data').children().last();
          $el.append('<h2>' + "Name: " + data.omicron[i].name + '</h2>');  //appends name to div
          $el.append('<h2>' + "Git username: " + data.omicron[i].git_username+ '</h2>'); //appends git_username to div
          $el.append('<h3>' + "Shoutout: " + data.omicron[i].shoutout + '</h3>'); //appends shoutout to div
        }


      console.log(data.omicron);


      },
      error: function () {
        console.log('Error with request');    //displays error if data request cannot be fulfilled.
      }

    });
});


var studentArray = [];







// people = omicron
// git_username:
// name:
// shoutout:
