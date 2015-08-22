var name = "Ilyse B. Kramer";
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);
var role = "Web Developer";
var HTMLheaderRole = '<span>%data%</span><hr/>';
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);

var bio = {
	"name" : "Ilyse B. Kramer",
	"role" : "Web Developer",
	"contacts": {
		"mobile" : "267-918-4883",
		"email" : "ilykramer@gmail.com",
		"github" : "IlyKramer",
		"twitter" : "@edgyamelia",
		"blog" : "www.edgyamelia.wordpress.com",
		"location" : "Washington, DC"
	
	},
		"welcomeMesssage" : "information services professional seeking career as front-end web developer",
		"skills": [
			"Git", "HTML", "CSS", "JavaScript" 
		],
		"bioPic": "images/bioPic.png"
	}
	
	
	var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
	var formattedmobile = HTMLmobile.replace("%data%", "267-918-4883");
	$("#header").append(formattedmobile);

	
	var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
	var formattedemail = HTMLemail.replace("%data%", "ilykramer@gmail.com");
	$("#header").append(formattedemail);

	
	var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
	var formattedgithub = HTMLgithub.replace("%data%", "IlyKramer");
	$("#header").append(formattedgithub);
	
	var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
	var formattedtwitter = HTMLtwitter.replace("%data%", "@edgyamelia");
	$("#header").append(formattedtwitter);
	
	var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
	var formattedblog = HTMLblog.replace("%data%", "www.edgyamelia.wordpress.com");
	$("#header").append(formattedblog);
	
	var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';
	var formattedlocation = HTMLlocation.replace("%data%", "Washington, DC");
	$("#header").append(formattedlocation);

	var HTMLbioPic = '<img src="%data%" class="biopic">';
	var formattedbioPic = HTMLbioPic.replace("%data%", "images/bioPic.png");
	$("#header").append(formattedbioPic);
	
	var HTMLWelcomeMsg = '<span class="welcome-message">%data%</span>';
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", "information services professional seeking career as front-end web developer");
	$("#header").append(formattedWelcomeMsg);

	var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
	var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
	}
	var work = {
		"jobs": [
			{
				"employer": "The Arc",
				"title": "Associate",
				"location": "Washington, DC",
				"dates": "November, 2013 - present",
				"description": "Update web pages, coordinate and execute special events, and provide digital and in-person professional development resources to support the nearly 700 chapters of the United States’ largest organization serving people with Intellectual and Developmental Disabilities."
			},
			{
				"employer": "Art Beyond Sight",
				"title": "Consultant",
				"dates": "November, 2014 - present",
				"location": "Washington, DC",
				"description": "Research, analyze, and propose technology solutions that will make art and cultural museums more accessible to people with disabilities"
			},
			{
				"employer": "American Institutes for Research",
				"title": "Consultant",
				"dates": "April, 2013 - October 2013",
				"location": "Washington, DC",
				"description": "Disseminated information for Model Systems Knowledge Translation Center, a National Institute on Disability and Rehabilitation Research (NIDRR) funded project that provides health information resources for people with Spinal Cord Injury (SCI), Traumatic Brain Injury (TBI), and Burn Injuries." 
			}
		]
	}
 function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);	
	}
}
displayWork();	
var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';		



var projects = {
	"projects": [
		{
			"title": "Member of Women Who Code, DC",
			"dates": "June 2015 - present",
			"description": "Participate in DC Chapter of national organization that provides women with programming skills to expand career opportunities",
			"images": "images/image.png"
		},
		{
			"title": "Code for DC",
			"dates": "June 2015-present",
			"description": "Participate in a non-partisan, non-political group of volunteer civic hackers working together to solve local issues and help people engage with DC.",
			"images":"images/image2.png"
		}
	]
};

projects.display = function () {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		} 
	}
}
		
			
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%" class="images/image.png">';
	
var education = {
	"schools": [
		{
			"name": "Udacity",
			"location": "https://www.udacity.com",	
			"degree": "Front-End Web Development Nanodegree",
			"dates": "June 2015-December 2015"
		},
		{
			"name": "University of Washington",
			"location": "Seattle, WA, USA",
			"degree": "Master's in Library Information Science, Master's in Public Administration",
			"dates": "2008-2011"
		},
		{
			"name": "Vassar College",
			"location": "Poughkeepsie, NY, USA",
			"degree": "BA in English Literature",
			"dates": "2004-2008"
		}
	
	]
}
	
function displayEducation() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);	
		$(".education-entry:last").append(formattedschoolName);	
		var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedschoolLocation);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedschoolDegree);
		var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedschoolDates);
		
	}
}
				 	
displayEducation();

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';



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
  // your code goes here!
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
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
      locations.push(education.schools[school].location);
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
//window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
//window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
//  map.fitBounds(mapBounds);
//});

