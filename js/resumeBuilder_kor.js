// object 'bio'
var bio = {
    "name": "이도훈",
    "role": "프론트엔드 개발자",
    "contacts": {
        "mobile": "010 - 000 - 0000",
        "email": "genesisparadox@gmail.com",
        "github": "https://github.com/DOEHOONLEE",
        "location": "대한민국 서울"
    },
    "welcomeMessage": "온라인 이력서 입니다. <br>&#183; 내가 좋아하는 것들 <br>&#183; 기술들 <br>&#183; 진행한 프로젝트 <br>&#183; 학력 <br>&#183; 연락처",
    "skills": ["&#183; HTML / CSS", "&#183; JavaScript", "&#183; Python", "&#183; 일본어", "&#183; 영어", "&#183; 한국어"],
    "biopic": "images/my_photo.jpg"
};

// object 'education'
var education = {
    "schools": [{
        "name": "Simon Fraser University",
        "location": "버나비, 캐나다",
        "degree": "학사 학위",
        "majors": ["인지과학"],
        "dates": "2015 - current",
        "url": "http://www.sfu.ca/"
    }, {
        "name": "Langara College",
        "location": "밴쿠버, 캐나다",
        "degree": "대학 편입 과정",
        "majors": ["과학"],
        "dates": "2014",
        "url": "http://langara.ca/index.html"
    }],
    "onlineCourses": [{
        "title": "Front-End Nanodegree",
        "school": "Udacity",
        "dates": "현재 진행중 - 예정 졸업일: 2017년 봄",
        "url": "https://www.udacity.com/"
    }]
};

// object 'work'
var work = {
    "jobs": [{
        "employer": "휘장나라",
        "title": "서류 작업",
        "dates": "2010",
        "description": "description line",
        "location": "서울"
    }]
};

// object 'projects'

var projects = {
    "projects": [{
        "title": "포트폴리오 웹사이트",
        "dates": "2016 - November",
        "description": "작업한 프로젝트들이 올라와있습니다",
        "images": ["images/portfolio.png"],
        "url": "https://doehoonlee.github.io/portfolio/"
    }, {
        "title": "동물 체스",
        "dates": "2016 - September",
        "description": "사자 팀 vs 호랑이 팀의 대결!",
        "images": ["images/animal_chess.png"],
        "url": "https://doehoonlee.github.io/Animal_Chess/play.html"
    }, {
        "title": "해외봉사 소개",
        "dates": "2016 - August",
        "description": "다른 해외봉사 회사들을 간략하게 소개하고 있습니다",
        "images": ["images/volunteer_abroad.png"],
        "url": "https://doehoonlee.github.io/RED-Academy-project-1/"
    }]
};

// object 'certificates'

var certificates = {
    "certificates": [{
        "title": "ASL - 미식 수화",
        "issuedBy": "start ASL",
        "date": "현재 진행중 - 예정 완료일: 2017년 봄",
        "description": "American Sign Language - 영어 수화",
        "url": "https://www.startasl.com/learn-asl-online"
    }, {
        "title": "신경 의학",
        "issuedBy": "Duke University",
        "date": "현재 진행중 - 예정 완료일: 2017년 봄",
        "description": "신경 의학을 다루는 인터넷 강의 수료",
        "url": "https://www.coursera.org/learn/medical-neuroscience/home"
    }, {
        "title": "CPR/AED-HCP : 인공호흡/ 자동 제세동기",
        "issuedBy": "CANADIAN RED CROSS - 캐나다 적십자",
        "date": "2016 - November",
        "description": "제세동기 사용, 인공호흡 등의 응급 처치에 대한 자격증",
        "url": "https://vancouverfirstaid.ca/"
    }, {
        "title": "웹개발 기초 과정",
        "issuedBy": "RED Academy",
        "date": "2016 - Sept",
        "description": "웹개발 기초반. HTML5, CSS3, 반응형 웹, Git and GitHub, UX&Wireframing, JavaScript, jQuery, LESS",
        "url": "https://www.redacademy.com/"
    }]
};

// display function 'bio'
bio.display = function() {
    // prepend header role
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

    // prepend header name
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

    // append bio picture
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

    // append welcome message
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsKorStart);

        for (skill = 0; skill < bio.skills.length; skill++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);

            $("#skills").append(formattedSkill);
        }
    }

    // append contacts to the header/ footer
    $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
};

// display 'bio'
bio.display();

// display function 'education'
education.display = function() {
    for (school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedMajor = HTMLschoolDegree.replace("%data%", education.schools[school].majors);

        var formattedTitleMajor = formattedTitle + formattedMajor;
        $(".education-entry:last").append(formattedTitleMajor);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);

        $(".education-entry:last a").attr("href", education.schools[school].url);
    }

    for (online = 0; online < education.onlineCourses.length; online++) {
        $(".education-entry:last").append(HTMLonlineClasses);

        var formattedcourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        $(".education-entry:last").append(formattedcourseTitle);

        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        $(".education-entry:last").append(formattedSchool);

        var formattedcourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
        $(".education-entry:last").append(formattedcourseDates);

        $(".education-entry:last a").attr("href", education.onlineCourses[online].url);
    }
};

// display 'education'
education.display();

// display function 'work'
work.display = function() {
    for (job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

//display 'work'
work.display();

// display function 'project'

projects.display = function() {
    for (project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDate);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image = 0; image < projects.projects[project].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);

                $(".project-entry:last").append(formattedImage);
            }
        }

        $(".project-entry:last a").attr("href", projects.projects[project].url);
    }
    $("#project_img").addClass("img_border");
};

// display 'projects'
projects.display();

// display function 'certificates'
certificates.display = function() {
    for (certificate = 0; certificate < certificates.certificates.length; certificate++) {
        $("#certificates").append(HTMLcertificatesStart);
        //title issuedBy date description
        var formattedTitle = HTMLcertificatesTitle.replace("%data%", certificates.certificates[certificate].title);
        var formattedIssuedBy = HTMLcertificatesIssuedBy.replace("%data%", certificates.certificates[certificate].issuedBy);

        var formattedTitleIssuedBy = formattedTitle + formattedIssuedBy;
        $(".certificates-entry:last").append(formattedTitleIssuedBy);

        var formattedDates = HTMLcertificatesDates.replace("%data%", certificates.certificates[certificate].date);
        $(".certificates-entry:last").append(formattedDates);

        var formattedDescription = HTMLcertificatesDescription.replace("%data%", certificates.certificates[certificate].description);
        $(".certificates-entry:last").append(formattedDescription);

        $(".certificates-entry:last a").attr("href", certificates.certificates[certificate].url);
    }
};

// display 'certificates'
certificates.display();

// mouse click coordinate finder
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

// locations of work places
function locationizer(work_obj) {
    var locationArray = [];

    for (job = 0; job < work_obj.jobs.length; job++) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }

    return locationArray;
}

console.log(locationizer(work));

// name internationalization
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);

    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    name[1] = name[1].slice(0, 1).toUpperCase() + name[1].slice(1).toLowerCase();

    name[2] = name[2].toUpperCase();

    return name[0] + " " + name[1] + " " + name[2];
}

$("#main").append(internationalizeButton);

// google map

$("#mapDiv").append(googleMap);