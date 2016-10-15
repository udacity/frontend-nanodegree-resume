var bio = {
    "name": "Po Ping",
    "role": "Dragon warrior",
    "contacts": {
        "mobile": "555-55-55",
        "github": "theRealPo",
        "location": "Jade Buddha Temple",
        "email": "samant_sameer@hotmail.com"
    },
    "welcomeMessage": "Po is friendly, kind, energetic, impulsive, good-natured, spunky, innocent, fun-loving, compassionate, smart, naive, loveable, and he never gives up. Though Po's real passion was for Kung Fu, he was reluctant to disappoint his father by revealing it. Despite having a mild and friendly personality, Po also developed a severe self-loathing, believing himself a failure for being both obese (but in reality he is a healthy weight for his species) and a species not known for a warrior tradition.",
    "image": "images/panda_1x.jpg",
    "skills": ["friendly", "kind", "energetic", "impulsive"]
};

var work = {
    "jobs": [{
        "employer": "Kung Fu Panda 3",
        "title": "Master",
        "dates": "2013 - 2016",
        "location": "Jade Buddha Temple",
        "description": "Supernatural villain Kai begins to sweep across China defeating all the kung fu masters, Po learnt to train a village full of his fun-loving, clumsy brethren to become the ultimate band of Kung Fu Pandas!"
    }, {
        "employer": "Kung Fu Panda 2",
        "title": "Dragon Warrior",
        "dates": "2011 - 2012",
        "location": "Jade Buddha Temple",
        "description": "Lord Shen planed to use a secret, unstoppable weapon to conquer China and destroy kung fu. Po and the Furious Five journey across China to face this threat and vanquish it."
    }]
};

var projects = {
    "project": [{
        "title": "Defeat of Tai Lung",
        "dates": "2008",
        "description": "The vengeful and treacherous snow leopard Tai Lung is headed to Jade palace, and Po defends everyone from the oncoming threat. Po puts his heart—and his girth—into the task, and the unlikely hero ultimately found that his greatest weaknesses turn out to be his greatest strengths",
        "images": ["images/5.jpg", "images/6.jpg"]
    }, {
        "title": "Noodlemaker",
        "dates": "2014",
        "description": "Mr. Ping considered his work deeply fulfilling and taught his son all about noodle-making, hoping that Po would take over the family business in time. However, he has since accepted the differing ambitions of his son, and is proud of his role as the Dragon Warrior.",
        "images": ["images/5.jpg", "images/6.jpg"]
    }]
};

var education = {
    "schools": [{
        "name": "The Jade Palace ",
        "location": "Jade Buddha Temple",
        "degree": "Dragon Warrior",
        "majors": "Kung Fu Master",
        "dates": "2008 - 2009",
        "url": "Jade.Palace.com"
    }, {
        "name": "Noodle shop of Mr. Ping",
        "location": "peace vallay",
        "degree": "bachelor",
        "majors": "Noodle Making",
        "dates": "2005 - 2006",
        "url": "noodle.shop.com"
    }]

};


bio.display = function () {
    var Name = HTMLheaderName.replace("%data%", bio.name);
    var Role = HTMLheaderRole.replace("%data%", bio.role);
    var Image = HTMLbioPic.replace("%data%", bio.image);
    var Message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(Role).prepend(Name).append(Image, Message);
    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function (skill) {
        var Skills = HTMLskills.replace("%data%", skill);
        $("#skills").append(Skills);
    });


    var Mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var Email = HTMLemail.replace("%data%", bio.contacts.email);
    var Github = HTMLcontactGeneric.replace("%contact%", "github").replace("%data%", bio.contacts.github);
    $("#footerContacts").append(Mobile, Email, Github);

};

education.display = function () {
    education.schools.forEach(function (school) {
        $("#education").append(HTMLschoolStart);

        var Name = HTMLschoolName.replace("%data%", school.name);
        var Degree = HTMLschoolDegree.replace("%data%", school.degree);
        var Dates = HTMLschoolDates.replace("%data%", school.dates);
        var Location = HTMLschoolLocation.replace("%data%", school.location);
        var Major = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(Name + Degree, Dates, Location, Major);
    });
};

work.display = function () {
    work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);

        var Employer = HTMLworkEmployer.replace("%data%", job.employer);
        var Title = HTMLworkTitle.replace("%data%", job.title);
        var Dates = HTMLworkDates.replace("%data%", job.dates);
        var Description = HTMLworkDescription.replace("%data%", job.description);

        $(".work-entry:last").append(Employer + Title, Dates, Description);
    });
};

projects.display = function () {
    projects.project.forEach(function (item) {
        $("#projects").append(HTMLprojectStart);
        var Title = HTMLprojectTitle.replace("%data%", item.title);
        var Dates = HTMLprojectDates.replace("%data%", item.dates);
        var Description = HTMLprojectDescription.replace("%data%", item.description);

        $(".project-entry:last").append(Title, Dates, Description);
        item.images.forEach(function (image) {
            var Image = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(Image);
        });



    });
};

work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);