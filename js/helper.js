var HTMLheaderName = "<h1 id='name'>%data%</h1>";
var HTMLheaderRole = "<span class='purple'>%data%</span><hr/>";
var HTMLNavBar     = "<nav class='flex-box'><ul><li class='flex-item'><a href='#workExperience'>Work</a></li><li class='flex-item'><a id='navProjects' href='#projects'>Projects</a></li><li class='flex-item'><a href='#education'>Education</a></li></ul></nav>";

var HTMLcontactGeneric = "<li class='flex-item'><span class='orange-text'>%contact%</span><span class='white-text'>%data%</span></li>";
var HTMLmobile = "<li class='flex-item'><span class='orange-text'>mobile</span><span class='white-text'>%data%</span></li>";
var HTMLemail = "<li class='flex-item'><span class='orange-text'>email</span><span class='white-text'>%data%</span></li>";
var HTMLtwitter = "<li class='flex-item'><span class='orange-text'>twitter</span><span class='white-text'>%data%</span></li>";
var HTMLgithub = "<li class='flex-item'><span class='orange-text'>github</span><span class='white-text'>%data%</span></li>";
var HTMLblog = "<li class='flex-item'><span class='orange-text'>blog</span><span class='white-text'>%data%</span></li>";
var HTMLlocation = "<li class='flex-item'><span class='orange-text'>location</span><span class='white-text'>%data%</span></li>";

var HTMLbioPic = "<img src='%data%' class='biopic'>";
var HTMLWelcomeMsg = "<span class='welcome-message'>%data%</span>";

var HTMLskillsStart = "<h3 id='skillsH3'>Skills at a Glance:</h3><ul id='skills' class='flex-box'></ul>";
var HTMLskills = "<li class='flex-item'><span class='white-text'>%data%</span></li>";

var HTMLworkStart = "<div class='work-entry'></div>";
var HTMLworkEmployer = "<p class='company'>%data%";
var HTMLworkTitle = " - %data%</p>";
var HTMLworkDates = "<div class='date-text'>%data%</div>";
var HTMLworkLocation = "<div class='location-text'>%data%</div>";
var HTMLworkDescription = "<p><br>%data%</p>";

var HTMLprojectStart = "<div class='project-entry'></div>";
var HTMLprojectFlex = "<div class='flex-projects'></div>";
var HTMLprojectTitle = "<a href='#' target='_blank'>%data%</a>";
var HTMLprojectDates = "<div class='date-text'>%data%</div>";
var HTMLprojectDescription = "<p><br>%data%<a class='github-icon' href='#' target='_blank'>Github Repo<img class='github-icon'></a></p>";
/*
<svg height='10' width='10' xmlns='http://www.w3.org/2000/svg'><path d='M512 0C229.252 0 0 229.25199999999995 0 512c0 226.251 146.688 418.126 350.155 485.813 25.593 4.686 34.937-11.125 34.937-24.626 0-12.188-0.469-52.562-0.718-95.314-128.708 23.46-161.707-31.541-172.469-60.373-5.525-14.809-30.407-60.249-52.398-72.263-17.988-9.828-43.26-33.237-0.917-33.735 40.434-0.476 69.348 37.308 78.471 52.75 45.938 77.749 119.876 55.627 148.999 42.5 4.654-32.999 17.902-55.627 32.501-68.373-113.657-12.939-233.22-56.875-233.22-253.063 0-55.94 19.968-101.561 52.658-137.404-5.22-12.999-22.844-65.095 5.063-135.563 0 0 42.937-13.749 140.811 52.501 40.811-11.406 84.594-17.031 128.124-17.22 43.499 0.188 87.314 5.874 128.188 17.28 97.689-66.311 140.686-52.501 140.686-52.501 28 70.532 10.375 122.564 5.124 135.499 32.811 35.844 52.626 81.468 52.626 137.404 0 196.686-119.751 240-233.813 252.686 18.439 15.876 34.748 47.001 34.748 94.748 0 68.437-0.686 123.627-0.686 140.501 0 13.625 9.312 29.561 35.25 24.562C877.436 929.998 1024 738.126 1024 512 1024 229.25199999999995 794.748 0 512 0z' /></svg>

<svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path class='github-icon' d='M512 0C229.252 0 0 229.25199999999995 0 512c0 226.251 146.688 418.126 350.155 485.813 25.593 4.686 34.937-11.125 34.937-24.626 0-12.188-0.469-52.562-0.718-95.314-128.708 23.46-161.707-31.541-172.469-60.373-5.525-14.809-30.407-60.249-52.398-72.263-17.988-9.828-43.26-33.237-0.917-33.735 40.434-0.476 69.348 37.308 78.471 52.75 45.938 77.749 119.876 55.627 148.999 42.5 4.654-32.999 17.902-55.627 32.501-68.373-113.657-12.939-233.22-56.875-233.22-253.063 0-55.94 19.968-101.561 52.658-137.404-5.22-12.999-22.844-65.095 5.063-135.563 0 0 42.937-13.749 140.811 52.501 40.811-11.406 84.594-17.031 128.124-17.22 43.499 0.188 87.314 5.874 128.188 17.28 97.689-66.311 140.686-52.501 140.686-52.501 28 70.532 10.375 122.564 5.124 135.499 32.811 35.844 52.626 81.468 52.626 137.404 0 196.686-119.751 240-233.813 252.686 18.439 15.876 34.748 47.001 34.748 94.748 0 68.437-0.686 123.627-0.686 140.501 0 13.625 9.312 29.561 35.25 24.562C877.436 929.998 1024 738.126 1024 512 1024 229.25199999999995 794.748 0 512 0z' /></svg>
*/
var HTMLprojectImage = "<a href='#' target='_blank'><img src='%data%'></a>";

var HTMLschoolStart = "<div class='education-entry'></div>";
var HTMLschoolName = "<a href='#' target='_blank'>%data%";
var HTMLschoolDegree = " -- %data%</a>";
var HTMLschoolDates = "<div class='date-text'>%data%</div>";
var HTMLschoolLocation = "<div class='location-text'>%data%</div>";
var HTMLschoolMajor = "<em><br>Major: %data%</em>";

var HTMLonlineClasses = "<h3>Online Classes</h3>";
var HTMLonlineTitle = "<a href='#'>%data%";
var HTMLonlineSchool = " - %data%</a>";
var HTMLonlineDates = "<div class='date-text'>%data%</div>";
var HTMLonlineURL = "<br><a href='#'>%data%</a>";

var internationalizeButton = "<button>Internationalize</button>";
var googleMap = "<div id='map'></div>";


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/

$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.

clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      "x": x,
      "y": y
    }
  );
  console.log("x location: " + x + "; y location: " + y);
}

$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});
*/

var map;    // declares a global map variable

function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);
  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];
    // var locationContent = []; Trying to append Content dependent on location

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);
    // locationContent.push("Home"); Trying to append Content dependent on location

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
      // locationContent.push(educationMap[school]);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
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
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.name;   // name of the place from the place service
    console.log(name);
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

    // Closes the window if clicked somewhere else on the map
    google.maps.event.addListener(map, 'click', function(){
      infoWindow.close();
    });
    // On click opens infowindow
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map,marker);
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

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
