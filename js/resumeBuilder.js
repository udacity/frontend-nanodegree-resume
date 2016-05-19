/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work ={

	"employer":"Jabil",
	"title":"Engineer",
	"location":"Guangzhou, Guangdong Province, CHINA",
	"dates":"2007-2009",
  "description":"This is an awesome experience as an engineer there. I worked on desinging the assembly process and SMT."
};

var projects ={

	"title": "Machine Learning Nano Degree",
	"dates":"2015.06- Present",
	"description":"This is a nano degree project i've engaged work."
};

var bio ={

	"name": "Fish Wang",
	"role": "Web Developer",
	"welcomeMessage":"hi",
	"contacts": {"Tel":"123112313" , "Email":"asdfdsa@ads.com" ,"Location":"Guangzhou,Guangdong"}

};

var education ={

	"schools": [{
          "name":"Guangdong University of Technology",
          "location":"Guangzhou, Guangdong Province, CHINA",
          "degree": "Bachelor",
          "major": "Mechanical Engineering",
          "dates":"2003.09 - 2007.07",
          "schoolURL":"www.gdut.edu.cn"
	}],

	"onlineCourses":[{

		"title":"Machine Learning",
		"school":"Georgia Institute of Technology",
		"dates":"2015 - 2016",
		"courseURL":"www.udacity.com"

	}]

};

if (bio.length !== 0){

  var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
  $("#header").append(formattedName);

  var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
  $("#header").append(formattedRole);

//work on contacts

  contacts = bio["contacts"];
  for (var key in contacts){

    if (contacts.hasOwnProperty(key)){

      var formattedContact = HTMLcontactGeneric.replace("%contact%",key);
      formattedContact = formattedContact.replace("%data%", contacts[key]);
      $("#topContacts").append(formattedContact);
      $("#footerContacts").append(formattedContact);
    }
  }// contacts loop
 
}// if bio statement

if (work.length !== 0){
  var formattedWork ="";

  var formatttedEmployer = HTMLworkEmployer.replace("%data%",work["employer"]);
  var formattedTitle = HTMLworkTitle.replace("%data%",work["title"]);
  var formattedDates = HTMLworkDates.replace("%data%",work["dates"]);
  var formatedLocation = HTMLworkLocation.replace("%data%",work["location"]);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.description)

  formattedWork = HTMLworkStart+formatttedEmployer+formattedTitle+formattedDates+formatedLocation +formattedDescription;

  $("#workExperience").children().append(formattedWork);
 
}// end of work


if (projects.length !==0){

  var formattedProject =""
  var formattedTitle = HTMLprojectTitle.replace("%data%",projects.title);
  var formattedDates = HTMLprojectDates.replace("%data%",projects.dates);
  var formattedDescription = HTMLprojectDescription.replace("%data%",projects.description);

  formattedProject = HTMLprojectStart + formattedTitle +formattedDates + formattedDescription;

  $("#projects").children().append(formattedProject);

};


if (education !== 0){

    var schools = education.schools;

    if (schools.length !==0){
        schools.forEach(function(val){
            var formattedSchool = "";
            for (key in val){
                if (key === "name"){ 
                  var formattedSchoolName = HTMLschoolName.replace("%data%",val.name);
                  continue;
                } else if (key === "degree"){ 
                  var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",val.degree);
                  continue;
                } else if (key === "dates"){ 
                  var formattedSchoolDates = HTMLschoolDates.replace("%data%",val.dates);
                  continue;
                } else if (key === "location"){
                 var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",val[key]);
                 continue;
                } else if (key === "major") {
                 var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",val[key]);
                }
             };// end for loop
         formattedSchool = HTMLschoolStart + formattedSchoolName+
                        formattedSchoolDegree+formattedSchoolDates+
                        formattedSchoolLocation +formattedSchoolMajor;

         $("#education").children().append(formattedSchool);
    
       }); //end forEach
    } // end of schools

    
    
    onlineCourses = education.onlineCourses;
    if (onlineCourses.length !== 0){

      onlineCourses.forEach(function(val){
            var formattedOnline = "";
            for (key in val){
                if (key === "title"){ 
                  var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",val[key]);
                  continue;
                } else if (key === "school"){ 
                  var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",val[key]);
                  continue;
                } else if (key === "dates"){ 
                  var formattedOnlineDates = HTMLonlineDates.replace("%data%",val[key]);
                  continue;
                } else if (key === "courseURL"){
                 var formattedOnlineURL = HTMLonlineURL.replace("%data%",val[key]);
                 continue;
                } 
             };// end for loop
         formattedOnline = HTMLonlineClasses + formattedOnlineTitle+
                        formattedOnlineSchool+formattedOnlineDates+
                        formattedOnlineURL;

         $("#education").children().append(formattedOnline);
    
       }); //end forEach
    } // end of schools



    } // if education.length !===0
