var name = "Piyush Patel";
var formattedName = HTMLheaderName.replace("%data%",  name);

$("#header").append(formattedName);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").append(formattedRole);

var bio = {
  "name": "Piyush",
  "role": "Web Developer",
  "contacts": {
    "mobile": "xxx-xxx-xxxx",
    "email": "piyushpatel@gmail.com",
    "github": "piyushpatel2005",
    "twitter": "@piyushpatel.ee",
    "location": "Toronto, Canada"
  },
  "welcomeMessage": "Hi everyone, Checkout my resume. I've experience with HTML5 semantic tags, CSS3, JavaScript, Bootstrap, Foundation 5, Git of course, Grunt and much more. If you find this interesting and would like to hire me, please contact me.",
  "skills": ["HTML", "CSS", "JavaScript", "Bootstrap", "Foundation 5", "jQuery", "Git", "Grunt"],
  "bioPic": "images/portfolio.jpg"
}

var work = {
  "jobs": [
        {
          "employer": "GE Digital Energy",
          "title": "Assembly Technician",
          "dates": "06/2016 - 09/2016",
          "location": "Markham, Ontario, Canada",
          "description": "Testing of electronics panels and circuit boards, Assembly of electroincs products on the circuit boards."
        },
        {
          "employer": "Elecon Engineering Company",
          "title": "Electrical Engineer",
          "dates": "05/2007 - 01/2016",
          "location": "Anand, Gujarat, India",
          "description": "Troubleshooting and installation of electrical/electronics products and machines for retrofitting as well."
        }
  ]
};

var education = {
  "schools":
  [
    {
      'name': "D N High School",
      "degree": "HSC",
      "location": "Anand, Gujarat, India",
      "dates": "2000-2002",
      "url": "http://dnhighschool.com",
      "majors": ["Science", "Maths", "Biology"]
    },
    {
      'name': "Bharat High school",
      "degree": "SSC",
      "location": "Uttarsanda, Gujarat, India",
      "dates": "1989 - 2000",
      "url": "http://uttarsanda.com",
      "majors": ["Science", "Maths", "English"]
    }
  ]
};



var projects = {
  "projects" : [
    {
      "title": "Portfolio website",
      'dates': "August - 2016",
      'description': "This portfolio website uses HTML, CSS and Flexbox to design a completely responsive website from scratch. It doesn't use any framework to build so it is light-weight.",
      'image': "http://placehold.it/200x200"
    },
    {
      "title": "Interactive Resume",
      'dates': "September 2016",
      'description': "This interactive resume uses JavaScript and jQuery to add interactivity and generate dynamic content on the web page.",
      'image': "http://placehold.it/200x200"
    }
  ]
};

HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$(HTMLcontactGeneric).append(HTMLmobile);
$("#header").append(HTMLmobile);

HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(HTMLemail);

HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#header").append(HTMLgithub);

HTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#header").append(HTMLtwitter);

HTMLlocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#header").append(HTMLlocation);

HTMLbioPic = HTMLbioPic.replace("%data%", "images/portfolio.jpg");
$("#header").append(HTMLbioPic);

HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(HTMLwelcomeMsg);


    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);

}


function displayWork() {
  for(i = 0; i < work.jobs.length; i++) {
    $("#workExperience").append(HTMLworkStart);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
    formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    $(".work-entry:last").append(formattedLocation);

    formattedHTMLworkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    $(".work-entry:last").append(formattedHTMLworkDates);
    //
    formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedHTMLworkDescription);
  }
}

displayWork();

function locationizer (work) {
  var locationArray = [];
  for(i = 0; i < work.jobs.length; i++) {
    locationArray.push(work.jobs[i].location);
  }
  // console.log(locationArray);
  return locationArray;
}

locationizer(work);

function inName(name) {
  namesArray = name.split(" ");
  firstName = namesArray[0];
  lastName = namesArray[1];
  lastName = lastName.toUpperCase();
  return firstName + " " + lastName;
}

// console.log(inName("Piyush Patel"));

$("#main").append(internationalizeButton);

$("button").css({"backgroundColor": "orange",
                  "padding": "10px",
                  "textTransform": "uppercase",
                  "borderRadius": "10px",
                  "color": "white",
                  "fontWeight": "bold"
});
// $("button").css({}"backgroundColor", "orange");
// $("button").css("padding", "10px");
// $("button").css("textTransform", "uppercase");
// $("button").css("borderRadius", "10px");
// $("button").css("color", "white");
// $("button").css("fontWeight", "bold");
$("button").click(function () {
  $("button").fadeTo("opacity", "0.5");
  $("button").css("color", "orangeRed");
});

projects.display = function () {
  for(i = 0; i < projects.projects.length; i++) {
    console.log(projects.projects.length);
    $("#projects").append(HTMLprojectStart);
    formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    $(".project-entry:last").append(formattedprojectTitle);
    formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    console.log(formattedprojectDates);
    $(".project-entry:last").append(formattedprojectDates);
    formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    console.log(formattedprojectDescription);
    $(".project-entry:last").append(formattedprojectDescription);
    formattedprojectsImage = HTMLprojectImage.replace("%data%", "http://placehold.it/200x200");
    $(".project-entry:last").append(formattedprojectsImage);

  }

}

projects.display();

$("#mapDiv").append(googleMap);
