/* These HTML strings are used to generate HTML on screen based on the logic and resume data within resumeBuilder.js. */
var HTMLheaderName = '<div class="header" id="name">%data%</div>';
var HTMLheaderRole = '<div class="meta"><span>%data%</span></div>';
var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<div class="item"><i class="mobile icon large"></i><div class="content">%data%</div></div>';
var HTMLemail = '<div class="item"><i class="mail icon large"></i><div class="content">%data%</div></div>';
var HTMLtwitter = '<div class="item"><i class="twitter icon large"></i><div class="content">%data%</div></div>';
var HTMLgithub = '<div class="item"><i class="github icon large"></i><div class="content">%data%</div></div>';
var HTMLblog = '<div class="item"><i class="at icon large"></i><div class="content">%data%</div></div>';
var HTMLlocation = '<div class="item"><i class="marker icon large"></i><div class="content">%data%</div></div>';
var HTMLbioPic = '<div class="ui medium image rounded circular left floated four wide column"><img src="%data%" alt="Bio Picture"></div>';
var HTMLwelcomeMsg = '<span class="welcome-message item">%data%</span>';
var HTMLbioStart = '<div class="content nine wide column" id="profile"></div>';
var HTMLskillsStart = '<h3>Skills at a Glance:</h3><ul id="skills" class="ui list""></ul>';
var HTMLskills = '<div class="item"><i class="checkmark box icon"></i><div class="content">%data%</div></div>';
var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';	
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<a href="" class="ui medium image bordered"><img src="%data%"></a>';
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';
var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';
var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
	$('button').click(function() {
		var iName = inName(bio.name) || function(){};
		$('#name').html(iName);	
	});
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];
function logClicks(x,y) {
	clickLocations.push(
		{
			x: x,
			y: y
		}
	);
	console.log('x location: ' + x + '; y location: ' + y);
}
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});
/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;		// declares a global map variable
/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {
	var locations;
	var mapOptions = {
		disableDefaultUI: false
	};
	/* 
	For the map to be displayed, the googleMap var must be
	appended to #mapDiv in resumeBuilder.js. 
	*/
	map = new google.maps.Map(document.querySelector('#map'), mapOptions);
	/*
	locationFinder() returns an array of every location string from the JSONs
	written for bio, education, and work.
	*/
	function locationFinder() {
		// initializes an empty array
		var locations = [];
		// adds the single location property from bio to the locations array
		locations.push(bio.contacts.location);
		// iterates through school locations and appends each location to
		// the locations array
		for (var school in education.schools) {
			if( education.schools.hasOwnProperty(school)) {
				locations.push(education.schools[school].location);
			}
		}
		// iterates through work locations and appends each location to
		// the locations array
		for (var job in work.jobs) {
			if(work.jobs.hasOwnProperty(job)) {
				locations.push(work.jobs[job].location);
			}
		}
		return locations;
	}
	/*
	createMapMarker(placeData) reads Google Places search results to create map pins.
	placeData is the object returned from search results containing information
	about a single location.
	*/
	function createMapMarker(placeData) {
		// The next lines save location data from the search result object to local variables
		var lat = placeData.geometry.location.lat();	// latitude from the place service
		var lon = placeData.geometry.location.lng();	// longitude from the place service
		var name = placeData.formatted_address;	 // name of the place from the place service
		var bounds = window.mapBounds;						// current boundaries of the map window
		// marker is an object with additional data about the pin for a single location
		var marker = new google.maps.Marker({
			map: map,
			position: placeData.geometry.location,
			title: name
		});
		// infoWindows are the little helper windows that open when you click
		// or hover over a pin on a map. They usually contain more information
		// about a location.
		var infoWindow = new google.maps.InfoWindow({
			content: name
		});
		// hmmmm, I wonder what this is about...
		google.maps.event.addListener(marker, 'click', function() {
		map.setZoom(18);
		map.setCenter(marker.getPosition());
		});
		// this is where the pin actually gets added to the map.
		// bounds.extend() takes in a map location object
		bounds.extend(new google.maps.LatLng(lat, lon));
		// fit the map to the new marker
		map.fitBounds(bounds);
		// center the map
		map.setCenter(bounds.getCenter());
	}
	/*
	callback(results, status) makes sure the search returned results for a location.
	If so, it creates a new map marker for that location.
	*/
	function callback(results, status) {
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			createMapMarker(results[0]);
		}
	}
	/*
	pinPoster(locations) takes in the array of locations created by locationFinder()
	and fires off Google place searches for each location
	*/
	function pinPoster(locations) {
		// creates a Google place search service object. PlacesService does the work of
		// actually searching for location data.
		var service = new google.maps.places.PlacesService(map);
		// Iterates through the array of locations, creates a search object for each location
		for (var place in locations) {
			if (locations.hasOwnProperty(place)) {
				// the search request object
				var request = {
				query: locations[place]
				};
			}
			// Actually searches the Google Maps API for location data and runs the callback
			// function with the search results after each search.
			service.textSearch(request, callback);
		}
	}
	// Sets the boundaries of the map based on pin locations
	window.mapBounds = new google.maps.LatLngBounds();
	// locations is an array of location strings returned from locationFinder()
	locations = locationFinder();
	// pinPoster(locations) creates pins on the map for each location in
	// the locations array
	pinPoster(locations);
}
/*
Uncomment the code below when you're ready to implement a Google Map!
*/
// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);
// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
	//Make sure the map bounds get updated on page resize
	map.fitBounds(mapBounds);
});