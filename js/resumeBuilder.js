//biography JSON
var biography = 
{
    "bio": [
        {
            "name": "Glenn Cameron",
            "role": "Tinkerer",
            "picture_url": "images/fry.jpg",
            "welcome_message": "Welcome to my website!",
            "skills": [
                "Internet marketing",
                "Web development",
                "Awesomeness",
                "Inventions"
            ],
            "contacts": [
                {
                    "email": "glenn@glenncameronjr.com",
                    "mobile": "424.234.8852",
                    "twitter": "@glenncameronjr",
                    "github": "glenncameronjr",
                    "location": "Sunnyvale, California"

                }
            ]
        }
    ]
}

//projects JSON
var projects = 
{
    "projects": [
        {
            "title": "Samsung Developer Conference i",
            "location": "San Francisco, California",
            "dates": "2013",
            "desc": "Samsung's first international developer conference",
            "images": [
             "http://lorempixel.com/400/200/",
             "http://lorempixel.com/375/200/"
            ]
        },
        {
            "title": "Samsung Developer Conference ii",
            "location": "San Francisco, California",
            "dates": "2013",
            "desc": "Samsung's second international developer conference",
            "images": [
             "http://lorempixel.com/390/200/",
             "http://lorempixel.com/200/200/"
            ]
        }
    ]
}

//Education JSON
var education = {
    "schools": [
        {
            "school": "Florida Institute of Technology",
            "dates": "2011-2013",
            "degree": "MBA",
            "graduated": "2013",
            "location": "Melbourne, Florida",
            "major": [
                "Internet Marketing"
            ]
        },
        {
            "school": "Univesity of Florida",
            "dates": "2007-2011",
            "degree": "BA",
            "major": [
                "Biology",
            ],
            "graduated": "2011",
            "location": "Gainesville, Florida"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "2014",
            "linked": "https://www.udacity.com/course/ud804",
            "url": "udacity.com/course/ud804"
        },
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "2014",
            "linked": "https://www.udacity.com/course/ud304",
            "url": "udacity.com/course/ud304"
        }
    ]
}

//work Json data
var work = {
    "jobs": [
        {
            "job": "Marketing & Events",
            "employer": "The Network",
            "title": "CMO",
            "location": "Gainesville, Florida",
            "dates": "2009-2011",
            "desc_1": "An online and offline social network"
        },
        {
            "job": "Publishing",
            "employer": "Bonnier Corporation",
            "title": "Web Editor",
            "location": "Winter Park, Florida",
            "dates": "2012-2013",
            "desc_1": "One of the largest media companies in the world."
        },
        {
            "job": "Developer Marketing",
            "employer": "Samsung",
            "title": "Sr. Digital Marketing Manager",
            "location": "San Jose, California",
            "dates": "2013-Present",
            "desc_1": "Rebranding Samsung as a developer friendly company."
        }
    ]
}

//projects JSON
var projects = 
{
    "projects": [
        {
            "title": "Samsung Developer Conference i",
            "location": "San Francisco, California",
            "dates": "2013",
            "desc": "Samsungs first international developer conference",
            "images": [
             "http://lorempixel.com/700/200/",
             "http://lorempixel.com/200/200/",
             "http://lorempixel.com/100/200/"
            ]
        },
        {
            "title": "Samsung Developer Conference ii",
            "location": "San Francisco, California",
            "dates": "2013",
            "desc": "Samsungs second international developer conference",
            "images": [
             "http://lorempixel.com/400/200/",
             "http://lorempixel.com/615/200/"
            ]
        }
    ]
}

//displays biographical information
function displayBio() {    
    for (item in biography.bio) {
        var formattedRole = HTMLheaderRole.replace("%data%", biography.bio[item].role);
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", inName(biography.bio[item].name));
        $("#header").prepend(formattedName);

        var bioPic = HTMLbioPic.replace("%data%", "images/glenn.jpg");
        $("#header").append(bioPic);

        var formattedWelcome = HTMLWelcomeMsg.replace("%data%", biography.bio[item].welcome_message);
        $("#header").append(formattedWelcome);

        $("#header").append(HTMLskillsStart);
        for(skill in biography.bio[item].skills) {
            var formattedSkill = HTMLskills.replace("%data%", biography.bio[item].skills[skill]);
            $("#skills").append(formattedSkill);         
        }

        for(contact in biography.bio[item].contacts) {
            var formattedMobile = HTMLmobile.replace("%data%", biography.bio[item].contacts[contact].mobile);
            $("#topContacts").append(formattedMobile);
            $("#footerContacts").append(formattedMobile);

            var formattedEmail = HTMLemail.replace("%data%", biography.bio[item].contacts[contact].email);
            $("#topContacts").append(formattedEmail);
            $("#footerContacts").append(formattedEmail);

            var formattedTwitter = HTMLtwitter.replace("%data%", biography.bio[item].contacts[contact].twitter);
            $("#topContacts").append(formattedTwitter);
            $("#footerContacts").append(formattedTwitter);

            var formattedHTMLgithub = HTMLgithub.replace("%data%", biography.bio[item].contacts[contact].github);
            $("#topContacts").append(formattedHTMLgithub);
            $("#footerContacts").append(formattedHTMLgithub);

            var formattedLocation = HTMLlocation.replace("%data%", biography.bio[item].contacts[contact].location);
            $("#topContacts").append(formattedLocation);
            $("#footerContacts").append(formattedLocation);
        }
    }  
}

//Displays work history
function displayWork() {
    for(job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDesc = HTMLprojectDescription.replace("%data%", work.jobs[job].desc_1);
        var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedDesc;
        $(".work-entry:last").append(formattedEmployerTitle);
    }
}

//Displays projects
function displayProjects() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);        
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);
        
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].desc);
        $(".project-entry:last").append(formattedProjectDescription);
        if(projects.projects[project].images.length > 0) {
            for(i in projects.projects[project].images) {
                
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[i]);
                
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

//educational information function
function displayEducation() {
    $("#education").append(HTMLschoolStart);
    for(edu in education.schools) {
        var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.schools[edu].school);
        var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        var formattedEducation = formattedHTMLschoolName + formattedHTMLschoolDegree + formattedHTMLschoolDates + formattedHTMLschoolLocation;
        $(".education-entry:last").append(formattedEducation);
        if(education.schools[edu].major.length > 0) {
            for(t in education.schools[edu].major) {
                var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major[t]);
                $(".education-entry:last").append(formattedHTMLschoolMajor);                
            }
        }
    }

    $(".education-entry").append(HTMLonlineClasses);
    for(course in education.onlineCourses) {
        var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var formattedHTMLonlineLink = HTMLonlineLink.replace("%data%", education.onlineCourses[course].linked);
        var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        var formattedOnlineEducation = formattedHTMLonlineTitle + formattedHTMLonlineSchool + formattedHTMLonlineDates + formattedHTMLonlineLink + formattedHTMLonlineURL;
        $(".education-entry:last").append(formattedOnlineEducation);
    }
}

function displayChart () { 
    $('#skillsChart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Abilities'
        },
        xAxis: {
            categories: ['Awesomeness', 'Udaciousness', 'Powers']
        },
        yAxis: {
            title: {
                text: '#WINNING'
            }
        },
        series: [{
            name: 'Glenn',
            data: [10, 8, 9]
        }, {
            name: 'Others',
            data: [5, 7, 3]
        }]
    });
}

$('#skillsChart').append(displayChart());

$("#mapDiv").append(googleMap);

//Call functions

displayBio();
displayWork();
displayProjects();
displayEducation();

/*
function locationizer(work_obj) {
    var locationArray = [];
    for(var job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;        
}
locationizer(work);
*/

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

//$("#main").append(internationalizeButton);





