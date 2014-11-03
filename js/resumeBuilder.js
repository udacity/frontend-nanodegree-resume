// Creating objects - bio, work, projects, education
var bio = {
	"name": "Rowan Savage",
	"role": "Front-end Developer",
	"contacts": {
		"email": "NotAn@email.com",
		"mobile": "044619933",
		"twitter": "@RMS",
		"github": "github.com",
		"location": "Auckland, New Zealand"
    },
	"imgURL": "images/fry.jpg",
	"welcome": "Welcome to my Udacity sponsored resume!",
	"skills": ["Frontend Web", "Backend Web", "Pretty big data", "Training" ]
};

var skills = {
    "skills": [
        {
            name: "Design",
            value: 3,
            info: "I have experience with the entire adobe suite with a focus on Photoshop, Fireworks, Lightroom and Primere. I've created numerous user interfaces but prefer to focus on the UX side while allowing the artistic and creative side to come from someone a lot more artistic!"
        },
        {
            name: "Front-end",    
            value: 5,
            info: "Front end expertise"
        },
        {
            name: "Back-end",    
            value: 5,
            info: "Back end experience"
        },
        {
            name: "Database",   
            value: 6,
            info: "Database experience"
        },
        {
            name: "Training", 
            value: 7,
            info: "Trainig experience"
        },
        {
            name: "Communication",     
            value: 8,
            info: "Communication experience"
        }
    ],
    "chart" : {
        "width": 420,
        "barHeight": 30,
        "margin": {top: 20, right: 30, bottom: 30, left: 20},
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
	for (var i in projects.projects) {
		$("#projects").append(HTMLprojectStart);
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
    var bioGithub = HTMLgithub.replace("%data%", bio["contacts"].github)
    var bioLocation = HTMLlocation.replace("%data%", bio["contacts"].location);
    var bioPic = HTMLbioPic.replace("%data%", bio["imgURL"]);
    var bioWelcome = HTMLWelcomeMsg.replace("%data%", bio["welcome"]);

    // Append HTML
    $("#header").prepend(bioPic);
    $("#header").prepend(bioRole);
    $("#header").prepend(bioName); 
    
    $("#header").append(bioWelcome);

    $("#topContacts").append(bioEmail);
    $("#topContacts").append(bioMobile);
    $("#topContacts").append(bioTwitter);
    $("#topContacts").append(bioGithub);
    $("#topContacts").append(bioLocation);

    $("#header").append(HTMLskillsStart); 
    
    // Get skills bio data from the skills object
    for (var i in skills.skills) {
        $("#skills").append(HTMLskills.replace("%data%", skills.skills[i].name)); 
    }
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
    
    $('#skillsChart').append('<div class="skills-entry"></div>');
    $('.skills-entry').append('<p>How are my abilities in each level of expertise? See below and hover for more information.</p>');

    $('.skills-entry').append('<svg class="chart"></svg>');

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
    bar.append("rect").attr("width", function(d) { return x(d.value); }).attr("height", skills.chart.barHeight - 1 );
    
    // Add the text label for each bar
    bar.append("text").attr("x", 4).attr("y", skills.chart.barHeight / 2).attr("dy", ".35em").attr("class", "bar-text").text(function(d) { return d.name; });

    // Add title text to x axis
    chart.append("g").attr("class", "x axis").attr("transform", "translate(0," + (skills.chart.barHeight * skills.skills.length) + ")").call(xAxis).append("text").attr("y", skills.chart.margin.bottom).attr("x", skills.chart.width/2).attr("class", "x-title").text("Awesomness level");
    
    // Add title text to y axis
    chart.append("g").attr("class", "y axis").append("text").attr("transform", "rotate(-90)").attr("y", skills.chart.margin.left / -4).attr("x", chartHeight / -2).attr("class", "y-title").text("Skills");
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
