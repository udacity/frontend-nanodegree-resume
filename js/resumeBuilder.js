/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = [
      { 
      "employer":"Jabil",
      "title":"Engineer",
      "location":"Guangzhou, Guangdong Province, CHINA",
      "dates":"2007-2009",
      "description":"This is an awesome experience as an engineer there. I worked on desinging the assembly process and SMT."
      }
    ];


var projects =[{

  "title": "Machine Learning Nano Degree",
  "dates":"2015.06- Present",
  "description":"This is a nano degree project i've engaged work."

     }]



var bio ={
	"name": "Fish Wang",
	"role": "Web Developer",
	"welcomeMessage":"Hi there, how are you doing today?",
	"contacts": {"Tel":"123112313" , "Email":"asdfdsa@ads.com" ,"Location":"Guangzhou,Guangdong"},
  "skills":["Excel","SolidWorks","Javascript","Python","Machine Learning","Front End Development"],
  "biopic": "url"

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



var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';
// bio 
if (bio.length !== 0){

    var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
    $("#header").append(formattedName);

    var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
    $("#header").append(formattedRole);

    var formattedSkills ="";
    
    bio["skills"].forEach(function(skill){

           formattedSkills = formattedSkills.concat(HTMLskills.replace("%data%",skill)) ;

        });

    formattedSkills = HTMLskillsStart + formattedSkills;
    console.log(formattedSkills);

    $("#header").append(formattedSkills);

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

    work.forEach(function(val){

       for (key in val){
            var formattedWork ="";

            if (key == "employer"){
                var formatttedEmployer = HTMLworkEmployer.replace("%data%",val["employer"]);
                continue;
            }else if (key === "title"){
               var formattedTitle = HTMLworkTitle.replace("%data%",val["title"]);
                continue;
            }else if (key==="dates"){
            var formattedDates = HTMLworkDates.replace("%data%",val["dates"]);
             continue;
            }else if (key =="location") {
              var formatedLocation = HTMLworkLocation.replace("%data%",val["location"]);
               continue;
            }else if(key =="description") {
            var formattedDescription = HTMLworkDescription.replace("%data%", val.description);
             continue;
            }

       }// for loop   
    
    formattedWork = HTMLworkStart+formatttedEmployer+formattedTitle+formattedDates+formatedLocation +formattedDescription;

    $("#workExperience").children().append(formattedWork);

    })// forEach loop

}// end of work



// var projects =[{

//   "title": "Machine Learning Nano Degree",
//   "dates":"2015.06- Present",
//   "description":"This is a nano degree project i've engaged work."

//      }]

// project

if (projects.length !==0){

    projects.forEach(function(project){

        var formattedProject =""

        for (key in project) {
            if (key ==="title"){

                 var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
            }else if(key ==="dates") {
                 var formattedDates = HTMLprojectDates.replace("%data%",project.dates);
            }else if(key === "description") {
                 var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
            }

        }// end for loop

       formattedProject = HTMLprojectStart + formattedTitle +formattedDates + formattedDescription;

       $("#projects").children().append(formattedProject);

    }) // end forEach

};


// education

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
