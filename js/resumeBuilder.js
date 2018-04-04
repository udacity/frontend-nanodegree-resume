

// Bio Object
var bio = {
        "name": "Yusif Alomeri",
        "role": "Web Designer",
        "welcomeMsg" : "lorem ipsum dolor sit amet etc etc etc.",
        "skills": ["- Awesomeness", "- Doodles", "- Cryogenic sleep", "- Saving the universe"],
        "bioPic": ["images/yusif.jpg"],
        "contacts": {
            "mobile": "650-555-5555",
            "email": "yusif@udacity.com",
            "github": "yusif alomeri",
            "twitter": "flashstep111",
            "location": "NYC"
            }
};

// Education Object
var education = {
    "schools": [
        {
        "name": "Brooklyn College",
        "location": "Brooklyn, NY, US",
        "degree": "Bachelors",
        "major": ["CS", "Art"],
        "dates": "2015",
        "url": "http://cuny.brooklyn.edu",
            
        },
        {
        "name": "Udacity",
        "location": "online",
        "degree": "Nanodegree",
        "dates": "2018",
        "major": "FEND",
        "url": "https://udacity.com",
        }
    ],
    "onlineCourses":[
        {
        "title":"Graphic Design",
        "school":"Udemy",
        "dates":"2016",
        "url": "https://udemy.com/graphicdesign"
        },
        {
            "title":"Graphic Design",
            "school":"Udemy",
            "dates":"2016",
            "url": "https://udemy.com/graphicdesign"
            }
    ]
};

// Work Object
var work = {
    "jobs": [
        {
            "employer": "MediVis",
            "title": "Design Intern",
            "location":"Brooklyn, NY",
            "dates": "December 2017 - Present",
            "description": ["Research best UX design practices to implement into prototype designs",
            "create UI mocks","Create Assets and content for developers to utilize",
            "maintaining digital marketing channels and website","Create branding materials"]
         },
         {
            "employer": "COOP",
            "title": "UX Design/DM Intern",
            "location":"New York, NY",
            "dates": "Feb 2017 - June 2017",
            "description": ["Learn/Utilize SEO,SEM,Data Analysis and Paid social",
            "build up public speaking, team verbal and written communication","Networking with industry experts"]
        },
        {
            "employer": "AYSHA NEW YORK",
            "title": "Web Programming Intern",
            "location":"New York, NY",
            "dates": "Feb 2017 - March 2017",
            "description": ["Update an old website design","Update website content and webflows",
            "Host site on a new web hosting service and implement external services"]
        },
        {
            "employer": "BIZ-e-NEWS",
            "title": "Graphic Design Intern",
            "location":"Brooklyn, NY",
            "dates": "Aug 2013 - Feb 2014",
            "description": ["Design layouts of the newsletter","Create graphics for news articles",
            "utilize typography to make content attractive and readible"]
        },
        {
            "employer": "Prospect Market",
            "title": "Associate",
            "location":"Brooklyn, NY",
            "dates": "June 2017 - December 2017",
            "description": ["Improve customer experience","Handle customer checkouts",
            "assuring quality product shipments from vendors","Organize Products isles and displays"]
            }
 
     ]
 };

// Projects Object
 var projects = {
    "projects" : [
        
        {
            "title": "Project 1",
            "dates": "Sep 2017",
            "description": "Created my portfolio site to display myself and my work using HTML and CSS technologies",
            "images": ["images/fry.jpg"]
        },
        {
            "title": "Project 2",
            "dates": "Nov 2017",
            "description": "Created my second site to display myself and my work using HTML and CSS technologies",
            "images": ["images/fry.jpg"]
        }
    ]

};
function displaySkills(){
    $("#header").append(HTMLskillsStart);
        for(var i = 0; i<bio.skills.length; i++){
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
        }
}

function displayBio(){

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedNameRole = formattedName + formattedRole;

    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
        
    if(bio.name.length > 0){
        $("#header").prepend(formattedNameRole);
    }

    if(bio.welcomeMsg.length > 0){
        $("#header").append(formattedMessage);
    }

    if (bio.bioPic.length > 0) {
            var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
            $("#header").append(formattedImage);
        }
    
}

function displayContacts(){
    var formattedContact = HTMLcontactGeneric.replace("%contact%", bio.contacts);
    for(contacts in bio){
        if(bio.contacts.mobile.length > 0){
            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            $("#topContacts").prepend(formattedMobile);
        }
        if(bio.contacts.email.length > 0){
            var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        }
        if(bio.contacts.twitter.length > 0){
            var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        }
        if(bio.contacts.github.length > 0){
            var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);   
        }
        break;
    }

    for(contacts in bio){
        if(bio.contacts.mobile.length > 0){
            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            $("#footerContacts").prepend(formattedMobile);
        }
        if(bio.contacts.email.length > 0){
            var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#footerContacts").append(formattedEmail);
        }
        if(bio.contacts.twitter.length > 0){
            var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#footerContacts").append(formattedTwitter);
        }
        if(bio.contacts.github.length > 0){
            var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#footerContacts").append(formattedGithub);   
        }
        break;
    }
        
}

function displayWork(){
    $("#workExperience").append(HTMLworkStart);
        work.jobs.forEach(function(job,index){
            console.log(job);
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
                var fromattedEmployerTitle = formattedEmployer + formattedTitle;
                $(".work-entry:last").append(fromattedEmployerTitle);
    
                var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
                $(".work-entry:last").append(formattedLocation);
    
                var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
                $(".work-entry:last").append(formattedDates);
    
                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
                $(".work-entry:last").append(formattedDescription);
            
        });
        }

    
function displayProjects(){
    $("#projects").append(HTMLprojectStart);
    projects.projects.forEach(function(project,index) {
           console.log(projects);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
            $(".project-entry").append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
            $(".project-entry").append(formattedProjectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
            $(".project-entry").append(formattedProjectDescription);

            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[index].images);
            $(".project-entry").append(formattedProjectImage);        
    });
}

function displayEducation(){
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(school,index) { 
            console.log(school);
            var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[index].name);
            $(".education-entry").append(formattedSchoolName);

            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
            $(".education-entry").append(formattedSchoolDegree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
            $(".education-entry").append(formattedSchoolDates);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);
            $(".education-entry").append(formattedSchoolLocation);

            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[index].major);
            $(".education-entry").append(formattedSchoolMajor);                

    });

    $(".education-entry").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course,index) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[index].title);
        $(".education-entry").append(formattedOnlineTitle);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);
        $(".education-entry").append(formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates);
        $(".education-entry").append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[index].url);
        $(".education-entry").append(formattedOnlineURL);
    });
}

function locationizer(work_obj){
    var locationArray = [];

    for(job in work_obj.jobs){
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
return locationArray;
}


function locationFinder() {
    var locations = [];

    locations.push(bio.contacts.location);

    for(var school in education.schools){
        locations.push(education.schools[school].location);
    }
    for(var job in work.jobs){
        locations.push(work.jobs[job].location);
    }

    return locations;
}


$(document).click(function(loc){
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

$('#mapDiv').append(googleMap);

displayBio();
displaySkills();
displayContacts();
displayWork();
displayProjects();
displayEducation();
locationFinder();
locationizer();

