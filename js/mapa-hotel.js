$(function () {

    function initMap() {

        var location = new google.maps.LatLng(48.152977, 17.117487);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: {lat: 48.157673, lng: 17.117289}, /* centrovanie mapy na obrazovke */
            zoom: 14,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = 'images/marker.png'; /* map marker obrazok */

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });

        var contentString = '<div class="info-window">' + /* text v map markeri */
                '<h3>eD FORUM - Hotel Saffron</h3>' +
                '<div class="info-content">' +
                '<p class="map-description">Na tomto mieste sa nachádza hotel Saffron v ktorom sa koná konferencia eD FORUM.</p>' +
                '</div>' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

/* farebna schema mapy */
var styles = [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]}];

map.set('styles', styles);
/* farebna schema mapy koniec */

    }

    google.maps.event.addDomListener(window, 'load', initMap);
});