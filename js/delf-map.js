var skyMapMarkersImgs = {
	urlLg: 'img/icons/map-marker-lg.png',
	urlSm: 'img/icons/map-marker-sm.png'
};

var googleMarkers = [
	{
		lat: 55.752402,
		lng:  37.578567,
		icon: skyMapMarkersImgs.urlLg,
		infoContent: ['<div class="ipc-map-marker"><img src="img/icons/mark-active.png" alt="alt" /><div class="ipc-map-marker__content"><strong>Москва, ул. Дорогобужская, 14</strong><span>строение 6, офис 318</span></div></div>',
			  	].join('')

	},

	{
		lat: 56.142536,
		lng: 40.406056,
		icon: skyMapMarkersImgs.urlSm
	},

	{
		lat: 56.294871,
		lng: 43.924006,
		icon: skyMapMarkersImgs.urlSm
	},

	{
		lat: 56.116054,
		lng: 47.262923,
		icon: skyMapMarkersImgs.urlSm
	},

	{
		lat: 54.200023,
		lng: 45.178061,
		icon: skyMapMarkersImgs.urlSm
	},

	{
		lat: 54.318287,		
		lng: 48.396187,
		icon: skyMapMarkersImgs.urlSm
	},

	{
		lat: 55.826600,
		lng: 49.035037,
		icon: skyMapMarkersImgs.urlSm
	}
];
function initMap() {
   //    	var marker = new google.maps.Marker({
   //    		position: {lat: 50.005531, lng: 36.233364},
			//     // title: 'Вне зоны доступа', // "Хинт"
			//     icon: image
			// });


	      map = new google.maps.Map(document.getElementById('contacts-map'), {
	        center: {lat: 56.025694, lng: 38.837973},
	        zoom: 7,
	        disableDefaultUI: true, 
	        zoomControl: true,
	        mapTypeControl: true,
	        fullscreenControl: true
	        // styles: style

	      });

	      googleMarkers.forEach(function(obj) {
	      	var marker = new google.maps.Marker({
	      		position: {lat: obj.lat, lng: obj.lng},
				    title: obj.hint, // "Хинт"
				    icon: obj.icon

					});

	      	var infowindow = new google.maps.InfoWindow({
				  	content: obj.infoContent
			  	});

				  marker.addListener('click', function() {
				  	infowindow.open(map, marker);
				  });

	      	marker.setMap(map);
	      });

    }