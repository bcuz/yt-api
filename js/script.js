$(function() {


   var getRequest = function(query) {
      var params = {
        part:'snippet',
        key: 'AIzaSyCjHNdgxgyK8DUlhrTFBi50mTnTJ-w-Mn0',
        q: query
      };
      url = "https://www.googleapis.com/youtube/v3/search";

          $.getJSON(url, params, function(data){

        console.log(data);

      });
  }

  getRequest("dragon ball z abridged")

});