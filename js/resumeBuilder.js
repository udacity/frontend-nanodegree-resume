/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  name : "Kenneth Anthony Molina",
  role : "Web Developer",
  contacts : {
    mobile : "09951725477",
    email : "kenanthonymolina@gmail.com",
    location : "Quezon City, Philippines"
  },
  welcomeMessage: "Hello there! Feel free to browse on my page.",
  skills : ["HTML", "JavaScript", "CSS", "JQuery", "PHP", "SQL"],
  bioPic : "images/me.jpg"
}

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
      employer : "Datascope Communication Philippines Incorporated",
      title : "Management Information System Developer",
      location : "Pasong Tamo, Makati",
      dates : "October 2012 - February 2015",
      description : "Create and Maintain System created using C, UNIX and FoxPro. The systems created are file manipulation"
    },
  ]
}

var project = {
  project : [
    {
      title : "Report Generator System",
      dates : "October 2015",
      description : "Synching of Data from mobile to Database"
    },
    {
      title : "Manual Matching Application",
      dates : "July 2016",
      description : "The system shows information from 2 database and ask the user if the information where match or not match"
    },
    {
      title : "Data Generator and Tracking System",
      dates : "December 2016 - February 2017",
      description : "It features tracking and data generation, where the user can input a query to generate datas to be given to the reqestor, the system will manipulate the query inputted to decrypt the encrypted information from the database"
    }
  ]
}

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
