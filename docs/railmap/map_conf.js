var map_style =
    [
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "road",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": 'transit.line',
            "elementType": 'geometry',
            "stylers": [{"color": '#000000'}]
        },
        {
            "featureType": 'transit.line',
            "elementType": 'labels.text.fill',
            "stylers": [{"color": '#dddddd'}]
        },
        {
            "featureType": 'transit.line',
            "elementType": 'labels.text.stroke',
            "stylers": [{"color": '#555555'}]
        },
        {
            "featureType": 'transit.station',
            "elementType": 'geometry',
            "stylers": [{"color": '#aaaaaa'}]
        },
    ];
    
var styledMapType = new google.maps.StyledMapType(
        map_style,
        {name: 'Rail emphasized map'}
    );
var map = new google.maps.Map(document.getElementById('map'), 
    {
        center: {lat: 35.681, lng: 139.767},
        zoom: 11,
        mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map']
        }
    }
);

map.mapTypes.set('styled_map', styledMapType);
map.setMapTypeId('styled_map');

function addrToLoc(address) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': address}, 
        function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
            }
        }
    );
}
