// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {
 
  $stateProvider
  .state('map', {
    url: '/',
    templateUrl: 'templates/map.html',
    controller: 'MapCtrl'
  });
 
  $urlRouterProvider.otherwise("/");
 
})

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
 
 var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var pontoUsuario = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var ponto1 = new google.maps.LatLng(-20.542438, -47.386048);

    var ponto2 = new google.maps.LatLng(-20.529849, -47.382946);

    var ponto3 = new google.maps.LatLng(-20.530529, -47.382492);

    var ponto4 = new google.maps.LatLng(-20.548837, -47.398782);

    var ponto5 = new google.maps.LatLng(-20.548274, -47.391100);

    var ponto6= new google.maps.LatLng(-20.541793, -47.385756);

    var ponto7 = new google.maps.LatLng(-20.528730, -47.402707);

    var ponto8 = new google.maps.LatLng(-20.531744, -47.416655);

    var ponto9 = new google.maps.LatLng(-20.549467, -47.43326);

    var ponto10 = new google.maps.LatLng(-20.552039, -47.407986);

   

 
    var mapOptions = {
      center: pontoUsuario,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
 //Wait until the map is loaded


google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
// var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  var image = 'img/petshop.png'

 var marca1 = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: pontoUsuario,
      label: "Estou aqui",
      icon:image
  });     

  var marca2 = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: ponto1,
      label: "Goias rural",
      icon:image
  });   

   var marca3 = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: ponto2,
      label: "Vila Vet Petshop & Veterinária",
      icon:image
  });  

  var marca4 = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: ponto3,
      label: "Parada do Pet Loja 2",
      icon:image
  });  
  var marca5 = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: ponto4,
      label: "Pet shop Santa Rita",
      icon:image
  });
  var marca6 = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: ponto5,
      label: "Dog Center Pet Shop",
      icon:image
  });  
  var marca7 = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: ponto6,
      label: "Pet Shop Banho & Tosa Auqmia",
      icon:image
  }); 
  var marca8 = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: ponto7,
      label: "Francampo Agro-Pet Shop",
      icon:image
  }); 
  var marca9 = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: ponto8,
      label: "Universo Pet",
      icon:image
  }); 
  var marca10 = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: ponto9,
      label: "Parada do Pet Loja 1",
      icon:image
  });       
});

  
  }, function(error){
    console.log("Could not get location");
  });


});



