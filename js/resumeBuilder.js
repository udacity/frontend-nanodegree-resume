/*
This is empty on purpose! Your code to build the resume will go here.
 */

var skills = ["javascript", "css", "HTML", "PHP", "drupal"];

// javascript object
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

} ,
"skills" : skills,
"picture" : "images/alex.jpg",
};

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

var formattedName =HTMLheaderName.replace("%data%", bio.name) ;
var formattedRole =HTMLheaderRole.replace("%data%", bio.role) ;
var formatedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formatedEmail= HTMLemail.replace("%data%",bio.contacts.email);
var formatedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
var formattedBiopic = HTMLbioPic.replace('%data%', bio.picture);
var HTMLformattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.contacts.welcome);
var formattedSkills = HTMLskills.replace('%data%', bio.skills);



// Bio info
$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

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
function displayWork() {
    var key = 0
    for (key in work.jobs) {


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

/*
Donut piechart based on code reference. 
http://www.bscalable.com/blog-galapagos/2015/6/27/web-charts-with-d3js
*/
function completionpie() {

    var value = 80;
    var remainder = 100 - value;

    var dataset = {
        things: [value, remainder],
    };

    var width = 460,
        height = 300,
        radius = Math.min(width, height) / 2;

    var color = d3.scale.category20();

    var pie = d3.layout.pie()
        .sort(null);

    var arc = d3.svg.arc()
        .innerRadius(radius - 110)
        .outerRadius(radius - 60);

    var svg = d3.select(".donut").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var path = svg.selectAll("path")
        .data(pie(dataset.things))
        .enter().append("path")
        .attr("fill", function(d, i) {
            return color(i);
        })
        .attr("d", arc);


    function getColors(i) {
        var colorArray = ['#E5E5E5', '#5CB85C'];
        return colorArray[i];
    }
    svg.append("svg:text")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .attr("style", "font-family:Arial")
        .attr("font-size", "120")
        .attr("fill", "#5CB85C")
        .text(value + "%");

    alert("test this");

}


function displayProject() {
    // project
    var key = 0;
    for (key in project.projects) {
        alert(key + " " + project.projects[key].title);
        $('#projects').append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.projects[key].title);
        $('.project-entry:last').append(piechart)
        completionpie();
        $('.project-entry:last').append(formattedProjectTitle)
        var formattedProjectDates = HTMLprojectDates.replace('%data%', project.projects[key].dates);
        $('.project-entry:last').append(formattedProjectDates)
        var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.projects[key].description);
        $('.project-entry:last').append(formattedProjectDescription)
        var formattedProjectImage = HTMLprojectImage.replace('%data%', project.projects[key].image);
        $('.project-entry:last').append(formattedProjectImage)

    }

}

// Education

function displayEducation() {

    var key = 0;
    var counter = 0;
    for (key in education.schools) {

        $('#education').append(HTMLschoolStart);
        var formattedEducationDegree = HTMLschoolDegree.replace('%data%', education.schools[key].degree);
        var formattedEducationName = HTMLschoolName.replace('%data%', education.schools[key].name);
        $('.education-entry:last').append(formattedEducationName + formattedEducationDegree);
        var formattedEducationDate = HTMLschoolDates.replace('%data%', education.schools[key].dates);
        $('.education-entry:last').append(formattedEducationDate);
        var formattedEducationLocation = HTMLschoolLocation.replace('%data%', education.schools[key].location);
        $('.education-entry:last').append(formattedEducationLocation)
        var formattedEducationMajor = HTMLschoolMajor.replace('%data%', education.schools[key].major);
        $('.education-entry:last').append(formattedEducationMajor);

    }

    for (key in education.onlineCourses) {
        var formattedEducationOnlineName = HTMLonlineTitle.replace('%data%', education.onlineCourses[key].title);
        var formattedEducationOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[key].school);
        $('.education-entry:last').append(formattedEducationOnlineName + formattedEducationOnlineSchool);
        var formattedEducationOnlineDate = HTMLonlineDates.replace('%data%', education.onlineCourses[key].date);
        $('.education-entry:last').append(formattedEducationOnlineDate);
        var formattedEducationOnlineUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[key].url);
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
    for (key in work.details) {
        if (key == "location") {
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
    firstname = res[0].substring(1, res[0]).toUpperCase() + res[0].substring(1).toLowerCase();
    lastname = res[1].toUpperCase();
    alert(firstname);
    var comebinedname = firstname + " " + lastname;
    alert(comebinedname);

}

// create a display function of project

project.display = function(project) {

    return (project.projects.title);

}

$("#mapDiv").append(googleMap);