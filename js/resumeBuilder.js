/*
var awesomeThoughts = "I am Jared and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

var name = "jared headrick"
var formattedName = HTMLheaderName.replace("%data%",name);
var role = "product designer"
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedName).append(formattedRole);
*/
var bio = {
  "name": "jared",
  "role": "product designer",
  "welcomeMessage": "welcome to my resume!",
  "bioPic": "images/fry.jpg",
  "contacts": {
    "phone": "402.402.4020",
    "email": "email@gmail.com",
    "github": "jrodhead",
    "location": "Lincoln"
  },
  "skills": ["HTML5", "CSS3", "JavaScript"]
}

var work = {
  "jobs": [
    {
      "employer": "Nelnet",
      "title": "Product Owner",
      "location": "Lincoln, NE",
      "dates": "2015 - present",
      "description": "Owner of student loan servicing windows application"
    },
    {
      "employer": "Nebraska Book Company",
      "title": "Business Analyst",
      "location": "Lincoln, NE",
      "dates": "2013 - 2015",
      "description": "being awesome"
    },
    {
      "employer": "Nebraska Book Company",
      "title": "Product Lead - Internet Services Support",
      "location": "Lincoln, NE",
      "dates": "2011 - 2013",
      "description": "being sweet"
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "STAR System Scalability",
      "dates": "2016",
      "description": "ensure application is able to handle projected capacity",
      "images": ["images/197x148.gif","images/197x148.gif","images/197x148.gif"]
    },
    {
      "title": "2016 Tax Reporting",
      "dates": "2016-17",
      "description": "report 1098 and 1099 info to borrowers and the IRS",
      "images": ["images/197x148.gif","images/197x148.gif","images/197x148.gif"]
    }
  ]
}

var education = {
  "schools": [
    {
      "name": "McNally Smith College of Music",
      "location": "St.Paul, MN",
      "degree": "A.A.S.",
      "major": "Music Business",
      "dates": "2006-07",
      "url": "http://www.mcnallysmith.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": 2017,
      "url": "https://classroom.udacity.com/courses/ud804"
    }
  ]
}
