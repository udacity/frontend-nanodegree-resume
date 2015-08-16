
//In order to make the code easy to follow, each object is ordered by the way it is presented on the webpage.


//The object bio is used to display the information in the header and footer.
var bio = {
    "name": "Kelsey Steele",
    "role": "Web Developer",
    "contacts": {
        "email": "kasteele8@gmail.com",
        "mobile": "(845) 549-6038",
        "github": "KelseySteele"
                },
    "welcomeMessage": "Welcome to my resume!",
    "skills": [
        "JavaScript", "jQuery","HTML", "CSS", "Bootstrap","Jasmine","Knockout JS","Git/GitHub"
               ],
    "bioPic": "images/ProfilePicture.jpg"
    };

bio.display = function(){

    var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").prepend(formattedImage);


    $("#contacts").append(HTMLcontactStart);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#contacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#contacts").append(formattedEmail);

    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#contacts").append(formattedgithub);

    /*var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#contacts").append(formattedWelcome);*/

};

bio.display();

    $("#main").append(internationalizeButton);

   var inName = function(oldName) {
    var finalName = oldName;
    // Your code goes here!
    console.log(finalName);
    var space = " ";
    finalName = finalName.trim().split(space);
    var firstName = finalName[0];
    var lastName = finalName [1];

    lastName = lastName.toUpperCase();
    firstName = firstName.toLowerCase();
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

   finalName = firstName + " " + lastName;
    // Don't delete this line!
    return finalName;
};

var oldName = bio.name;
   inName(oldName);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var skill in bio.skills){
        var formattedSkills= HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkills);
    }
    };

/*var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#topContacts").append(formattedWelcome);*/

//formats the footer
bio.displayftr = function(){

    var formattedMobileftr = HTMLmobileftr.replace("%data%", bio.contacts.mobile);
    $("#footerContacts").append(formattedMobileftr);

    var formattedEmailftr = HTMLemailftr.replace("%data%", bio.contacts.email);
    $("#footerContacts").append(formattedEmailftr);

    var formattedlocationftr = HTMLlocationftr.replace("%data%", bio.contacts.location);
    $("#footerContacts").append(formattedlocationftr);

    var formattedgithubftr = HTMLgithubftr.replace("%data%", bio.contacts.github);
    $("#footerContacts").append(formattedgithubftr);

    var formattedtwitterftr = HTMLtwitterftr.replace("%data%", bio.contacts.twitter);
    $("#footerContacts").append(formattedtwitterftr);

}

bio.displayftr();

//work experience section
var work = {
        "jobs":
            [
                {
                    "position": "Customer-facing Library Clerk",
                    "employer" : "East Fishkill Community Library",
                    "location" :"Hopewell Junction, NY",
                    "years" : "2013-present",
                    "description": ["Provide efficient and accurate service to library patrons using computer systems.","Considered computer expert among staff because of ability to solve computer issues.", "Contributed to the succes of the library as being recognized as the best branch in Dutchess County."]

                },
                {
                    "position": "Communications Director",
                    "employer" : "Safe Haven Farm Sanctuary",
                    "location" :"Poughquag, NY",
                    "years" : "2013-present",
                    "description": ["Tripled number of Facebook followers through consistent innovative posts.", "Increased number of attendees at fundraising events by 60%.", "Arranged and implemented fundraising comapaign that tripled donations from previous efforts."]
                },
                 {
                    "position": "Web Devloper",
                    "employer" : "KenCast",
                    "location" :"Norwalk, CT ",
                    "years" : "2013-present",
                    "description": ["Update Wordpress site with latest company graphics and product information.", "Create temporary Wordpress sites for company events."]

                }
            ]
        }


 work.display = function(){

//accordion-content wraps around each work-entry.
    var accHeading, accContent;
    accHeading = $('#workExperience');
    accContent = $('<div class= "accordion-content"><div class ="work-entry"</div></div>');
    accHeading.append(accContent);

        for (var job in work.jobs){
                /*$(accContent).append(HTMLworkStart);*/
                var formattedEmployer = HTMLworkEmployer.replace
                ("%data%", work.jobs[job].employer);

                var formattedTitle = HTMLworkTitle.replace
                ("%data%", work.jobs[job].position );
                var formattedEmployerTitle = formattedEmployer + formattedTitle;

                $(".work-entry:last").append(formattedEmployerTitle);

                var formattedLocation = HTMLworkLocation.replace
                ("%data%", work.jobs[job].location);
                $(".work-entry:last").append(formattedLocation);

                var formattedYears = HTMLworkDates.replace
                ("%data%", work.jobs[job].years);
                $(".work-entry:last").append(formattedYears);

                for(description in work.jobs[job].description){
                    var formattedWorkDescription = HTMLworkDescription.replace
                    ("%data%", work.jobs[job].description[description]);
                    $(".work-entry:last").append(formattedWorkDescription);
                }

        }
 };

  work.display();

//projects section
var projects = {
    "projects" :
            [
                {
                    "name": "Feed Reader",
                    "descriptions": ["Udacity Application with list of four RSS feeds that can be accessed via a menu bar.", "Created tests with Jasmine for menu functionality, asynchronous loading, and present feed entries."],
                    "link": "http://kelseysteele.github.io/P6-Feed-Reader/"
                },
                {
                    "name": "Neighborhood Map App",
                    "descriptions": ["Built an App of locations in Portland, Oregon with Google Map's API.", "Organized code with Knockout JS's Model-View-View-Model pattern.", "Integrated Instagram's API into App, so that users can view pictures with a hashtag for each location."],
                    "link": "http://kelseysteele.github.io/p5-neighborhood-map/"
                },
                {
                    "name": "Frogger Game",
                    "descriptions": ["A game with a player, enemies to avoid, stars to collect, and a travel destination. Udacity created the game engine and graphics.", "Coded game components onto an HTML5 canvas with object oriented JavaScript."],
                    "link": "http://kelseysteele.github.io/frontend-nanodegree-arcade-game/"
                },
                {
                    "name": "Effective Optimization",
                    "descriptions": ["Improved critical rendering path of an existing portfolio website, so that it now has a Google PageSpeed Insights score above 90.", "Sharpened effeciency of an animated page on the website so that the scroll effect occurs at 60 frames per second."],
                    "link": "http://kelseysteele.github.io/frontend-nanodegree-mobile-portfolio/"
                },
                {
                    "name": "GoodGreenVibes.org",
                    "descriptions": ["Developed and designed a content-rich website to promote powerful, complex ideas about protecting the environment.","Used Adobe Dreamweaver and Wordpress to build the site and implemented a responsive design with Bootstrap.", "Collaborated with a web designer to design layout, UI, and graphics."],
                    "link": "http://www.goodgreenvibes.org/"
                }
          ]
        };

projects.display = function () {

    //Comment out HTMLprojectStart, so that accordion-content wraps around project-entry.
    var accHeading, accContent;
    accHeading = $('#projects');
    accContent = $('<div class= "accordion-content"><div class= "project-entry"></div></div>');
    accHeading.append(accContent);

    for (project in projects.projects){
        var formattedProjectsName = HTMLprojectTitle.replace("%data%", projects.projects[project].name);
        $(".project-entry:last").append(formattedProjectsName);


        for(description in projects.projects[project].descriptions){
            var formattedProjectsDescription = HTMLprojectDescription.replace
            ("%data%", projects.projects[project].descriptions[description]);
            $(".project-entry:last").append(formattedProjectsDescription);
        }

        var formattedProjectLink = HTMLprojectLink.replace
        ("%data%", projects.projects[project].link);
        $(".project-entry:last").append(formattedProjectLink);

   }
};

projects.display();

//education section
    var education = {
    "school": [
        {
            "name": "University of Vermont",
            "location": "Burlington, VT",
            "dates": "2009-2013",
            "degree": "BA",
            "majors": ["Environmental Studies"]
        }
                 ],

    "onlineClasses":[
        {
            "name": "Udacity",
            "degree": "Front-End Web Developer Nanodegree",
            "dates": "2015-present",
            "courses":["Intro to HTML and CSS","How to Use Git and GitHub", "JavaScript Basics", "Intro to jQuery", "Object-Oriented JavaScript", "HTML5 Canvas", "Website Performance Optimization", "Browser Rendering Optimization", "Intro to AJAX", "JavaScript Design Patterns", "JavaScript Testing"],
            "link": "https://www.udacity.com/"
        },
        {
            "name": "Codecademy",
            "degree": "Front-End Web Developer",
            "dates": "2014-2015",
            "courses": ["Make a Website", "Make an Interactive Website", "HTML & CSS", "JavaScript", "jQuery"],
            "link": "https://www.codecademy.com/"
        },
        {
            "name": "Adobe",
            "degree": "Training Videos",
            "dates": "2014-2015",
            "courses": ["Photoshop", "Dreamweaver"],
            "link": "http://tv.adobe.com/"
        }
                ]

    };

education.display = function () {

    //Comment out HTMLworkStart, so that accordion-content wraps around work-entry.
var accHeading, accContent;
    accHeading = $('#education');
    accContent = $('<div class= "accordion-content"><div class= "education-entry"></div></div>');
    accHeading.append(accContent);

    $(".education-entry:last").append(HTMLschoolHeader);

    for (var school in education.school){
        //$("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.school[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.school[school].degree);
        var formattedSchoolAndDegree = formattedName + formattedDegree

        $(".education-entry:last").append(formattedSchoolAndDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.school[school].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.school[school].location);
        $(".education-entry:last").append(formattedLocation);

        for (major in education.school[school].majors){
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.school[school].majors[major]);
            $(".education-entry:last").append(formattedMajor);
        }

   };

    $(".education-entry:last").append(HTMLonlineClasses);

   for (var onlineCourse in education.onlineClasses) {
        //$("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineCourse].name);
        var formattedDegree = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineCourse].degree);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineClasses[onlineCourse].dates);
        var formattedOnline = formattedTitle + formattedDegree + formattedDates
        $(".education-entry:last").append(formattedOnline);

        for (var course in education.onlineClasses[onlineCourse].courses){
            var formattedCourses = HTMLonlineCourses.replace("%data%", education.onlineClasses[onlineCourse].courses[course]);
            $(".education-entry:last").append(formattedCourses);
        }

        var formattedCourseLink = HTMLcourseLink.replace
        ("%data%", education.onlineClasses[onlineCourse].link);
        $(".education-entry:last").append(formattedCourseLink);
   }
}

education.display();

    $(document).click(function(loc){
        var x = loc.pageX;
        var y = loc.pageY;
          logClicks(x,y); //code
        });

$(document).ready(function(){

    //create accordion based on union design
    $('#accordion').find('.accordion-toggle').click(function(){

      //Expand or collapse this panel
      $(this).next().slideToggle('fast');

      //Hide the other panels
      $(".accordion-content").not($(this).next()).slideUp('fast');

    });

});
