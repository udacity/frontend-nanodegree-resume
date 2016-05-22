/*
This is empty on purpose! Your code to build the resume will go here.
 */




// javascript object
var bio = {
    "name": "Alexander Brown",
    "role": "Web Developer",
    "contacts": {
        "mobile": "07793749873",
        "email": "test@test.com",
        "github": "datadev23",
        "twitter": "datadev23",
        "location": "Brighton",



    },
    "welcomeMessage": "Hello how are you",
    "biopic": "images/alex.jpg",
    "skills": ["javascript", "css", "HTML", "PHP", "drupal"],
};

var work = {
    "jobs": [{
        "employer": "Healthwareweb",
        "title": "Web Developer",
        "location": "Brighton",
        "dates": "2014",
        "description": "Drupal based role managing the RealGap travel website."
    }, {
        "employer": "TUI",
        "title": "Digital Exec",
        "location": "Chichester",
        "dates": "2014",
        "description": "Drupal based role managing the RealGap travel website."
    }]
};



var education = {
    "schools": [{
            "name": "City University",
            "location": "London",
            "degree": "Computer Science",
            "majors": ["cs"],
            "dates": "2012",
            "url": "test"




        },

        {
            "name": "Essex University",
            "location": "Colchester",
            "degree": "Computer Science",
            "majors": ["cs"],
            "dates": "2007",

            "url": "test"

        }



    ],


    "onlineCourses": [{

            "title": " Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "date": "2017",
            "url": "https://classroom.udacity.com/nanodegrees/nd001/syllabus"


        }


    ]


};
var projectImages = [];
var projects = {

projects: [{
    "title": "Project one",
    "dates": "2016",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "images": ["images/project.jpg"]
}]


};






bio.display = function() {

var formattedName =HTMLheaderName.replace("%data%", bio.name) ;
var formattedRole =HTMLheaderRole.replace("%data%", bio.role) ;
var formatedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formatedEmail= HTMLemail.replace("%data%",bio.contacts.email);
var formatedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
var formatedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
var formattedBiopic = HTMLbioPic.replace('%data%', bio.biopic);
var HTMLformattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
var formattedSkills = HTMLskills.replace('%data%', bio.skills);

// Bio info
$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

$("#topContacts").append(formatedMobile);
$("#topContacts").append(formatedEmail);
$("#topContacts").append(formatedGithub);
$("#topContacts").append(formatedTwitter);
$("#topContacts").append(formattedLocation);
$('#header').prepend(formattedBiopic);
$('#header').prepend(HTMLformattedWelcomeMsg);

if(bio.skills.length>0) {
$("#header").append(HTMLskillsStart);
}

for (var i = 0; i < bio.skills.length; i ++) {   
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }

$('#footerContacts').append(formatedMobile);
$('#footerContacts').append(formatedEmail);
$('#footerContacts').append(formatedGithub);
$('#footerContacts').append(formatedTwitter);
$("#footerContacts").append(formattedLocation);

};

bio.display();


// Work Experience
work.display = function() {
    for (var key =0; key < work.jobs.length; key++) {

        $('#workExperience').append(HTMLworkStart);
        var formattedWorkemployerEmployer = HTMLworkEmployer.replace('%data%', work.jobs[key].employer);
        var formattedWorktitle = HTMLworkTitle.replace('%data%', work.jobs[key].title);
        $('.work-entry:last').append(formattedWorkemployerEmployer + formattedWorktitle);
        var formattedWorkDated = HTMLworkDates.replace('%data%', work.jobs[key].dates);
        $('.work-entry:last').append(formattedWorkDated);
        var formattedWorkemployerLocation = HTMLworkLocation.replace('%data%', work.jobs[key].location);
        $('.work-entry:last').append(formattedWorkemployerLocation);
        var formattedWorkemployerDescription = HTMLprojectDescription.replace('%data%', work.jobs[key].description);
        $('.work-entry:last').append(formattedWorkemployerDescription);
    }


};

work.display();

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

}


projects.display = function() {

   


    // project
    
    for (var key =0; key < projects.projects.length; key++) {
        $('#projects').append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[key].title);
        $('.project-entry:last').append(piechart);
        completionpie();
        $('.project-entry:last').append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[key].dates);
        $('.project-entry:last').append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[key].description);
        $('.project-entry:last').append(formattedProjectDescription);
        var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[key].images);
        $('.project-entry:last').append(formattedProjectImage);

    }

};
education.display = function() {
// Education



 

    for (var key=0; key < education.schools.length; key++) {

        $('#education').append(HTMLschoolStart);
        var formattedEducationDegree = HTMLschoolDegree.replace('%data%', education.schools[key].degree);
        var formattedEducationName = HTMLschoolName.replace('%data%', education.schools[key].name);
        $('.education-entry:last').append(formattedEducationName + formattedEducationDegree);
        var formattedEducationDate = HTMLschoolDates.replace('%data%', education.schools[key].dates);
        $('.education-entry:last').append(formattedEducationDate);
        var formattedEducationLocation = HTMLschoolLocation.replace('%data%', education.schools[key].location);
        $('.education-entry:last').append(formattedEducationLocation);
        var formattedEducationMajor = HTMLschoolMajor.replace('%data%', education.schools[key].majors);
        $('.education-entry:last').append(formattedEducationMajor);

    }
     $('.education-entry:last').append(HTMLonlineClasses);
    for (var key =0; key < education.onlineCourses.length; key++) {
       
        
        var formattedEducationOnlineName = HTMLonlineTitle.replace('%data%', education.onlineCourses[key].title);
        var formattedEducationOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[key].school);
        $('.education-entry:last').append(formattedEducationOnlineName + formattedEducationOnlineSchool);
        var formattedEducationOnlineDate = HTMLonlineDates.replace('%data%', education.onlineCourses[key].date);
        $('.education-entry:last').append(formattedEducationOnlineDate);
        var formattedEducationOnlineUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[key].url);
        $('.education-entry:last').append(formattedEducationOnlineUrl);
    }

};

education.display(); 
projects.display();



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

$("#mapDiv").append(googleMap);