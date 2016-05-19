/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work ={

	"employer":"Jabil",
	"title":"Engineer",
	"location":"GZ",
	"dates":"2007-2009"
};

var projects ={

	"title": "ML",
	"dates":"2016",
	"description":"This is a nano degree project i've pay a lot of work."
};

var bio ={

	"name": "Fish Wang",
	"role": "Web Developer",
	"welcomeMessage":"hi",
	"contacts": {"Tel":"123112313" , "Email":"asdfdsa@ads.com" ,"Location":"GZ"}

};

var education ={

	"schools": [{
          "name":"gdut",
          "location":"gz",
          "degree": "BS",
          "majors": "Machine",

          "schoolURL":"www.gdut.edu.cn"
	}],

	"onlineCourses":[{

		"title":"ML",
		"school":"GT",
		"dates":"2015",
		"courseURL":"www.udacity.com"

	}]

};

if (bio.length != 0){

  var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
  $("#header").append(formattedName);

  var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
  $("#header").append(formattedRole);

  contacts = bio["contacts"];
  for (var key in contacts){

    if (contacts.hasOwnProperty(key)){

      var formattedContact = HTMLcontactGeneric.replace("%contact%",key);
      formattedContact = formattedContact.replace("%data%", contacts[key]);
      $("#topContacts").append(formattedContact);
    }
  }// contacts loop
 
}// if bio statement

// if (work.length !=0){
//   var formattedWork ="";

//   var formatttedEmployer = HTMLworkEmployer.replace("%data%",work["employer"]);
//   var formattedTitle = HTMLworkTitle.replace("%data%",work["title"]);
//   var formattedDates = HTMLworkDates.replace("%data%",work["dates"]);
//   var formatedLocation = HTMLworkLocation.replace("%data%",work["location"]);

//   formattedWork = HTMLworkStart+formatttedEmployer+formattedTitle+formattedDates+formatedLocation;

//   $("#workExperience").append(formattedWork);

 
// }

