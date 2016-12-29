var work = {
    "jobs": [{
        "employer": "Tencent",
        "title": "Product Manager",
        "location": "Shenzhen",
        "dates": "2014-8-1~Pesent",
        "description": "As Product Manager, build the products for teachers and students to improve the efficiency and user-experience of teaching as well as studying.Builded the client for teacher’s teaching ,management background  for school administer managing, tools for student studying."
    }]
};

var projects = {
    "projects": [{
        "title": "Tencent Classroom Question Library",
        "dates": "2016-11-12",
        "description": "As the main person in charge of building the module, covering the Web and APP.Responsible for communication with the organization, the operational side of the collection needs, planning functions and versions, to promote the function of the design and development, and according to user feedback and data to optimize the function.The project won the company's internal “Lightning” award of department .",
        "images": []
    }, {
        "title": "Tencent Classroom Live Client",
        "dates": "2015-1~2015-12",
        "description": "As the main person in charge of building Tencent Classroom live capabilities, including teachers and students tools, covering the PC client and Web side.Responsible for the development of new functions based on feedback and optimization of existing capacity, with the Basic Support group to enhance performance indicators, including ‘million classroom project team’ has won the company's internal “Lightning” award of department . ",
        "images": []
    }, {
        "title": "Tencent Classroom Mixed-course System",
        "dates": "2016-11-12",
        "description": "Helped build the mixed-course system, which is responsible for exercises to remind the module construction.With development and design together for a period of 3 months of closed development, the function released as scheduled, \"Mixed-course Project Team\" won the company's internal “Lightning Award” of department .",
        "images": []
    }]
};

var bio = {
    "name": "Mimotri mo",
    "role": "Front-End Engineer",
    "welcomeMessage": "Hello",
    "biopic": "/images/markersman.png",
    "contacts": {
        "mobile": "18639xxxxxx",
        "email": "XXXXXXX@gmail.com",
        "github": "Mimotri",
        "location": "Shenzhen"
    },
    "skills": ["Product Management", "UI Design", "HTML/CSS/JavaScript", "Python"]
};

var education = {
    "schools": [{
        "name": "Xi'an Jiaotong Univercity",
        "location": "Xi'an",
        "degree": "Bachelor",
        "dates": "2010~2014",
        "url": "http://www.xjtu.edu.cn/",
        "major": "Nuclear Engineering",
        "majors": ["Seconnd major!", "Third major!"]
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016-11~Present",
        "url": "https://cn.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

//function:display bio
bio.display = function() {
    var HTMLheaderName = '<h1 id="name">%data%</h1>';
    var HTMLheaderRole = '<span>%data%</span><hr>';

    var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
    var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
    var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
    var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

    var HTMLbioPic = '<img src="%data%" class="biopic">';
    var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

    var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
    var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

    function inName(name) {
        var oldName = name.split(" ");
        var firstName = oldName[0].slice(0, 1).toUpperCase() + oldName[0].slice(1).toLowerCase();
        var lastName = oldName[1].toUpperCase();
        var newName = firstName + " " + lastName;
        return newName;
    }

    var fommattedName = HTMLheaderName.replace("%data%", inName(bio.name));
    var fomattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(fommattedName, fomattedRole);

    var fomattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var fomattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var fomattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var fomattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(fomattedMobile, fomattedEmail, fomattedGithub, fomattedLocation);
    $("#footerContacts").append(fomattedMobile, fomattedEmail, fomattedGithub, fomattedLocation);

    var fomattedWelcomMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var fomattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(fomattedBiopic, fomattedWelcomMessage);

    var fomattedSkill = "";

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            fomattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(fomattedSkill);
        }
    }
};

//function:display work
work.display = function() {
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
};

//function:display project
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

//function:display education
education.display = function() {
    var HTMLschoolStart = '<div class="education-entry"></div>';
    var HTMLschoolName = '<a href="#">%data%';
    var HTMLschoolDegree = ' -- %data%</a>';
    var HTMLschoolDates = '<div class="date-text">%data%</div>';
    var HTMLschoolLocation = '<div class="location-text">%data%</div>';
    var HTMLschoolMajor = '<em><br>Major: %data%</em>';
    var fommattedName = "";
    var fommattedDegree = "";
    var fommattedDates = "";
    var fommattedLocaton = "";
    var fommattedMajors = "";

    function writeSchool(school) {
        $("#education").append(HTMLschoolStart);
        fommattedName = HTMLschoolName.replace('#">%data%', school.url + '">' + school.name);
        fommattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        fomattedDates = HTMLschoolDates.replace("%data%", school.dates);
        fomattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        fomattedMajor = HTMLschoolMajor.replace("%data%", school.major);
        $(".education-entry").append(fommattedName, fommattedDegree, fomattedDates, fomattedLocation, fomattedMajor);
        if (school.majors.length > 0) {
            for (var i = 0; i < school.majors.length; i++) {
                fomattedMajors = HTMLschoolMajor.replace("%data%", school.majors[i]);
                $(".education-entry:last").append(fomattedMajors);
            }
        }
    }

    var HTMLonlineClasses = '<h3>Online Classes</h3>';
    var HTMLonlineTitle = '<a href="#">%data%';
    var HTMLonlineSchool = ' - %data%</a>';
    var HTMLonlineDates = '<div class="date-text">%data%</div>';
    var HTMLonlineURL = '<br><a href="#">%data%</a>';
    var fomattedOnlineTitle = "";
    var fomattedOnlieSchool = "";
    var fomattedOnlineDates = "";
    var fomattedOlineURL = "";

    function writeOnlineClass(course) {
        fomattedOnlineTitle = HTMLonlineTitle.replace('#">%data%', course.url + '">' + course.title);
        fomattedOnlieSchool = HTMLonlineSchool.replace("%data%", course.school);
        fomattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
        fomattedOlineURL = HTMLonlineURL.replace('#">%data%', course.url + '">' + course.url);
        $(".education-entry:last").append(fomattedOnlineTitle+fomattedOnlieSchool, fomattedOnlineDates, fomattedOlineURL);
    }

    education.schools.forEach(writeSchool);
    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        education.onlineCourses.forEach(writeOnlineClass);
    }
};


projects.display();
work.display();
bio.display();
education.display();

$("#mapDiv").append(googleMap);
