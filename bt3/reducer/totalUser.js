import $ from 'jquery';

var getAajx = function() {
  var deferred = $.Deferred();

      $.ajax({
          method: 'GET',
          url: 'http://localhost:3004/posts',
          contentType : 'application/json',
          success: function (data) {
              /** Send request success **/
              deferred.resolve(data);
          }
      });
      return deferred.promise(); 
}
export default getAajx;