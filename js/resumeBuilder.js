/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name = "Kenneth Anthony Molina";
 var role = "Web Developer";





var skills = ["HTML", "JavaScript", "CSS", "JQuery", "PHP", "SQL"];

var bio = {
  name : "Kenneth Anthony Molina",
  role : "Web Developer",
  contacts : {
    mobile : "09951725477",
    email : "kenanthonymolina@gmail.com",
    location : "Quezon City, Philippines"
  },
  welcomeMessage: "Hello there! Feel free to browse on my page.",
  bioPic : "images/me.jpg"
}

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var education = {
  schools : [
    {
      name : "Saint Peter Catholic School of Mulanay",
      location : "Mulanay, Quezon",
      degree : "High School",
      dates : "2004-2008"
    },
    {
      name : "Far Easter University",
      location : "Morayta, Manila",
      degree : "BS Applied Mathematics with Information Technology",
      dates : "2008-2012"
    }
  ]
};

var work = {
  jobs : [
    {
      employer : "Department of Social Welfare and Development - Listahanan",
      title : "Information Technology Officer I",
      location : "Batasan road, Quezon City",
      dates : "March 2015 - present",
      description : "Working in System Development Team where we develops web and stand-alone system to be used by the office"
    },
    {
      employer : "Department of Social Welfare and Development - Listahanan",
      title : "Information Technology Officer I",
      location : "Batasan road, Quezon City",
      dates : "March 2015 - present",
      description : "Working in System Development Team where we develops web and stand-alone system to be used by the office"
    },
  ]
}
