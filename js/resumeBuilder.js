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
    "address" : "1 MIRAMAR ST # 929798, La Jolla, CA 92092­0003",
    "mobile" : "608­886­6617",
    "email" : "fhu6@wisc.edu",
    "picture" : "../images/fry.jpg",
    "welcome" : "Hello",
    "skill" : "Programming: Java, R, PHP, C, C++, HTML/CSS, JavaScript, "+
    "Matlab, Julia, XGboost package, Maxnet package, Apache Server, Chrome DevTool",
    "education" : "University of Wisconsin, Madison BS Computer Science, May 2016"
  }


  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  var formattedMobil = HTMLmobile.replace("%data%",bio.mobile);
  var formattedemail = HTMLemail.replace("%data%",bio.email);


  $("#header").append(formattedName);
  $("#header").append(formattedRole);
  $("#topContacts").append(formattedMobil);
  $("#topContacts").append(formattedemail);
  //jason course

  // var education = {
  //   "schools": [
  //   {
  //       "name" : "University of Wisconsin, Madison",
  //       "location" : "Madison, WI",
  //       "degree": "BS",
  //       "majors": ["Computer scicence","Statistics"],
  //       "dates": "2016, May",
  //       "url": "www.example.com"
  //   }
  //   ]
  //   "OnlineCourses":{
  //       "title": "Front-end web developer",

  //   }
  // }

