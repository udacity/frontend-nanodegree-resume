//////////////////
// Work Section //
//////////////////
var work = {

  //encapsulated display function
  "display" : function(){
    for (job in work.jobs){
      $("#workExperience").append(HTMLworkStart);
      //console.log(work.jobs[job].employer);
      var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;

      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation).append("<div style='clear: both;'></div>");
      var formattedDescription =
        HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
  }},

  "jobs" : [
  {
    "title": "Rideshare Driver",
    "employer": "Lyft",
    "dates": "2015-2016",
    "description" : "Drives people around in a manner not entirely unlike a taxi driver, only better.",
    "location": "Boston, MA"
  },
    {
      "title": "Front End Developer",
      "employer": "Analog Devices",
      "dates": "2012-2014",
      "description" : "Developed front end for in-house resource tracking web application",
      "location": "Norwood, MA"
    },
    {
      "title" : "File Clerk",
      "employer" : "Harvard Graduate School Of Arts and Sciences",
      "dates" : "2011-2012",
      "description" : "Opened, processed, filed graduate school applications",
      "location" : "Cambridge, MA"
    },
    {
    "title": "Census Enumerator",
    "employer": "U.S Census Bureau",
    "dates": "2010-2011",
    "description" : "Went door to door contacting citizens whose census forms had not been returned.",
    "location": "Somerville, MA"
  },
  {
    "title" : "Senior Software Architect",
    "employer" : "Houghton Mifflin",
    "dates" : "1998-2008",
    "description" : "Sales and Marketing applications in Lotus Notes and SQL, IT Support",
    "location" : "Boston, MA"
  }
  ]
};

work.display();

////////////////////////////////
//  education section         //
////////////////////////////////
var education = {
  "schools" : [
    {
      "name": "Udacity",
      "dates": "2016",
      "location": "Somerville, MA",
      "majors": "Front End Web Developer",
      "degree": "Nanodegree",
      "url" : ""
    },
    {
      "name" : "American International College, Computer Career Institute",
      "dates" : "2008-2011",
      "location": "Burlington, MA",
      "majors": "Enterprise Solutions Developer",
      "degree" : "Master Certificate",
      "url" : ""
    },
    {
      "name" : "American International College, Computer Career Institute",
      "dates" : "2008-2011",
      "location": "Cambridge, MA",
      "majors": "Visual Communication - Digital 3-D Design",
      "degree" : "Master Certificate",
      "url" : ""
    },
    {
      "name" : "Boston University, School of Public Communication",
      "dates" : "1977-1981",
      "location" : "Boston, MA",
      "majors" : "Journalism",
      "degree" : "",
      "url" : ""
    }
  ],
  "onlineCourses": [
    {
      "title": "Front End Web Developer",
      "school": "Udacity",
      "date": "2015-2016",
      "url": "http://www.udacity.com/course/ud804"
    }
  ],

//encapsulated display function
"display" : function(){

  for (school in education.schools){
    $("#education").append(HTMLschoolStart);
    //console.log(education.schools[school].name);
    var formattedschoolName =
    HTMLschoolName.replace("%data%",education.schools[school].name);
    $(".education-entry:last").append(formattedschoolName);

    var formattedschoolDates =
    HTMLschoolDates.replace("%data%",education.schools[school].dates);
    $(".education-entry:last").append(formattedschoolDates);
    var formattedschoolLocation =
    HTMLschoolLocation.replace("%data%",education.schools[school].location);
    $(".education-entry:last").append(formattedschoolLocation).append("<div style='clear: both;'></div>");

    // formatting an absence of degree -- don't show degree + comma if no degree.
    var formattedComma = ",";
    if (!education.schools[school].degree) {formattedComma = "";}

    var formattedschoolDegreeMajor =
    HTMLschoolDegreeMajor.replace("%degree%",education.schools[school].degree).replace("%comma%", formattedComma).replace("%major%",education.schools[school].majors);
    $(".education-entry:last").append(formattedschoolDegreeMajor);
  }

  $("#education").append(HTMLonlineClasses);

  for (onlineCourse in education.onlineCourses)
  {
    var formattedTitleSchool = HTMLonlineTitleSchool.replace("%title%", education.onlineCourses[onlineCourse].title).replace("%school%", education.onlineCourses[onlineCourse].school);
    var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].date);
    var myURL = education.onlineCourses[onlineCourse].url;
    var formattedURL = HTMLonlineURL.replace("%url%", myURL).replace("%data%", myURL);
    $(".onlineClasses-entry:last").append(formattedTitleSchool);
    $(".onlineClasses-entry:last").append(formattedDates);
    $(".onlineClasses-entry:last").append(formattedURL);
  }
  }
};

education.display();


////////////////////////////////
//  project section           //
////////////////////////////////


var projects = {
  "projects" : [
  {
    "title" : "Big Foo",
    "dates" : "2011",
    "description" : "Little bunny Foo Foo Went hopping through the forest Scooping up the field mice And bopping them on the head Down came the Good Fairy, and she said 'Little bunny Foo Foo I don't want to see you Scooping up the field mice And bopping them on the head. 'I'll give you 3 chances, And if you don't behave, I will turn you into a goon!'",
    "images" : [
      { "pic" : "images/leverett-320x240.jpg", "alt": "Sky over the Leverett Circle, Boston" },
      { "pic" : "images/rooster-320x240.jpg", "alt": "Rooster, Somerville MA" }
    ],
    "url" : "http://www.constancehirsch.com"
  },
    {
    "title" : "This Project Has No Picture",
    "dates" : "2012",
    "description" : "Little bunny Foo Foo Went hopping through the forest Scooping up the field mice And bopping them on the head Down came the Good Fairy, and she said 'Little bunny Foo Foo I don't want to see you Scooping up the field mice And bopping them on the head. 'I'll give you 3 chances, And if you don't behave, I will turn you into a goon!'",
    "images" : [
      { "pic" : "", "alt": "" }
    ],
    "url" : "http://www.constancehirsch.com"
  },
  {
  "title" : "Little Bunny FooFoo",
  "dates" : "2013",
  "description" : "Little bunny Foo Foo Went hopping through the forest Scooping up the field mice And bopping them on the head Down came the Good Fairy, and she said 'Little bunny Foo Foo I don't want to see you Scooping up the field mice And bopping them on the head. 'I'll give you 3 chances, And if you don't behave, I will turn you into a goon!'",
  "images" : [
    { "pic" : "images/wormedShell-320x240.jpg", "alt": "Worm casts in a conch shell" }
  ],
  "url" : "http://www.constancehirsch.com"
  }
  ],
    //encapsulated display function
  "display" : function(){
    var projCount = 0;
    var addGray = "";
  for (proj in projects.projects){
    if (projCount == 0 || projCount == 2 ) { addGray = " project-gray";} else {addGray = "";}
    var formattedprojectStart = HTMLprojectStart.replace("%extraClass%", addGray);
    $("#projects").append(formattedprojectStart);
    var formattedprojectTitle =
      HTMLprojectTitle.replace("%url%",projects.projects[proj].url).replace("%data%",projects.projects[proj].title).replace("%dates%",projects.projects[proj].dates);
    $(".project-entry:last").append(formattedprojectTitle);

    var formattedprojectDescription =
      HTMLprojectDescription.replace("%data%",projects.projects[proj].description);
    $(".project-entry:last").append("<p>" + formattedprojectDescription);

    if (projects.projects[proj].images.length > 0) {
      for (image in projects.projects[proj].images) {
      var formattedprojectImage =
        HTMLprojectImage.replace("%data%",projects.projects[proj].images[image].pic).replace("%datum%",projects.projects[proj].images[image].alt);
      $(".project-entry:last").append(formattedprojectImage);
      }
    }
    projCount++;
  $(".project-entry:last").append("</p><div style='clear: both;'></div>");
  }
}
};

projects.display();


/////////////////
//bio section
////////////////
var bio = {
  "name": "Connie Hirsch",
  "role": "Front End Web Developer",
  "welcomeMessage": "<p>Is this thing on?  TAP TAP  I sure hope it's working.</p>  <p>Look out, Itchy! He's Irish!</p><p>Uh' no, they're saying 'Boo-urns, Boo-urns.' Attempted murder? Now honestly, what is that? Do they give a Nobel Prize for attempted chemistry? But, Aquaman, you cannot marry a woman without gills. You're from two different worlds… Oh, I've wasted my life.</p><p><strong>…And the fluffy kitten played with that ball of string all through the night.</strong> <em> On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night.</em> A lifetime of working with nuclear power has left me with a healthy green glow…and left me as impotent as a Nevada boxing commissioner.</p>",
  "contacts": {
      "mobile": "617 555-1234",
      "email": "connie.hirsch@gmail.com",
      "github": "ConnieHirsch",
      "twitter" : "ConnieHirsch",
      "location": "Somerville, MA"
    },
  "bioPic" :{
    "pic" : "images/watercolorSmall.jpg",
    "alt" : "A picture of me."
    },
  "skills": ["PHP", "CSS3", "Object-oriented coding", "Knitting", "Writing", "Navigation", "Demolition Derby"],
      //encapsulated display function
  "display" : function(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#topTitle").append(formattedName);
    $("#topTitle").append(formattedRole);

    var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#topContacts").append(formattedmobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedemail);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedgithub);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedtwitter);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedlocation);

    // add it to the footer as well!
    $("#footerContacts").append(formattedmobile);
    $("#footerContacts").append(formattedemail);
    $("#footerContacts").append(formattedgithub);
    $("#footerContacts").append(formattedtwitter);
    $("#footerContacts").append(formattedlocation);

    var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic.pic).replace("%datum%", bio.bioPic.alt);
    $("#bioPic").append(formattedbioPic);

    var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#welcome").append(formattedWelcome);

    $("#madSkills").append(HTMLskillsStart);
    //console.log(bio.skills);
        var formattedSkills = "";
        if (bio.skills.length > 0) {
          for (skill in bio.skills) {
            var nextSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            formattedSkills = formattedSkills.concat(nextSkill) ;
            //console.log(formattedSkills);
          }
        };
    $("#skills").append(formattedSkills);
  }

};

bio.display();

//////////////////////////////////
// Internationalize button work //
//////////////////////////////////

//$("#main").append(internationalizeButton);


function inName() {
  /* var name = window.name; */ /* Gives comma-separated array */
  /*  var name = bio.name;   */ /* bio.name gives space-separated array */

  var name = bio.name.trim().split(" ");
  // Turn into an array ["AlbERt" "EINstEiN"]. Trim off whitespace.
  //console.log("name: " + name);
  var firstName = name[0].slice(0,1).toUpperCase()+ name[0].slice(1).toLowerCase();
  // Get and change the first name;
  var lastName = name[1].toUpperCase(); // Get and change the last name;
  console.log("firstName: " + firstName);
  console.log("lastName: " + lastName);
  var oldSpelling = $('#name').text();
  var newSpelling = firstName + " " + lastName;
  $('#name').text( newSpelling );
  console.log(newSpelling);
}

// map magic
$("#mapDiv").append(googleMap);

