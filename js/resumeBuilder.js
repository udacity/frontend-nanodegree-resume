// Creating objects - bio, work, projects, education
var bio = {
	"name": "Rowan Savage",
	"role": "Front-end Developer",
	"contacts": {
		"email": "NotAn@email.com",
		"mobile": "044619933",
		"twitter": "@RMS",
		"github": "github.com",
        "linkedin": "linkedin.com",
		"location": "Auckland, New Zealand"
    },
	"imgURL": "images/fry.jpg",
	"welcome": "Welcome to my Udacity sponsored resume!",
	"skills": ["Frontend Web", "Backend Web", "Pretty big data", "Training" ]
};

var skills = {
    "skills": [
        {
            id: "design",
            name: "Design",
            value: 3,
            info: "I have experience with the entire adobe suite with a focus on Photoshop, Fireworks, Lightroom and Primere. I've created numerous user interfaces but prefer to focus on the UX side while allowing the artistic and creative side to come from someone a lot more artistic!"
        },
        {
            id: "frontend",
            name: "Front-end dev",    
            value: 5,
            info: "I have deveoped the front end on a number of government and non goverment websites and intranets. Including deewr.gov.au, swa.gov.au and questacon.edu.au. I have experience technologies including HTML5, CSS, Javascript and jquery as well as with standards such as WCAG accessibility standards and user experience testing. I've also created two mobile apps one for Safe Work Australia and the other for Questacon."
        },
        {
            id: "backend",
            name: "Back-end dev",    
            value: 5,
            info: "I assistaed in the development of a goverment-aimed Content Management System written in a custom PHP framework. I also have basic experience with Python."
        },
        {
            id: "database",
            name: "Database dev",   
            value: 6,
            info: "I have worked on create a number of small databases to be used for webapp backends using mysql and Postgres. I also have extensive experience with data mining and reconiliation for some of Australia's largest databases including Centrelink's database. Australian's largest government database."
        },
        {
            id: "training",
            name: "Training", 
            value: 7,
            info: "I've have trained people using a variety of methods including classrooms, one on one and video training. The training focused on how to develop basic portals using our Content Managamenet Systems, how to write for the web and creating accessible documents"
        },
        {
            id: "comms",
            name: "Communication",     
            value: 8,
            info: "I have experience both in official communication channels as well as general community skills with management and staff."
        }
    ],
    "chart" : {
        "width": 420,
        "barHeight": 30,
        "margin": {top: 0, right: 30, bottom: 30, left: 20},
        "domain": {min: 0, max: 10}
    }
}; 

var work = {
	"jobs": [
		{
			"employer": "Safe Work Australia",
			"title": "Senior web developer",
			"location": "Townsville, Australia",
			"dates": "2013-2014",
			"description": "Overseas the maintanence and improvement of safeworkaustralia.gov.au"
		},
		{
			"employer": "National Science and Technology Center (Questacon)",
			"title": "Web developer",
			"location": "Sydney, Australia",
			"dates": "2010-2011",
			"description": "Created mobile version of Questacon's website and assistaced in the audit and implemntation of a accessibility improvements"
		},
		{
			"employer": "Insitec",
			"title": "Web App Developer",
			"location": "Canberra, Australia",
			"dates": "2009-2010",
			"description": "Assistated with the development of a custom CMS aimed at government departments."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Safe Work Australia App",
			"description": "App to display events and details relating to Safe Work Australia Month",
			"dates": "2013",
			"images": ["images/google.png"]
		},
		{
			"title": "Questacon Mobile",
			"description": "Created mobile version of Questacon website focusing on UX",
			"dates": "2011",
			"images": ["images/facebook.png"]
		}
	]
};

var education = {
	"schools": [
		{
			"name": "Australian National University",
			"location": "Canberra, Australia",
			"degree" : "BA of Science (Incomplete)",
			"majors": ["Science Communication", "Software Engineering"],
			"dates": "2009",
            "url" : "http://www.anu.edu.au"
		}],
	"onlineCourses": [
		{
			"title": "Introduction to HTML",
			"school": "Udacity",
			"dates": "2014",
			"url": "http://udacity.com",
            "desc": "Learn how to convert digital design mockups into static web pages and how to build a responsive portfolio site to showcase your work."
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "2014",
			"url": "http://www.udacity.com",
            "desc": "Learn JavaScript syntax and coding conventions that web developers use to create interactive and dynamic websites while you create an online resume for your portfolio."
		}
	]
};


// Displaying functions

projects.display = function () {
    $("#projects").append('<div class="project-entries">');
	for (var i in projects.projects) {
		$(".project-entries").append(HTMLprojectStart);
		var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		var projectDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		var projectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		var projectImg = HTMLprojectImage.replace("%data%", projects.projects[i].images);
		$(".project-entry:last").append(projectTitle, projectDesc, projectDates, projectImg);
	}
}


bio.display = function () {
    
    // Create HTML
    var bioName = HTMLheaderName.replace("%data%", bio.name);
    var bioRole = HTMLheaderRole.replace("%data%", bio.role);
    var bioEmail = HTMLemail.replace("%data%", bio["contacts"].email);
    var bioMobile = HTMLmobile.replace("%data%", bio["contacts"].mobile);
    var bioTwitter = HTMLtwitter.replace("%data%", bio["contacts"].twitter);
    var bioGithub = HTMLgithub.replace("%data%", bio["contacts"].github);
    var bioLinkedin = HTMLlinkedin.replace("%data%", bio["contacts"].linkedin);
    var bioLocation = HTMLlocation.replace("%data%", bio["contacts"].location);
    var bioPic = HTMLbioPic.replace("%data%", bio["imgURL"]);
    var bioWelcome = HTMLWelcomeMsg.replace("%data%", bio["welcome"]);
    var clearFix = "<div style='clear: both;'></div>";

    // Append HTML
    $("#header").prepend(bioPic);
    //$("#header").prepend(bioRole);
    $("#header").prepend(bioName); 
    
    $("#header").append(bioWelcome);

    $("#topContacts").append(bioEmail);
    $("#topContacts").append(bioMobile);
    $("#topContacts").append(bioTwitter);
    $("#topContacts").append(bioGithub);
    $("#topContacts").append(bioLinkedin);
    $("#topContacts").append(bioLocation);

    $("#header").append(HTMLskillsStart); 
    
    // Get skills bio data from the skills object
    for (var i in skills.skills) {
        $("#skills").append(HTMLskills.replace("%data%", skills.skills[i].name)); 
    }
    
    $("#header").append(clearFix); 
}

work.display = function () {

	for (var i in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var jobTitle = (HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i]["title"]));
		var jobLocation = HTMLworkLocation.replace("%data%", work.jobs[i]["location"]);
		var jobDates = HTMLworkDates.replace("%data%", work.jobs[i]["dates"]);
		var jobDesc = HTMLworkDescription.replace("%data%", work.jobs[i]["description"]);
		$(".work-entry:last").append(jobTitle, jobLocation, jobDates, jobDesc);
	}

}

education.display = function() {
    // Displays for schools
    $("#education").append("<h3>University Education</h3>");
    for (var i in education.schools) {
        $("#education").append(HTMLschoolStart);
        var schoolsNameDegree = (HTMLschoolName.replace("%data%", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree));
        schoolsNameDegree = schoolsNameDegree.replace("href='#", "href='" + education.schools[i].url);
        var schoolsDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var schoolsLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        
        // Allows multiple majors to be inserted
        var schoolsMajor = ''
        for (var i2 in education.schools[i].majors) {
            schoolsMajor = schoolsMajor + HTMLschoolMajor.replace("%data%", education.schools[i].majors[i2]);
        }
        
        $(".education-entry:last").append(schoolsNameDegree, schoolsDates, schoolsLocation, schoolsMajor);
        
       }
    
    // Displays for online courses
    $("#education").append(HTMLonlineClasses);
    
    for (var course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var onlineTitleSchool = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        onlineTitleSchool = onlineTitleSchool.replace("href='#", "href='" + education.onlineCourses[course].url);
        var onlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var onlineDesc = "<br><p>" + education.onlineCourses[course].desc + "</p>";
        $(".education-entry:last").append(onlineTitleSchool, onlineDate, onlineDesc);
    }
}

skills.display = function () {
    //  *** Create the chart ***
    $('#skillsChart').append('<p class="skillsIntro">How are my abilities in each level of expertise?<br> Click each bar for more information.</p>');
    $('#skillsChart').append('<div class="skills-entry"></div>');

    $('.skills-entry').append('<div class="skillChartContainer"><svg class="chart"></svg></div>');

    // Create x-scale domain and ranage for graph
    var x = d3.scale.linear().domain([skills.chart.domain.min, skills.chart.domain.max]).range([0, skills.chart.width]);

    // Create chart size including margin.
    var chartHeight = skills.chart.barHeight * skills.skills.length;
    var chartContainerHeight = chartHeight + skills.chart.margin.top + skills.chart.margin.bottom;
    var chartContainerWidth = skills.chart.width + skills.chart.margin.left + skills.chart.margin.right;
    
    // Create the chart
    var chart = d3.select(".chart").attr("width", chartContainerWidth).attr("height", chartContainerHeight).append("g").attr("transform", "translate(" + skills.chart.margin.left + "," + skills.chart.margin.top + ")");

    // Create the containers for each bar
    var bar = chart.selectAll("g").data(skills.skills).enter().append("g").attr("transform", function(d, i) {return "translate(0," + i * skills.chart.barHeight + ")"; });
    
    // Generate xAxis using d3
    var xAxis = d3.svg.axis().scale(x).orient("bottom");
    
    // Create the visible <rect> that is the visible bar
    bar.append("rect").attr("width", function(d) { return x(d.value); }).attr("height", skills.chart.barHeight - 1 ).attr("id", function(d) { return d.id + '-bar'; }).attr("class", "skill-bar");
    
    // Add the text label for each bar
    bar.append("text").attr("x", 4).attr("y", skills.chart.barHeight / 2).attr("dy", ".35em").attr("class", "bar-text").text(function(d) { return d.name; });
    
    // Create x-axis --> Magic
    chart.append("g").attr("class", "x axis").attr("transform", "translate(0," + (skills.chart.barHeight * skills.skills.length) + ")").call(xAxis);
    
    // Create x-axis title. Using magic number 30 because I don't know how to move from the bottom of chart nor how to find the size of the X axis labelling
    chart.append("g").append("text").attr("y", chartHeight + 30).attr("x", skills.chart.width/2).attr("class", "x-title").text("Awesomness level");
    
    // create y-axis title. Using magic number -5 for positioning. 
    chart.append("g").append("text").attr("transform", "rotate(-90)").attr("y", -5).attr("x", chartHeight / -2).attr("class", "y-title").text("Skills");
    
    // *** Create the text info ***
    $('.skills-entry').append('<div class="skills-info"></div>');
    
    for (var i in skills.skills) {
        $('.skills-info').append('<div id="' + skills.skills[i].id + '-info" class="skillInfo"><h3>' + skills.skills[i].name + '</h3><p>' + skills.skills[i].info + '</p>');
    }
    
    // Hide all but the first skills info
    $('.skillInfo').addClass('hide');
    $('.skillInfo').first().removeClass('hide');
    
    // Hide and show text entries based on clicking of graph
    $('.skill-bar').click(function () {
        var skill = $(this).attr('id').replace('-bar', '');
        $('.skillInfo').addClass('hide');
        $('#' + skill + '-info').removeClass('hide');
    });
    
    /* 
    // Original code to show skills info. Don't know why this didn't work. 
    for (var i in skills.skills) {
        $('#' + skills.skills[i].id + '-bar').click(function () {
            $('#' + skills.skills[i].id + '-info').fadeIn(300);
        });   
    }*/

    
    $(window).resize(function() {
        console.log($(window).width());
    });
    
};

// Execture functions
bio.display();
projects.display();
work.display();
education.display();
skills.display();


// Maps

var locationizer = function(work_obj) {
	var locations = [];
	for (var i in work_obj.jobs){
		locations.push(work_obj.jobs[i]["location"]);
	}
	return locations;
}

$("#mapDiv").append(googleMap);
