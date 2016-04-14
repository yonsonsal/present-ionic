angular.module('scanner.services', [])

.factory('IM_API', function($http) {
  // Might use a resource here that returns a JSON array
  var endPointURL = "http://www.montevideo.gub.uy/transporteRest/";
  var aquehorapasa = function(parada) {
    //http://www.montevideo.gub.uy/transporteRest/pasadas/3179/HABIL/17:55
    var now = new Date(),
      hour = now.getHours(),
      min = now.getMinutes(),dayType;

      switch (now.getDay()) {
        case 0:
          dayType = "DOMINGO";
          break;
        case 6:
          dayType = "SABADO";
          break;
        default:
          dayType = "HABIL";

      }

    return $http.get(endPointURL + 'pasadas/'+parada+'/'+dayType+'/'+hour+':'+min).then(function(response){
      return response.data;
    });
  };


  return {
    aquehorapasa: aquehorapasa
  };
});
