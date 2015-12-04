/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
 "name": "Austin Kalkins",
 "role": "Programmer and Web Developer",
 "contacts": {
   "mobile": "(907)821-3771",
   "email": "heartofnova@gmail.com",
   "twitter": "@wibelda",
   "github": "luna-nova",
   "location": "Seattle, WA"
 },
 "welcomeMessage": "Greetings and Salutations! - Fargoth",
 "skills": ["Composition", "Design", "Programming"],
 "biopic": "../images/ahhart.jpg",
 "display": "function() {}"
}

var education = {
 "schools": [
   {
     "name": "Ketchikan High School",
     "location": "Ketchikan, AK",
     "degree": "N/A",
     "majors": "N/A",
     "dates": 2011,
     "url": "http://khs.kgbsd.org/Page/397"
   }
 ],
 "onlineCourses": [
   {
     "title": "Shaping Up With AngularJS",
     "school": "Code School",
     "date": 2015,
     "url": "https://www.codeschool.com/courses/shaping-up-with-angular-js"
   },
   {
     "title": "Building Blocks of NodeJS",
     "school": "Code School",
     "date": 2015,
     "url": "https://www.codeschool.com/courses/real-time-web-with-node-js"
   }
 ],
 "display": "function() {}"
}

var work = {
  "jobs": [
    {
      "employer": "Year Up Puget Sound",
      "title": "Student/Intern",
      "location": "Seattle, WA",
      "dates": "9/2015 - 8/2016",
      "description": "Business training program focusing on computer science and programming."
    },
    {
      "employer": "Wayward Coffeehouse",
      "title": "Barista",
      "location": "Seattle, WA",
      "dates": "11/2014 - 9/2015",
      "description": "Made espresso drinks as well as sandwiches in a geek-themed coffeehouse."
    },
    {
      "employer": "The Point",
      "title": "Front Counter Manager",
      "location": "Ketchikan, AK",
      "dates": "9/2011 - 10/2014",
      "description": "Trained new employees and managed front counter while making espresso drinks."
    }
  ],
  "display": "function() {}"
}

var projects = {
  "projects": [
    {
      "title": "hypertext",
      "dates": "6/2015 - 8/2015",
      "description": "Speed typing text game!",
      "images": ["../images/hypertext-main.png"]
    }
  ],
  "display": "function() {}"
}

var formatHTMLheaderName = HTMLheaderName.replace('%data%', bio.name);
var formatHTMLheaderRole = HTMLheaderRole.replace('%data%', bio.role);
var formatHTMLmobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
var formatHTMLemail = HTMLemail.replace('%data%', bio.contacts.email);
var formatHTMLtwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
var formatHTMLgithub = HTMLgithub.replace('%data%', bio.contacts.github);
var formatHTMLlocation = HTMLlocation.replace('%data%', bio.contacts.location);

var formatHTMLwelcomeMsg = HTMLwelcomemsg.replace('%data%', bio.welcomeMessage);
var formatHTMLbiopic = HTMLbiopic.replace('%data%', bio.biopic);
var formatHTMLskills;

var formatHTMLworkEmployer,
    formatHTMLworkTitle,
    formatHTMLworkDates,
    formatHTMLworkLocation,
    formatHTMLworkDescription;

for (var i = 0; i < bio.skills.length; i++) {
  formatHTMLskills = HTMLskills.replace('%data%', bio.skills[i]);
  $().append(formatHTMLskills);
}

for (var i = 0; i < work.jobs.length; i++) {
  $().append(HTMLworkStart);
  formatHTMLworkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
  formatHTMLworkTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
  $().prepend(formatHTMLworkEmployer + formatHTMLworkTitle);

  formatHTMLworkDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
  $().prepend(formatHTMLworkDates);

  formatHTMLworkLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
  $().prepend(formatHTMLworkLocation);

  formatHTMLworkDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
  $().prepend(formatHTMLworkDescription);
}
