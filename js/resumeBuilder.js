
//In order to make the code easy to follow, each object is ordered by the way it is presented on the webpage.


//The object bio is used to display the information in the header and footer.
var bio = {
    "name": "Kelsey Steele",
    "role": "Web Developer",
    "contacts": {
        "email": "kasteele8@gmail.com",
        "mobile": "(845) 549-6038",
        "location": "Hopewell Junction, NY",
        "github": "KelseySteele",
        "twitter": "@GoodGreenVibes"  
                },
    "welcomeMessage": "I am an enthusiastic front-end web developer who can help you.",
    "skills": [
        "JavaScript", "HTML", "CSS", "Adobe Dreamweaver", "Wordpress","Git/GitHub"
               ],
    "bioPic": "images/ProfilePicture.jpg"
    };
    
bio.display = function(){
    
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    
    var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedImage);  
    
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedlocation);
    
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedgithub);
    
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedtwitter);
    
    var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#topContacts").append(formattedWelcome);
    
}



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
    
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formattedSkill); 
    }
    //code
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
    
var work = {
        "jobs":
            [
                {
                    "position": "Web Developer",
                    "employer" : "KenCast",
                    "location" :"White Plains, NY",
                    "years" : "2014-present",
                    "description": "Create and update WordPress pages for KenCast. Inc, a technology company."
                    
                },
                {
                    "position": "Library Clerk",
                    "employer" : "East Fishkill Community Library",
                    "location" :"Hopewell Junction, NY",
                    "years" : "2013-present",
                    "description": "Contribute to the reputation of the East Fishkill Library  as being the best branch in the Mid Hudson Library system. I am well known for being able to assist library patrons in using our computer resources."
                },
                 {
                    "position": "Social Media Manager",
                    "employer" : "Safe Haven Farm Sanctuary",
                    "location" :"Poughquag, NY ",
                    "years" : "2013-present",
                    "description": "Manage the social media pages of Safe Haven Farm Sanctuary and have increased their social media following by more than 60%."
                    
                }    
            ]
        }
        
    
 function displayWork(){
        for (job in work.jobs){
    
                $("#workExperience").append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace
                ("%data%", work.jobs[job].employer);
                var formattedTitle = HTMLworkTitle.replace
                ("%data%", work.jobs[job].position );
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                
                $(".work-entry:last").append(formattedEmployerTitle);
                
                var formattedYears = HTMLworkDates.replace
                ("%data%", work.jobs[job].years);
                $(".work-entry:last").append(formattedYears);
                
                var formattedDescription = HTMLworkDescription.replace
                ("%data%", work.jobs[job].description);
                $(".work-entry:last").append(formattedDescription);           
                            }
 }
 
  displayWork();
 
        
var projects = {
    "projects" :
            [
                {
                    "name": "Mockup to Website",
                    "description": "As part of my Udacity coursework, I demonstrated my ability to create HTML and CSS files that mimicked a predesigned PDF version of a webpage. The webpage is about an orange Udacity mug.",
                    "image": "images/WebsiteMockup.jpg" 
                },
                {
                    "name": "Good Green Vibes Website",
                    "description": "Most environmental websites are overcrowded and hard to navigate. I created GoodGreenVibes.org in order to provide the world with a simple and user-friendly website about environmental issues. I created the website with HTML, CSS, JavaScript, jQuery, Adobe Dreamweaver, and Adobe Photoshop.",
                    "image": "images/GoodGreenVibes.jpg"
                },
                {
                    "name": "Tic Tac Toe Game",
                    "description": "I used JavaScript, HTML, and CSS to create a Tic Tac Toe game. I experimented with different features, so you will find three different versions on my GitHub link. The first one is the simplest tic tac toe game; it uses buttons to create the tic tac toe board. In the second version, I used game objects to make the code more readable. In the third version, I created a counter which keeps track of the number of X and O wins.",
                    "image": "images/TicTacToeGame.jpg"
                } 
            ]
            
        }
 
projects.display = function () {
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedProjectsName = HTMLprojectTitle.replace("%data%", projects.projects[project].name);
        $(".project-entry:last").append(formattedProjectsName);
                
        var formattedProjectsDescription = HTMLprojectDescription.replace
               ("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectsDescription);
        
        var formattedProjectsImage = HTMLprojectImage.replace
            ("%data%", projects.projects[project].image);
        $(".project-entry:last").append(formattedProjectsImage);   
   }
}

projects.display();
    var education = {
    "schools": [
        {
            "name": "University of Vermont",
            "location": "Burlington, VT",
            "dates": "2009-2013",
            "degree": "Bachelor of Arts",
            "major": ["Environmental Studies"]    
        },
        
        {
            "name": "John Jay High School",
            "location": "Hopewell Junction, NY",
            "dates": "2005-2009",
            "degree": "High School degree",
            "major" : ["Math & Science"]
        }
                 ],
    
    "onlineClasses":[
        {
            "name": "Udacity",
            "degree": "Front-End Web Developer Nanodegree",
            "dates": "2015-present",
            "courses":["Intro to HTML and CSS","How to Use Git and GitHub", "JavaScript Basics"]
        },
        {
            "name": "Codecademy",
            "degree": "Front-End Web Developer",
            "dates": "2014-2015",
            "courses": ["Make a Website", "Make an Interactive Website", "HTML & CSS", "JavaScript", "jQuery"]  
        },
        {
            "name": "Adobe",
            "degree": "Training Videos",
            "dates": "2014-2015",
            "courses": ["Photoshop", "Dreamweaver"]  
        }
                ]
    
    }

education.display = function () {
    for (school in education.schools){
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        
         $("#education").append(HTMLschoolStart);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        
        $("#education").append(HTMLschoolStart);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        
         $("#education").append(HTMLschoolStart);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
         
         $("#education").append(HTMLschoolStart);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        
        var formattedSchools = formattedName + formattedDegree + formattedDates + formattedMajor + formattedLocation; 
        $(".education-entry:last").append(formattedSchools);
             
   }
   
   $("#education").append(HTMLonlineClasses)
   
   for (onlineCourse in education.onlineClasses) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineCourse].name);
        var formattedDegree = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineCourse].degree);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineClasses[onlineCourse].dates);
        var formattedOnline = formattedTitle + formattedDegree + formattedDates
        $(".education-entry:last").append(formattedOnline);
        for (course in education.onlineClasses[onlineCourse].courses){
            var formattedCourses = HTMLonlineCourses.replace("%data%", education.onlineClasses[onlineCourse].courses[course]);
            $(".education-entry:last").append(formattedCourses);
        }   
   }
}


education.display(); 

     
    
    $(document).click(function(loc){
        var x = loc.pageX;
        var y = loc.pageY;
          logClicks(x,y); //code
        });
  
  
  $("#mapDiv").append(googleMap);
  initializeMap();