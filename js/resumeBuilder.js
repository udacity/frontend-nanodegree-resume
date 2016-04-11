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

var work ={
"details" : {
"position" : "Web Developer",
"employer" : "TUI",
"attended" : "2014",
"location" : "Brighton",
"description" : "Drupal based role managing the RealGap travel website."

},

"details" : {
"position" : "Web Developer",
"employer" : "TUI",
"attended" : "2014",
"location" : "Chichester",
"description" : "Drupal based role managing the RealGap travel website."

}

};


var education = {
    "schools": [
        {
            "name": "city University",
            "degree": "Computer Science",
            "graduation": "2012",
            "location": "London",
            "major" : "cs"
            

        },

        {
            "name": "Essex University",
             "degree": "Computer Science",
             "graduation": "2012",
            "location": "Colchester",
            "major" : "cs"
       
        }


    ]


};

var projectImages = []
var project = {

"projects" : {

"title" : "project one",
"completionDate" : 2016,
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}


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

// Eduation details

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

// Work replacement dot notation

var formattedWorkemployerPosition = HTMLworkTitle.replace('%data%', work.details.position);
var formattedWorkemployerDates = HTMLworkDates.replace('%data%', work.details.attended);
var formattedWorkemployerLocation = HTMLworkLocation.replace('%data%', work.details.location);
var formattedWorkemployerDescription = HTMLworkDescription.replace('%data%', work.details.description);

// Employment replacement
var formattedEducationschoolName = HTMLworkEmployer.replace('%data%', education.schools[1].name);
var formattedEducationschoolDegree = HTMLschoolDegree.replace('%data%', education.schools[1].degree);
var formattedEducationschoolDates = HTMLschoolDegree.replace('%data%', education.schools[1].graduation);
var formattedEducationschoolLocation = HTMLschoolDegree.replace('%data%', education.schools[1].location);
var formattedEducationschoolMajor = HTMLschoolDegree.replace('%data%', education.schools[1].major);


$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);


// Bio info
$("#topContacts").append(formatedMobile);
$("#topContacts").append(formatedEmail);
$("#topContacts").append(formatedGithub);
$("#topContacts").append(formattedLocation);
$('#topContacts').append(formatedGithub);
$('#topContacts').prepend(formattedBiopic);
$('#topContacts').prepend(HTMLformattedWelcomeMsg);
$("#topContacts").append(HTMLskillsStart);
$("#topContacts").append(formattedSkills);

// Work Experience
function displayWork() {
    var key = 0;
    for(key in work.details) {

    //alert(key + " " + work.details[key]);

    alert(key);

    //foo.hasOwnProperty('bar'); 

     work.details.hasOwnProperty(key == 'position' );



    if(key == 'position' ) {
        var formattedWorkemployerPosition = HTMLworkTitle.replace('%data%', work.details.position);
    $('#workExperience').append(formattedWorkemployerPosition + work.details[key]);

    }
    else if(key == 'employer')  {
        var formattedWorkemployer = HTMLworkEmployer.replace('%data%', work.details.employer);
    $('#workExperience').append(formattedWorkemployer + work.details[key]).addClass( ".work-entry" );
    }
    else
    {
      $('#workExperience').append(HTMLworkStart + work.details[key]);  
    }

    }
}

displayWork();

// no add the location data
/*
$(document).click(function(loc) {

var x = event.clientX;
var y = event.clientY;

alert("x" + x + "y" + y);
logClicks(x,y);
});
*/

/*
$('#workExperience').append(HTMLworkStart);
$('#workExperience').append(formattedWorkemployer);
$('#workExperience').append(formattedWorkemployerPosition);
$('#workExperience').append(formattedWorkemployerDates);
$('#workExperience').append(formattedWorkemployerLocation);
$('#workExperience').append(formattedWorkemployerDescription);
*/
// Education
var  key =0;
for(key in education.schools[1]) {
//alert(key + " " + education.schools[1][key]);

$('#education').append(HTMLschoolStart + education.schools[1][key]);
}


/*
$('#education').append(HTMLschoolStart);
$('#education').append(formattedEducationschoolName);
$('#education').append(formattedEducationschoolDegree);
$('#education').append(formattedEducationschoolDates);
$('#education').append(formattedEducationschoolLocation);
$('#education').append(formattedEducationschoolMajor);
*/
// only run code for skills if there are skill that are on the page
// store results in an array

var locations = [];
function locationlizer(work) {
var key = 0;
    for(key in work.details) {
        if(key == "location")
        {
        alert(work.details[key]);
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
//alert(project.projects.title);
// create a display function of project

project.display = function(project) {

return (project.projects.title);

}


