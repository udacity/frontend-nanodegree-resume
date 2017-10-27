import Profile from '../one'
export default function createMap(){
    let map, 
        service, 
        infowindow,
        locations;
        locations = locationFinder();
        map = new google.maps.Map(document.getElementById('map'), {
            // center: "Rotterdam",
            // zoom: 15
        });

        function locationFinder() {
            
                // initializes an empty array
                let locations = [];
            
                // adds the single location property from bio to the locations array
                locations.push(Profile.bio.contacts[4].location);

                Profile.schools.forEach(school=>{
                    if (!locations.includes(school.location)){
                      locations.push(school.location);
                    }
                });
                // iterates through work locations and appends each location to
                // the locations array
                Profile.jobs.forEach(job=>{
                    if(!locations.includes(job.location)){
                        locations.push(job.location);
                    }
                });
                
                return locations;
        }

        function createMarker(placeData) {
            
                // The next lines save location data from the search result object to local variables
                var lat = placeData.geometry.location.lat();  // latitude from the place service
                var lon = placeData.geometry.location.lng();  // longitude from the place service
                var name = placeData.name;   // name of the place from the place service
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

        function pinPoster(locations) {
            
                // creates a Google place search service object. PlacesService does the work of
                // actually searching for location data.
                var service = new google.maps.places.PlacesService(map);
            
                // Iterates through the array of locations, creates a search object for each location
                locations.forEach(place =>{

                    // the search request object
                    var request = {
                      query: place
                    };
              
                    // Actually searches the Google Maps API for location data and runs the callback
                    // function with the search results after each search.
                    service.textSearch(request, callback);
                  }
                );
                function callback(results, status){
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        createMarker(results[0]);
                    }
                }
        }
        pinPoster(locations);
          // Sets the boundaries of the map based on pin locations
        window.mapBounds = new google.maps.LatLngBounds();
}