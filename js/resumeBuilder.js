var work = {
  "jobs": [
    {
      "employer": "Flaming & Co",
      "title": "Head Bartender",
      "location": "Warsaw, Poland",
      "dates": "2009 - 2011",
      "description": "Creating Cocktail menu, seasonal and occasional. Supervising bartenders and waiters, maintaining and ordering stock. Preparing orders for waiters, hot, cold drinks, wines and cocktails. "
    },
    {
      "employer": "St. Georges Hospital",
      "title": "Assistant Theatre Practitioner",
      "location": "London, UK",
      "dates": "2011 - 2016",
      "description": "Assisting versatile medical team during surgical procedures in fastpaced emergency theatres. Preparing and maintaining medical equipment and stock in theatres"
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "Portfolio",
      "dates": "2016",
      "description": "Responsive, mobile first portfolio website using Bootstrap, CSS and jQuery",
      "images": ["images/portfolio.jpg"]
    }
  ]
}

var bio = {
  "name": "Andy Panasiuk",
  "role": "Web Developer",
  "welcomeMessage": "Welcome!",
  "bioPic": "images/logo.jpg",
  "contacts": {
    "mobile": "07507111029",
    "email": "apanasiuk@gmail.com",
    "github": "Androsh",
    "twitter": "@apanasiuk",
    "location": "London"
  },
  "skills": ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"]
}

var education = {
  "schools": [
    {
      "name": "Secondary School nr 1",
      "location": "Mlawa",
      "degree": "A-Lvl",
      "dates": "2002-2005",
      "url": "http://lo1mlawa.pl/",
      "majors": ["Math", "English", "History of Art", "Geography"]
    },
    {
      "name": "Massage and Rehabilitation",
      "location": "Ciechanow",
      "degree": "Associate's Degree",
      "dates": "2005-2007",
      "url": "http://www.mszciechanow.pl/",
      "major": ["Massage", "Rehabilitation"]
    }
  ],
  "onlineCourses": [
    {
      "title": "FEND",
      "school": "Udacity",
      "dates": "2016",
      "url": "http://udacity.com"
    }
  ]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);


if(bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkill);
};

// for(var i=0; i<9; i++){console.log(i);}

function displayWork() {
  for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
};

displayWork();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
  });


function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] +" "+name[1];
}
$("#main").append(internationalizeButton);

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

