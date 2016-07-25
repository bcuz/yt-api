$(function() {

  var showResults = function(data) {
    for (result in data) {
      if (data[result].id.hasOwnProperty('videoId')) {
      $("#search-results").append("<p><a href='https://www.youtube.com/watch?v=" +
        data[result].id.videoId +"'><img src='" + data[result].snippet.thumbnails.default.url + "'></a></p>");

      } else {
      $("#search-results").append("<p><img src='" + data[result].snippet.thumbnails.default.url + "'></p>");
      }
    }
  }


   var getRequest = function(query) {
      var params = {
        part:'snippet',
        key: 'AIzaSyCjHNdgxgyK8DUlhrTFBi50mTnTJ-w-Mn0',
        q: query
      };
      url = "https://www.googleapis.com/youtube/v3/search";

          $.getJSON(url, params, function(data){

        showResults(data.items)

      });
  }




   $("form").submit(function() {
      var info = $("input").val();

      getRequest(info);




      return false;
    });
    $("body").on('click', '.erase', function() {
      $("#search-results").empty();
      })

});