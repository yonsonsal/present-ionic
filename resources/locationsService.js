angular.module('starter').factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations =/*

   [
    {
      name : "Washington D.C., USA",
      lat : 38.8951100,
      lng : -77.0363700
    },
    {
      name : "London, England",
      lat : 51.500152,
      lng : -0.126236
    },
    {
      name : "Paris, France",
      lat : 48.864716,
      lng : 2.349014
    },
    {
      name : "Moscow, Russia",
      lat : 55.752121,
      lng : 37.617664
    },
    {
      name : "Rio de Janeiro, Brazil",
      lat : -22.970722,
      lng : -43.182365
    },
    {
      name : "Sydney, Australia",
      lat : -33.865143,
      lng : 151.209900
    }

  ];*/

  [
    {
      "cod_ubic_parada":5931,
      "lng":-56.1374328268643,
      "lat":-34.9046054807001,
      "name":"Montevideo Shopping"
    },
    {
      "cod_ubic_parada":5728,
      "lng":-56.210736567839,
      "lat":-34.9048783699,
      "name":"Puerto de Montevideo"
    },
    {
      "cod_ubic_parada":5933,
      "lng":-56.1688640590519,
      "lat":-34.9169550185061,
      "name":"Parque Rodó"
    },
    {
      "cod_ubic_parada":5929,
      "lng":-56.1651671307145,
      "lat":-34.8944403129283,
      "name":"Terminal y Shopping Tres Cruces"
    },
    {
      "cod_ubic_parada":5932,
      "lng":-56.1601053871432,
      "lat":-34.9237726313376,
      "name":"Punta Carretas Shopping"
    },
    {
      "cod_ubic_parada":5927,
      "lng":-56.1881444699901,
      "lat":-34.8905906605086,
      "name":"Palacio Legislativo"
    },
    {
      "cod_ubic_parada":5928,
      "lng":-56.2008692516813,
      "lat":-34.8572339346793,
      "name":"Jardín Botánico"
    },
    {
      "cod_ubic_parada":5925,
      "lng":-56.1860593511474,
      "lat":-34.905698810708,
      "name":"Explanada Municipal"
    },
    {
      "cod_ubic_parada":5930,
      "lng":-56.1514128514829,
      "lat":-34.8936602951988,
      "name":"Estadio Centenario"
    },
    {
      "cod_ubic_parada":5720,
      "lng":-56.2010090991935,
      "lat":-34.9064093250598,
      "name":"Peatonal Sarandí"
    },
    {
      "cod_ubic_parada":6116,
      "lng":-56.1839623370625,
      "lat":-34.8867620062793,
      "name":"Mercado Agrícola de Montevideo"
    },
    {
      "cod_ubic_parada":6117,
      "lng":-56.2111198736695,
      "lat":-34.8612569806153,
      "name":"Prado (Viaducto)"
    },
    {
      "cod_ubic_parada":6118,
      "lng":-56.181426016587,
      "lat":-34.9009507482281,
      "name":"Feria de Tristán Narvaja"
    }
  ]


  return locationsObj;

}]);
