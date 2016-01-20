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
"picture" : "images/fry.jpg",
}

var work ={
"employer" : {
"position" : "Web Developer",
"employer" : "TUI",
"attended" : "2014",
"location" : "Brighton",
"description" : "Drupal based role managing the RealGap travel website."

}

};


var education = {
    "schools": [
        {
            "name": "city University",
            "city": "London",
            "major": "Computer Science",
            "graduation": "2012"

        },

        {
            "name": "Essex University",
            "city": "Colchester",
            "major": "Computer Science",
            "graduation": "2013"
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
var formatedMobile = HTMLmobile.replace("%data%",bio.contacts['mobile']);
var formatedEmail= HTMLemail.replace("%data%",bio.contacts['email']);
var formatedGithub = HTMLgithub.replace('%data%', bio.contacts['github']);
var formattedLocation = HTMLlocation.replace('%data%', bio.contacts['location']);
var formattedBiopic = HTMLbioPic.replace('%data%', bio.picture);
var HTMLformattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.contacts['welcome']);
var formattedSkills = HTMLskills.replace('%data%', bio.skills);

// Employmet details


var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';


var formattedWorkemployer = HTMLworkEmployer.replace('%data%', work.employer['employer']);
var formattedWorkemployerPosition = HTMLworkTitle.replace('%data%', work.employer['position']);
var formattedWorkemployerDates = HTMLworkDates.replace('%data%', work.employer['attended']);
var formattedWorkemployerLocation = HTMLworkLocation.replace('%data%', work.employer['location']);
var formattedWorkemployerDescription = HTMLworkDescription.replace('%data%', work.employer['description']);

//alert(work.employer['position']);


$("#header").append(formattedName);
$("#header").append(formattedRole);


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

// Work Experience
$('#workExperience').append(HTMLworkStart);
$('#workExperience').append(formattedWorkemployer);
$('#workExperience').append(formattedWorkemployerPosition);
$('#workExperience').append(formattedWorkemployerDates);
$('#workExperience').append(formattedWorkemployerLocation);
$('#workExperience').append(formattedWorkemployerDescription);

// Education