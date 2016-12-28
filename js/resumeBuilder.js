var work = {
    "jobs": [{
        "employer": "employer",
        "title": "titleName",
        "location": "location1",
        "dates": "2016-11-11",
        "description": "dedededescription"
    }, {
        "employer": "employer2",
        "title": "titleName2",
        "location": "location2",
        "dates": "2016-11-11",
        "description": "dedededescription"
    }]
};

var projects = {
    "projects": [{
        "title": "titleName",
        "dates": "2016-11-12",
        "description": "TestDescription",
        "images": ["http://url1", "http://ur2"]
    }, {
        "title": "titleName222",
        "dates": "2016-11-12",
        "description": "TestDescription",
        "images": ["http://url1", "http://ur2"]
    }]
};

var bio = {
    "name": "Jiashu Ji",
    "role": "marksman",
    "welcomeMessage": "Hello",
    "biopic": "pic.com",
    "contacts": {
        "mobile": "18659xxxxxx",
        "email": "jiashuji@foxmail.com",
        "github": "Mimotri",
        "location": "Shenzhen"
    },
    "skills": ["Q", "W", "E", "R"]
};

var education = {
    "schools": [{
        "name": "",
        "location": "",
        "degree": "",
        "dates": "",
        "url": "",
        "major": "",
        "majors": [" ", " "]
    }, {
        "name": "",
        "location": "",
        "degree": "",
        "dates": "",
        "url": "",
        "major": "",
        "majors": [" ", " "]
    }],
    "onlineCourses": [{
        "title": "",
        "school dates": "",
        "url": ""
    }, {
        "title": "",
        "school dates": "",
        "url": ""
    }]
};


// creat name
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);


//creat skills
var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var fomattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(fomattedSkill);
    }
}


//creat jobs


function displayWork() {
    var HTMLworkStart = '<div class="work-entry"></div>';
    var HTMLworkEmployer = '<a href="#">%data%';
    var HTMLworkTitle = ' - %data%</a>';
    var HTMLworkDates = '<div class="date-text">%data%</div>';
    var HTMLworkLocation = '<div class="location-text">%data%</div>';
    var HTMLworkDescription = '<p><br>%data%</p>';

    function writeWork(value) {
        $("#workExperience").append(HTMLworkStart);
        var fomattedEmployer = HTMLworkEmployer.replace("%data%", value.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", value.title);
        var fomattedEmployerTitle = fomattedEmployer + formattedTitle;
        $(".work-entry:last").append(fomattedEmployerTitle);

        var fomattedDates = HTMLworkDates.replace("%data%", value.dates);
        $(".work-entry:last").append(fomattedDates);

        var fomattedLocation = HTMLworkLocation.replace("%data%", value.location);
        $(".work-entry:last").append(fomattedLocation);

        var fomattedDescription = HTMLworkDescription.replace("%data%", value.description);
        $(".work-entry:last").append(fomattedDescription);
    }
    work.jobs.forEach(writeWork);

    //  for (var job in work.jobs) {
    //      $("#workExperience").append(HTMLworkStart);

    //      var fomattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    //      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    //      var fomattedEmployerTitle = fomattedEmployer + formattedTitle;
    //      $(".work-entry:last").append(fomattedEmployerTitle);

    //      var fomattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    //      $(".work-entry:last").append(fomattedDates);

    //      var fomattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    //      $(".work-entry:last").append(fomattedLocation);

    //      var fomattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    //      $(".work-entry:last").append(fomattedDescription);
    // }
}

displayWork();


//international 
var internationalizeButton = '<button>Internationalize</button>';

$("#main").append(internationalizeButton);

function inName() {
    var oldName = bio.name.split(" ");
    var firstName = oldName[0].slice(0, 1).toUpperCase() + oldName[0].slice(1).toLowerCase();
    var lastName = oldName[1].toUpperCase();
    var newName = firstName + " " + lastName;
    return newName;
}


//creat project

projects.display = function() {
    var HTMLprojectStart = '<div class="project-entry"></div>';
    var HTMLprojectTitle = '<a href="#">%data%</a>';
    var HTMLprojectDates = '<div class="date-text">%data%</div>';
    var HTMLprojectDescription = '<p><br>%data%</p>';
    var HTMLprojectImage = '<img src="%data%">';
    console.log("display!");

    function writeProjects(project) {
        $("#projects").append(HTMLprojectStart);
        var fomattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(fomattedProjectTitle);
        
        var fomattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(fomattedProjectDates);

        var fomattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(fomattedProjectDescription);

        var fomattedProjectImage = HTMLprojectImage.replace("%data%", project.images);
        $(".project-entry:last").append(fomattedProjectImage);
    }
    projects.projects.forEach(writeProjects);
};

projects.display();


$("#mapDiv").append(googleMap);
