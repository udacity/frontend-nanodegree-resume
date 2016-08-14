/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "李江江",
    "role": "教师",
    "skills": ["英语", "教学", "网页制作"],
    "pic": "images/myimage.jpg",
    "contacts": {
        "mobile": "18810667473",
        "email": "jgg.555@163.com",
        "github": "Wolfever",
        "location": "北京师范大学"
    },
    "location": "北京",
    "welcomeMessage": "欢迎阅读我的简历！"
};

var education = {
    "schools": [{
        "name": "北京师范大学",
        "dates": "2011年9月—2015年6月",
        "location": "北京",
        "degree": "学士学位",
        "major": "英语",
        "url": "http://www.bnu.edu.cn/"

    }],

    "onlineCourses": [{
        "source": "Udacity(优达学城)",
        "name": "前端工程师",
        "starting time": "2016年8月",
        "achievement": "做完了前五个项目",
        "url": "https://www.udacity.com/"
    }, {
        "source": "Duolingo(多邻国)",
        "name": "法语",
        "starting time": "2013年9月",
        "finishing time": "2016年3月",
        "url": "https://www.duolingo.com/",
        "achievement": "完成了所有课程。"

    }, {
        "source": "Bussu(博树)",
        "name": "法语",
        "starting time": "2016年1月",
        "finishing time": "Now",
        "achievement": "完成了A1课程。",
        "url": "https://www.busuu.com"
    }]

};

var work = {
    "jobs": [{
        "employer": "教育部考试中心",
        "location": "北京",
        "title": "外语测评处助理",
        "dates": "2015年9月至今",
        "description": "协助外语测评处处理日常事务，主要负责维护对外宣传网站，跟进量表工作网站的建设与管理，并负责部分网页美工任务。",
        "url": "http://cse.neea.edu.cn/"
    }]

};

var projects = {
    "projects": [{
        "title": "个人档案",
        "dates": "2016年8月11日",
        "description": "使用HTML5和CSS3对网页进行美工，网页将用来呈现自己在学习过程中完成的项目。",
        "images": "images/portfolio.png",
        "url": "https://wolfever.github.io/Udacity_FEND/"
    }]
};


bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(bio.role);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);


    // start contact items


    // Adding contact title
    $("#topContacts").append(HTMLcontactGeneric.replace("%data%", "联系方式"));
    // Adding contact items
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts['mobile']));

    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts['email']));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts['github']));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts['location']));


    $("#header").append(HTMLbioPic.replace("%data%", bio.pic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart.replace("Skills at a Glance:", "技能一览"));
        for (skill in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
        };
    };
};

work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for (job in work.jobs) {
        var employer1 = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var title1 = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var firstline = employer1.concat(title1);
        var employerLink = firstline.replace("#", work.jobs[job].url);
        $(".work-entry").append(employerLink);
        //$(".work-entry").append(HTMLworkTitle.replace("%data%", work.jobs[job].title));
        $(".work-entry").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
        $(".work-entry").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
        $(".work-entry").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    };
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (school in education.schools) {
        var schoolLink = HTMLschoolName.replace("#", education.schools[school].url);
        var name = schoolLink.replace("%data%", education.schools[school].name);
        var degree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var firstline = name.concat(degree);
        $(".education-entry").append(firstline);
        $(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
        $(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
        $(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[school].major));
    };
    $(".education-entry").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
        var name2 = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].name);
        var degree2 = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].source);
        var firstline2 = name2.concat(degree2);
        var HTMLonlineLink = firstline2.replace("#", education.onlineCourses[course].url);
        $(".education-entry").append(HTMLonlineLink);
        $(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course]["starting time"]));
        $(".education-entry").append(HTMLonlineDescription.replace("%data%", education.onlineCourses[course]["achievement"]));
        $(".education-entry").append(HTMLonlineURL.replace(/%data%/g, education.onlineCourses[course].url));
    };
};


projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (project in projects.projects) {
        var projectLink = HTMLprojectTitle.replace("#", projects.projects[project].url);
        $(".project-entry").append(projectLink.replace("%data%", projects.projects[project].title));
        $(".project-entry").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
        $(".project-entry").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
        $(".project-entry").append(HTMLprojectURL.replace(/%data%/g, projects.projects[project].url));
        $(".project-entry").append(HTMLprojectImage.replace("%data%", projects.projects[project].images));
    };
};

if (work.jobs.length > 0) {
    work.display();
};

if (education.schools.length > 0 || education.onlineCourses.length > 0) {

    education.display();

};

if (projects.projects.length > 0) {
    projects.display();
};

if (bio) {
    bio.display();
}