/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // $("#main").append("Fangzhou Hu");
 // var nicethought = "I am good and I am cool.";
 // var thought = nicethought.replace( "cool", "lazy"); //replace only replace the first appear of the pattern
 // //var thought = thought.replace("am","are");
 // console.log(thought);
 //  $("#main").append(thought);

  // //lesson 2 follow
  // var role = "Web Developer";
  // var formattedRole = HTMLheaderRole.replace("%data%",role);
  // $("#header").prepend(formattedRole);

  // //lesson 2
  // var name = "Fangzhou Hu";
  // var formattedName = HTMLheaderName.replace("%data%",name);
  // $("#header").prepend(formattedName);

  var bio = {
    "name" : "Fangzhou Hu",
    "role" : "Software Engineering/ Web Developer",
    "location": "La Jolla, CA",
    "address" : "1 MIRAMAR ST # 929798, La Jolla, CA 92092­0003",
    "mobile" : "608­886­6617",
    "email" : "fhu6@wisc.edu",
    "github" : "Mosqidiot",
    "picture" : "images/fry.jpg",
    "welcome" : "One question, why every company stop hiring entry level programmers?",
    "skill" : [ "Java (3 years)", "R (3 years)", "PHP (1 year)", "C (3 year)", "HTML/CSS (1 year)", "JavaScript (1 year)",
    "JQuery", "Bootstrap", "XGboost package", "Maxnet package", "Chrome DevTool" ],
    "education" : "University of Wisconsin, Madison BS Computer Science, May 2016"
  };


  var work = [
    {
    "employer" : "Industrial Refrigeration Consortium (IRC)",
    "title" : "Web Developer",
    "workdates": "June 2015 ­ May, 2016",
    "location" : "Madison, WI",
    "discription" : "Developed and maintained IRC's website, Apache Server and SQL database. "+
    "The IRC website provides refrigeration related educational resource to multinational "+
    "corporations such as Kraft and Nestle. I implemented a course testing app for clients "+
    "to create online tests and auto print out the test result, Developed the charge management "+
    "application of equipments in a refrigeration system, implemented a search engine using" +
    "Google API and other specific search functions for content display"
    }
  ];

    var education = {
    "schools": [
    {
        "name" : "University of Wisconsin, Madison",
        "location" : "Madison, WI",
        "degree": "Bachelor of Science",
        "majors": ["Computer scicence","Statistics"],
        "dates": "2016, May",
        "url": "www.wisc.edu"
    }
    ],
    "OnlineCourses":{
        "title": "Front-end web developer",

    }
  };
  // overview variable initialization
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  var formattedMobil = HTMLmobile.replace("%data%",bio.mobile);
  var formattedEmail = HTMLemail.replace("%data%",bio.email);
  var formattedGithub = HTMLgithub.replace("%data%",bio.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.location);
  //profile
  var formattedPic = HTMLbioPic.replace("%data%",bio.picture);
  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
  //skill
  var formatedSkillHeader = HTMLskillsStart;
  //work
  var formmatedEmploy
  //overview
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts").append(formattedMobil);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedLocation);
  $("#header").append(formattedPic);
  $("#header").append(formattedWelcome);

  //Skill glance
  $("#header").append(formatedSkillHeader);
  for(skill in bio.skill){
    $("#skills").append(HTMLskills.replace("%data%", bio.skill[skill]));
  }
  workdisplay();
  schoolDisplay();
  //work
  function workdisplay() {
    for(workid in work){
      $("#workExperience").append(HTMLworkStart);
      var foremployer = HTMLworkEmployer.replace("%data%", work[workid].employer);
      var fortitle = HTMLworkTitle.replace("%data%", work[workid].title);
      var fordates = HTMLworkDates.replace("%data%" , work[workid].workdates);
      var forloc = HTMLworkLocation.replace("%data%", work[workid].location);
      var fordisc = HTMLworkDescription.replace("%data%", work[workid].discription);

      $(".work-entry:last").append(foremployer);
      $(".work-entry:last").append(fortitle);
      $(".work-entry:last").append(fordates);
      $(".work-entry:last").append(forloc);
      $(".work-entry:last").append(fordisc);
    }
  }
  function schoolDisplay() {
    for(schoolid in education.schools){
      $("#education").append(HTMLschoolStart);
      var forschoolname = HTMLschoolName.replace("%data%",education.schools[schoolid].name);
      var forschooldegree = HTMLschoolDegree.replace("%data%",education.schools[schoolid].degree);
      var forschooldates = HTMLschoolDates.replace("%data%",education.schools[schoolid].dates);
      var forschoollocation = HTMLschoolLocation.replace("%data%",education.schools[schoolid].location);
      var forschoolmajor = HTMLschoolMajor.replace("%data%",education.schools[schoolid].majors);

      $(".education-entry").append(forschoolname);
      $(".education-entry").append(forschooldegree);
      $(".education-entry").append(forschooldates);
      $(".education-entry").append(forschoollocation);
      $(".education-entry").append(forschoolmajor);
    }
  }



