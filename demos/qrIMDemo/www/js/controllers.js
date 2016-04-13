angular.module('scanner.controllers', [])
    .controller('HomeController', function($scope, $rootScope, $cordovaBarcodeScanner, $ionicPlatform,IM_API) {
        var vm = this;

        vm.scan = function(){

    $ionicPlatform.ready(function() {
                $cordovaBarcodeScanner
                    .scan()
                    .then(function(result) {
                        // Success! Barcode data is here
                        vm.scanResults = "We got a barcode\n" +
                        "Result: " + result.text + "\n" +
                        "Format: " + result.format + "\n" +
                        "Cancelled: " + result.cancelled;
if(result.text.split("parada/") && result.text.split("parada/")[1]){
    vm.codigoParada = result.text.split("parada/")[1];
}

                    }, function(error) {
                        // An error occurred
                        vm.scanResults = 'Error: ' + error;
                    }, function(error) {
                      console.error("ERROR = "+ JSON.stringify(error));
      });
    });
        };

        vm.scanResults = '';

        vm.aquehorapasa = function(){
          //vm.codigoParada =
          IM_API.aquehorapasa(vm.codigoParada).then(function(pasadas){
              vm.pasadas = pasadas;
          });
        };
    });


//https://github.com/phonegap/phonegap-plugin-barcodescanner/issues/139
//"http://www.montevideo.gub.uy/aquehorapasa/parada/3179"
