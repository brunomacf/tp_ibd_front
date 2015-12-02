function createMap(opts) {
   opts = opts || {};

   var mapCanvas = document.getElementById('map');

   // Constrói o mapa.
   var map = new google.maps.Map(mapCanvas, opts);

   if(opts.center) {
      // Adiciona um marcador ao mapa.
      var marker = new google.maps.Marker({
         position: opts.center,
         map: map,
         title: 'Hello World!'
      });
   }
};

function init() {

   // check for Geolocation support
   if (navigator.geolocation) {
      console.log('Geolocation is supported!');

      // Obtém a posição atual.
      navigator.geolocation.getCurrentPosition(function(position) {
         var mapOpts = {
            disableDefaultUI: true,
            center: {lat: position.coords.latitude, lng: position.coords.longitude},
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
         };

         createMap(mapOpts);
      });
   }
   else {
      console.log('Geolocation is not supported for this Browser/OS version yet.');
   }
}

(function() {
   window.onload = function() {

   }

   google.maps.event.addDomListener(window, 'load', init);
})();
