/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
/***
 *  Building JSON 
 * 
bio:
   name : string
   role : string
   contacts : an object with
         mobile: string
         email: string 
         github: string
         twitter: string 
         location: string
   welcomeMessage: string 
   skills: array of strings
   biopic: url
   display: function

education
   schools: array of objects with
        name: string
        location: string
        degree: string
        majors: array of strings
        dates: integer (graduation date)
        url: string
   onlineCourses: array with
        title: string
        school: string
        date: integer (date finished)
        url: string
   display: function
   
work
   jobs: array of objects with
        employer: string 
        title: string 
        url: string
        location: string 
        dates: string (works with a hyphen between them)
        description: string 
   display: function
   
projects
   projects: array of objects with
         title: string 
         url: string
         dates: string (works with a hyphen between them)
         description: string
         images: array with string urls
   display: function
 */


var DATA = "%data%";
var CONTACT = "%contact%";



var bio = {
    "name": "Ahmed Saleh",
    "role": "Software Engineer",
    "contacts": [
        {
            "mobile": "+966-(0)59-118-8897",
            "email": "ahmad@ahmadssb.com",
            "Github": "ahmadssb",
            "Twitter": "@ahmadssb",
            "location": "Jeddah, Saudi Arabia"
        }
    ],
    "welcomeMessage": "I am a software engineer with almost 4 years of software development experience in Web and Mobile Application development. Equipped with up to date technology and techniques. I want to develop great applications for creative people to add to my portfolio.",
    "biopic": "images/ahmed-babadr.jpg",
    "skills": [
        "Programming",
        "Teaching",
        "Android Development",
        "Web Development",
        "Software Engineering",
        "Systems Analysis",
        "Project Management",
        "Networking",
        "Adobe Photoshop"
    ],
    "display": function () {
        var bioName = HTMLheaderName.replace(DATA, bio.name);
        var bioRole = HTMLheaderRole.replace(DATA, bio.role);
        var bioImage = HTMLbioPic.replace(DATA, bio.biopic);
        var bioMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);
        $("#header").prepend(bioRole).prepend(bioName).append(bioImage, bioMessage);
        $("#header").append(HTMLskillsStart);
    
        /*
            for(skill in bio.skills) {
                var bioSkills = HTMLskills.replace(DATA,bio.skills[skill]);
                $("#skills").append(bioSkills);
            };
        */

        // insert ','  between each skill and '.' to the end of the list
        var bioSkills = HTMLskills.replace(DATA, bio.skills.join(" ,  ") + " .");
        $("#skills").append(bioSkills);

        for (contact in bio.contacts) {
            var bioMobile = HTMLmobile.replace(DATA, bio.contacts[contact].mobile);
            var bioEmail = HTMLemail.replace(DATA, bio.contacts[contact].email);
            var bioGithub = HTMLgithub.replace(DATA, bio.contacts[contact].Github);
            var bioLocation = HTMLlocation.replace(DATA, bio.contacts[contact].location);
            var bioTwitter = HTMLtwitter.replace(DATA, bio.contacts[contact].Twitter);
            $("#topContacts").append(bioMobile, bioEmail, bioGithub, bioTwitter, bioLocation);
            $("#footerContacts").append(bioMobile, bioEmail, bioGithub, bioTwitter, bioLocation);
        };
    }
};



var education = {
    "schools": [
        {
            "name": "MULTIMEDIA UNIVERSITY",
            "location": "Cyberjaya, Malaysia",
            "degree": "Bachelor",
            "majors": "Software Engineer",
            "dates": 2015,
            "url": "http://www.mmu.edu.my.com"
        },
        {
            "name": "ALFALAH SCHOOLS",
            "location": "Jeddah, Saudi Arabia",
            "degree": "High School Certificate",
            "majors": "Science",
            "dates": 2007,
            "url": "https://goo.gl/HkXWtU"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "October 2015 - present",
            "url": "https://www.udacity.com/course/nd001"
        },
        {
            "title": "98-363 MTA WEB DEVELOPMENT FUNDAMENTALS and ASP.NET 4.0",
            "school": "Microsoft, License Transcript ID: 1085902 - Access Code: AhmedSSB",
            "dates": 2013,
            "url": "https://mcp.microsoft.com/Anonymous//Transcript/Validate"
        },
        {
            "title": "JAVA PROGRAMMING LANGUAGE, JAVA SE 6 (SL-275-SE6)",
            "school": "Oracle, Multimedia University",
            "dates": 2012,
            "url": "http://ahmadssb.com/resume/img/java.jpg"
        },
        {
            "title": "INTERCONNECTING CISCO NETWORK DEVICES PART 1 - ICND1",
            "school": "New Horizons Malaysia",
            "dates": 2011,
            "url": "http://ahmadssb.com/resume/img/icnd1.jpg"
        },
        {
            "title": "LIST OF COURSES I HAVE TAKEN FROM UDEMY",
            "school": "UDEMY",
            "dates": 2014,
            "url": "https://www.udemy.com/u/ahmadsaleh2/"
        }
    ],
    "display": function () {

    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var eduName = HTMLschoolName.replace(DATA, education.schools[school].name);
        var eduDegree = HTMLschoolDegree.replace(DATA, education.schools[school].degree);
        var eduDates = HTMLschoolDates.replace(DATA, education.schools[school].dates);
        var eduLocation = HTMLschoolLocation.replace(DATA, education.schools[school].location);
        var eduMajor = HTMLschoolMajor.replace(DATA, education.schools[school].majors);
        $(".education-entry:last").append(eduName + eduDegree, eduDates, eduLocation, eduMajor);
        $('.education-entry:last').children('a').attr('href',  education.schools[school].url);
    }

    $("#education").append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {

        $("#education").append(HTMLschoolStart);
        var eduOnlineTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[course].title);
        var eduOnlineSchool = HTMLonlineSchool.replace(DATA, education.onlineCourses[course].school);
        var eduOnlineDate =
            HTMLonlineDates.replace(DATA, education.onlineCourses[course].dates);
        var eduURL = HTMLonlineURL.replace(DATA, education.onlineCourses[course].url);
        $(".education-entry:last").append(eduOnlineTitle + eduOnlineSchool, eduOnlineDate, eduURL);
        $('.education-entry:last').children('a').attr('href',  education.onlineCourses[course].url);
    }
}
};

var work = {
    "jobs": [
        {
            "employer": "GIS Technology Innovation Center (GISTIC)",
            "title": "Software Engineer ",
            "url": "http://www.gistic.org/",
            "dates": "October 2015 - Present",
            "location": "GIS Technology Innovation Center, Second Floor Institute of Scientific Research Umm Al-Qura University, Makkah, Saudi Arabia",
            "description": "Software Engineer Development, Front-end Development."
        },
        {
            "employer": "TapWay",
            "title": "App Developer / Web Developer [Internship]",
            "url": "http://www.tapway.com.my/",
            "dates": "March 2014 - May 2014",
            "location": "TapWay, No. 6-2, Jalan PJS 8/12A, Dataran Mentari, Petaling Jaya, 46150 Selangor, Malaysia",
            "description": "I have Worked on Eventgelist [Previously Tap Event] Android App using NFC Technology and its cloud-based solution."
        },
        {
            "employer": "ARABIAN BUILDING CHEMICALS FACTORY",
            "title": "Summer Trainee",
            "url": "http://babader.com/",
            "dates": "2000 - 2007",
            "location": "Old Makkah Road, Kilo-14 Area ,Jeddah, Saudi Arabia",
            "description": "I worked as Summer trainee (Summer times only) in IT, Production and others."
        },
        {
            "employer": "TOP LINE",
            "title": "Summer Trainee",
            "url": "www.tl4s.com.sa/",
            "dates": "2006 (3 Months)",
            "location": "Jeddah, Saudi Arabia",
            "description": "I worked as Summer trainee . Installing various of Scripts , plugins and designs to each script, Maintaining the application by fixing bugs, Enhancing the application by adding/developing new features as required by Client."
        }
    ],
    "display": function () {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var workEmployer = HTMLworkEmployer.replace(DATA, work.jobs[job].employer);
            var workTitle = HTMLworkTitle.replace(DATA, work.jobs[job].title);
            var workDates = HTMLworkDates.replace(DATA, work.jobs[job].dates);
            var workDescription = HTMLworkDescription.replace(DATA, work.jobs[job].description);
            // jQuery( ":last" ) Selects the last matched element
            $(".work-entry:last").append(workEmployer + workTitle, workDates, workDescription);
            $(".work-entry:last").children('a').attr('href', work.jobs[job].url);
        }
    }
};

var projects = {
    "project": [
        {
            "title": "OZBAH (IN PROGRESS)",
            "dates": "July 17, 2015",
            "url" : "https://play.google.com/store/apps/details?id=com.ahmadssb.queueozbah",
            "description": "Ozbah (العزبة) is a name of place (room, garden... etc) where a friends and family usually hangout. The application is dedicated to arrange who have the right to play on the next game (any game of 2 or 4 players) and arrange the current and waiting list players. based on the time the presence of the player. where the losing team will move to the end of the waiting list and the first players will jump to current list.",
            "images": [
                "images/project-ozbah-1.png",
                "images/project-ozbah-2.png",
                "images/project-ozbah-3.png",
                "images/project-ozbah-4.png"
            ]
        },
        {
            "title": "ONE KSA or ONE Jeddah (IN PROGRESS)",
            "dates": "October 2014",
            "url" : "http://www.oneksa.com",
            "description": "mobile application for smartphones and tablets to connect the malls in Saudi Arabia or Jeddah in one Application with a suggested name (One KSA / One Jeddah) that provide Latest events and promotions from the selected mall and its stores, Indoor Navigation System for the mall and its Parking and Payment or Collecting points System using QR code and NFC.",
            "images": [
                "images/project-oneksa-1.png",
                "images/project-oneksa-2.png",
                "images/project-oneksa-3.png",
                "images/project-oneksa-4.png"
            ]
        }
    ],
    "display": function(){
	for(project in projects.project){
		$("#projects").append(HTMLprojectStart);
		var projectTitle = HTMLprojectTitle.replace(DATA,projects.project[project].title);
		var projectDates = HTMLprojectDates.replace(DATA,projects.project[project].dates);
		var projectDescription = HTMLprojectDescription.replace(DATA,projects.project[project].description);
		
		$(".project-entry:last").append(projectTitle,projectDates,projectDescription);
        $(".project-entry:last").children("a").attr("href", projects.project[project].url);
		for (image in projects.project[project].images) {
			var projectImage = HTMLprojectImage.replace(DATA,projects.project[project].images[image]);
			$(".project-entry:last").append(projectImage);
		};
	}
}
};

//information about click locations, hint: On line 89 in helper.js
$(document).click(function(loc) {
  
  var x= loc.pageX;
  var y = loc.pageY;
});



bio.display();
work.display();
education.display();
projects.display();



$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
