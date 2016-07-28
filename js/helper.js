// Variable Templates//
var HTMLheaderName = '<h1><a href="#">%data%</a></h1>';
var HTMLheaderRole = '<h2 class="tagline">%data%</h2>';
var HTMLbioPic = '<div class="bio-pic-cover"></div>';
var HTMLwelcomeMsg = '<p class="lighter">%data%</p>';
var HTMLprojectStart = '<div class="project-entry col-lg-4 col-md-4 col-sm-12 col-xs-12" data-toggle="modal" data-target="#modal-carousel" data-parent="#project-gallery"></div>';
var HTMLprojectCover = '<div class="project-bg-image"></div>';
var HTMLprojectSlide = '<div class="item project-carrousel"></div>';
var HTMLprojectImages = '<img src="%data%">';
var HTMLprojectTitle = '<h3>%data%</h3>';
var HTMLprojectDate = '<span>%data%</span>';
var HTMLprojectCategory = '<span><strong>%data%';
var HTMLprojectCompany = ' - %data%</strong></span> ';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkTitle = '<h3>%data%</h3>';
var HTMLworkEmployer = '%data%';
var HTMLworkDates = ' %data% </em>';
var HTMLworkLocation = '<p><em class="meta-info">%data%, ';
var HTMLworkDescription = ' %data%</p>';
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolDegree = '<h3>%data%</h3>';
var HTMLschoolName = ' %data%';
var HTMLschoolDates = '%data%</span>';
var HTMLschoolLocation = '<span>%data%, ';
var HTMLschoolMajor = ' <em>- Major in </em>';
var HTMLonlineClasses = '<span class="badge">Online Training</span>';
var HTMLonlineTitle = '<h3><a>%data% - ';
var HTMLonlineSchool = '%data%</a></h3>';
var HTMLonlineDates = '<span>%data%</span>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';
var HTMLcontactGeneric = '<ul class="contact-list"></ul>';
var HTMLemail = '<li><a>Email</a></li>';
var HTMLmobile = '<li>%data%</li>';
var HTMLtwitter = '<li><a>Twitter</a></li>';
var HTMLgithub = '<li><a>Github</a></li>';
var HTMLblog = '<li><a>Blog</a></li>';
var HTMLlocation = '<span class="subheader">Based in %data%</span>';
var googleMap = '<div id="map"></div>';
var internationalizeButton = '<button type="button" class="btn btn-info name-change">Try me!</button>';



/**
* @description Represents a google map object with the information pulled
* from the objects education, work and projects
* @return {object} google map object
*/

var map;

function initializeMap() {
    var infoWindow = new google.maps.InfoWindow({
        maxWidth: 250
    });
    var locations;
    var mapOptions = {
        disableDefaultUI: true
    };

    map = new google.maps.Map(document.querySelector('#map'), mapOptions);

    /**
    * @description Pull information from the objects education, work and projects
    * @return {array} locations - used to set the markers on the map
    */
    function locationFinder() {
      locations = [];
        education.schools.forEach(function (school) {
            if (locations.indexOf(school.location) === -1) {
                locations.push(school.location);
            }
        });
        education.onlineCourses.forEach(function (course) {
            if (locations.indexOf(course.school) === -1) {
                locations.push(course.school);
            }
        });
        work.jobs.forEach(function (job) {
            if (locations.indexOf(job.location) === -1) {
                locations.push(job.location);
            }
        });
        return locations;
    }

    /**
    * @description Pull information from the objects education, work and projects
    * @param {object} marker - location of the marker on the map
    * @return {string} detailsString - information to be displayed on the infoWindow
    */
    function findMarkerDetails(marker) {
        var details = [];
        var moreDetails = [];
        var detailsString;

        education.onlineCourses.forEach(function (course) {
            if (marker.title.indexOf(course.school) !== -1) {
                details.push(" " + course.title);
            }
        });
        education.schools.forEach(function (school) {
            if (marker.title === school.location) {
                details.push(" " + school.name);
            }
        });
        work.jobs.forEach(function (job) {
            if (marker.title === job.location) {
                details.push(" " + job.employer);
                projects.projects.forEach(function (project) {
                    if (project.company === job.employer) {
                        moreDetails.push('<img class="thumbail" src="' + project.images[0] + '">');
                    }
                });
            }
        });
        if (details === null) {
            alert("Places not found");
        } else {
            detailsString = "<p>" + details + "</p>" + moreDetails;
            return detailsString;
        }
    }

    /**
    * @description Create the markers on the map
    * @param {object} placeData - results from the callback function
    */

    function createMapMarker(placeData) {
        var lat = placeData.geometry.location.lat();  // latitude from the place service
        var lon = placeData.geometry.location.lng();  // longitude from the place service
        var name = placeData.name;   // name of the place from the place service
        var bounds = window.mapBounds;            // current boundaries of the map window
        var image = 'images/marker.png';
        var styles = [{
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "simplified"
            }]
        }];
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name,
            icon: image
        });
        var contentString = '<div><h4>' + name + '</h4>' + findMarkerDetails(marker) + '</div>';

        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.close();
            infoWindow.setContent(contentString);
            infoWindow.open(map, marker);
        });

        bounds.extend(new google.maps.LatLng(lat, lon));
        map.fitBounds(bounds);
        map.setCenter(bounds.getCenter());
        map.setOptions({styles: styles});
    }

    /**
    * @description Handle the results passed for pinPoster function
    * @param {object} results - locations found for Google Places Text Search
    * @param {value} status -  code for the status of the request
    * @return {array} pin - markers on the map used for createMapMarker function
    */
    function callback(results, status) {
        var resultsList = [];
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            resultsList.push(results[0]);
        }
        resultsList.forEach(function (pin) {
            createMapMarker(pin);
        });
    }

    /**
    * @description Represents a query to Google Places Text Search
    * @param {array} locations - pulled from the objects education, work
    * and projects by locationFinder function
    */
    function pinPoster(locations) {
        var service = new google.maps.places.PlacesService(map);
        locations.forEach(function (place) {
            var request = {
                query: place
            };
            service.textSearch(request, callback);
        });
    }


    window.mapBounds = new google.maps.LatLngBounds();
    locations = locationFinder();
    pinPoster(locations);
}

window.addEventListener('resize', function (e) {
 map.fitBounds(mapBounds);
});
