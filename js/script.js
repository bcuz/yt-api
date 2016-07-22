$(function() {

  var showResults = function(data) {
    // for (movie in data) {
      $("#search-results").append("<p>" + data + "</p>");
    // }
  }


   var getRequest = function(query) {
      var params = {
        part:'snippet',
        key: 'AIzaSyCjHNdgxgyK8DUlhrTFBi50mTnTJ-w-Mn0',
        q: query
      };
      url = "https://www.googleapis.com/youtube/v3/search";

          $.getJSON(url, params, function(data){

        console.log(data);
        showResults(data)

      });
  }

   $("form").submit(function() {
      var info = $("input").val();

      getRequest(info);




      return false;
    });

});