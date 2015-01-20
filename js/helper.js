/*
This file contains all of the code running in the background that makes resumeBuilder.js
possible. We call these helper functions because they support your code.
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions to
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="grey-text" id="role">%data%</span>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="grey-text">%contact%</span><span>%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="grey-text"><i class="fa fa-phone"></i></span><span>%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="grey-text"><i class="fa fa-envelope"></i></span><span>%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="grey-text"><i class="fa fa-twitter"></i></span><span>%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="grey-text"><i class="fa fa-github-alt"></i></span><span>%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="grey-text">blog</span><span>%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="grey-text"><i class="fa fa-home"></i></span><span>%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic" alt="Resume photo">';
var HTMLWelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<div class="skills-box"><h3 id="skillsH3">Skills at a glance</h3><ul id="skills"></ul></div>';
var HTMLskills = '<li><i class="fa fa-check"></i>%data%</li>';

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
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="%url%">%data%';
var HTMLschoolDegree = ' - %data%</a>';
var HTMLschoolDates = '<div class="date-text grey-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="%url%">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
// var HTMLonlineURL = '<br><a href="%url%">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The next few lines about clicks are for the Collecting Click Locations.
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
	logClicks(loc.pageX, loc.pageY);
});


/*
Generates the custom Google Map for the website.
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

	var locations;

	var mapOptions = {
		disableDefaultUI: true
	};

	// This next line makes `map` a new Google Map JavaScript Object and attaches it to
	// <div id="map">, which is appended as part of an exercise late in the course.
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

		// iterates through school locations and appends each location to the locations array
		for (var school in education.schools) {
			locations.push(education.schools[school].location);
		}

		// iterates through work locations and appends each location to
		// the locations array
		for (var job in work.jobs) {
			if (work.jobs[job].location !== "Classified") {
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
		var lat = placeData.geometry.location.k;  // latitude from the place service
		var lon = placeData.geometry.location.D;  // longitude from the place service
		var name = placeData.formatted_address;   // name of the place from the place service
		var bounds = window.mapBounds;            // current boundaries of the map window

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

			// your code goes here!
			infoWindow.open(map, marker);
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

		  // the search request object
			var request = {
				query: locations[place]
		  	};

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
// setTimeout is so that page loads smoothly before map.
window.addEventListener('load', function() {
	window.setTimeout(initializeMap, 2000);
});


// Vanilla JS way to listen for resizing of the window and adjust map bounds
// Again, using setTimeout to improve page performance.
window.addEventListener('resize', function(e) {
	var eventArray = [];
	var delayer;
	eventArray.push(e);

	if (eventArray.length > 0) {
		window.setTimeout(function(eObj) {
			var eObj = eventArray.pop(e);
			eventArray = [];

			// Make sure the map bounds get updated on page resize
			map.fitBounds(mapBounds);
		}, 2000);
	}
});
