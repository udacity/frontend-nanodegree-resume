/*
This is empty on purpose! Your code to build the resume will go here.
 */

var skills = ["javascript", "css", "HTML", "PHP", "drupal"];

// javascript object
var bio = {
"name" :  "Alexander Brown",
"role" : "Web Developer",

"contacts" : {
"mobile" : "07793749873",
"email" : "test@test.com",
"github" :   "datadev23",
"location": "Brighton",

"welcome" : "Hello how are you",
"location" : "Hove"

} ,
"skills" : skills,
"picture" : "images/alex.jpg",
}

var work = {
  "jobs" : [
  {
    
       "position" : "Web Developer",
       "employer" : "Healthwareweb",
       "attended" : "2014",
       "location" : "Brighton",
       "description" : "Drupal based role managing the RealGap travel website."
    },
    {
       "position" : "Digital exec",
       "employer" : "TUI",
       "attended" : "2014",
       "location" : "Chichester",
       "description" : "Drupal based role managing the RealGap travel website."
    }
    ]
  };




var education = {
    "schools": [
        {
            "name": "City University",
            "location": "London",
            "degree": "Computer Science",
             "major" : "cs",
            "dates": "2012",
            "url" : "info"
            
           
            

        },

        {
            "name": "Essex University",
            "location": "Colchester",
             "degree": "Computer Science",
               "major" : "cs",
             "dates": "2012",
            
            "url" : "info"
       
        }



    ],


    "onlineCourses": [
     {

      "title" : " Front-End Web Developer Nanodegree",
      "school" : "Udacity",
      "date" : 2017,
      "url": "https://classroom.udacity.com/nanodegrees/nd001/syllabus"


     }


    ]


};

var projectImages = []
var project = {

projects : [
{
"title" : "project one",
"dates" : 2016,
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
"image" : "images/project.jpg"
}
]


};


var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr>';
var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';
var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var formattedName =HTMLheaderName.replace("%data%", bio.name) ;
var formattedRole =HTMLheaderRole.replace("%data%", bio.role) ;
var formatedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formatedEmail= HTMLemail.replace("%data%",bio.contacts.email);
var formatedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
var formattedBiopic = HTMLbioPic.replace('%data%', bio.picture);
var HTMLformattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.contacts.welcome);
var formattedSkills = HTMLskills.replace('%data%', bio.skills);

// Employmet details


var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

// Online course details
var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';
// Eduation details

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

// Project

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';



$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);


// Bio info

$("#topContacts").append(formatedMobile);
$("#topContacts").append(formatedEmail);
$("#topContacts").append(formatedGithub);
$("#topContacts").append(formattedLocation);
$('#topContacts').prepend(formatedGithub);
$('#topContacts').prepend(formattedBiopic);
$('#topContacts').prepend(HTMLformattedWelcomeMsg);
$("#topContacts").append(HTMLskillsStart);
$("#topContacts").append(formattedSkills);



alert(work.jobs[0].position);
// Work Experience
function displayWork() {
    var key = 0
    for(key in work.jobs) {


    $('#workExperience').append(HTMLworkStart);
        var formattedWorkemployerPosition = HTMLworkTitle.replace('%data%', work.jobs[key].position);
             var formattedWorkemployer = HTMLworkEmployer.replace('%data%', work.jobs[key].employer);
        //alert("what value" +  formattedWorkemployerPosition);
    $('.work-entry:last').append(formattedWorkemployer + formattedWorkemployerPosition)
   
        var formattedWorkDated = HTMLworkDates.replace('%data%', work.jobs[key].attended);
    $('.work-entry:last').append(formattedWorkDated)
        var formattedWorkemployerLocation = HTMLworkLocation.replace('%data%', work.jobs[key].location);
    $('.work-entry:last').append(formattedWorkemployerLocation)
    var formattedWorkemployerDescription = HTMLprojectDescription.replace('%data%', work.jobs[key].description);
    $('.work-entry:last').append(formattedWorkemployerDescription)
    }


}

displayWork();


function displayProject() {
// project
 var key = 0;
    for(key in project.projects) {
     alert(key + " " + project.projects[key].title);
     $('#projects').append(HTMLprojectStart);

           var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.projects[key].title);


    $('.project-entry').append(formattedProjectTitle)
      
      var formattedProjectDates = HTMLprojectDates.replace('%data%', project.projects[key].dates);


    $('.project-entry').append(formattedProjectDates)

           var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.projects[key].description);

    $('.project-entry').append(formattedProjectDescription)

           var formattedProjectImage = HTMLprojectImage.replace('%data%', project.projects[key].image);

    $('.project-entry').append(formattedProjectImage)



    }

}


// Education

function displayEducation()
{

var  key =0;
var counter = 0;
for(key in education.schools) {
alert(key + " " + education.schools[key].name);



$('#education').append(HTMLschoolStart);
        
         var formattedEducationDegree= HTMLschoolDegree.replace('%data%', education.schools[key].degree); 
      var formattedEducationName= HTMLschoolName.replace('%data%', education.schools[key].name);
      $('.education-entry:last').append(formattedEducationName + formattedEducationDegree);
          var formattedEducationDate= HTMLschoolDates.replace('%data%', education.schools[key].dates);
      $('.education-entry:last').append(formattedEducationDate);
      var formattedEducationLocation= HTMLschoolLocation.replace('%data%', education.schools[key].location);
      $('.education-entry:last').append(formattedEducationLocation)

   

      var formattedEducationMajor= HTMLschoolMajor.replace('%data%', education.schools[key].major);
      $('.education-entry:last').append(formattedEducationMajor);


  

      



}

for(key in education.onlineCourses) {
alert(key + " " + education.onlineCourses[key].name);



//$('#education').append(HTMLonlineClasses);

      var formattedEducationOnlineName= HTMLonlineTitle.replace('%data%', education.onlineCourses[key].title);

      var formattedEducationOnlineSchool= HTMLonlineSchool.replace('%data%', education.onlineCourses[key].school);
      $('.education-entry:last').append(formattedEducationOnlineName + formattedEducationOnlineSchool);

 
      var formattedEducationOnlineDate= HTMLonlineDates.replace('%data%', education.onlineCourses[key].date);
      $('.education-entry:last').append(formattedEducationOnlineDate);

      var formattedEducationOnlineUrl= HTMLonlineURL.replace('%data%', education.onlineCourses[key].url);
      $('.education-entry:last').append(formattedEducationOnlineUrl);


 



}

}


displayProject();
displayEducation();





// only run code for skills if there are skill that are on the page
// store results in an array

var locations = [];
function locationlizer(work) {
var key = 0;
    for(key in work.details) {
        if(key == "location")
        {
       // alert(work.details[key]);
        locations.push(work.details[key]);
        }

    }

}

locationlizer(work);
var internationalizeButton = '<button>Internationalize</button>';

$('#main').append(internationalizeButton);
$('#footerContacts').append(formatedMobile);
$('#footerContacts').append(formatedEmail);
$('#footerContacts').append(formatedGithub);
$("#footerContacts").append(formattedLocation);
$('#footerContacts').append(formatedMobile);

$('button').click(function() {

inName(bio);

});

function inName(bio) {

alert(bio.name);

var name = bio.name.trim();
var res = name.split(" ");
firstname = res[0].substring(1,res[0]).toUpperCase() + res[0].substring(1).toLowerCase();
lastname = res[1].toUpperCase();
alert(firstname);
var comebinedname = firstname  + " " +  lastname;
alert (comebinedname);

}

// create a display function of project

project.display = function(project) {

return (project.projects.title);

}

$("#mapDiv").append(googleMap);


