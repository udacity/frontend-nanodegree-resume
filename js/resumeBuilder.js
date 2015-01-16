var work = {
	"jobs": [
	{
		"employer": "Udacity",
		"title": "Code Reviewer",
		"location": "Buenos Aires, ARG",
		"dates": "2014 - Present",
		"description": "Evaluate and review code for Programming Foundations with Python"
	},
	{
		"employer": "Avaya",
		"title": "Backbone Engineer",
		"location": "Buenos Aires, ARG",
		"dates": "2010 - 2013",
		"description": "Break and fix support for Avaya Call Manager"
	},
	{
		"employer": "IBM",
		"title": "Master Trainer",
		"location": "Buenos Aires, ARG",
		"dates": "2006 - 2010",
		"description": "Teach and train program fundamentals for new hires and existing staff"
	}
	]
} // Valid JSON!


var = projects = {
	"projects": [
	{
		"title": "Running Plan Generator",
		"dates": "Novemeber 2014",
		"description": "Running plan generator for 10, 21 and 42 K with three levels of difficulty"
	},
	{
		"title": "Static Resume Webpage",
		"dates": "December 2014",
		"description": "Personal resume designed using a mockup"
	}]
} // Valid JSON!

var bio = {
	"name": "Juan Martin Marco",
	"role": "Front-End Web Developer",
	"contacts": {
		"email": "jmmarco@gmail.com",
		"github": "jmmarco",
		"twitter": "@jmmarco",
		"location": "Buenos Aires, ARG"
	},
	"welcomeMessage": "Welcome to my online resume",
	"skills": ["GitHub", "Git", "Python", "HTML/CSS"],
	"image": "images/fry.jpg"
} // Valid JSON!

var education = {
	"schools": [
		{
			"name": "Austin Community College",
			"city": "Austin, TX, US",
			"degree": "BA",
			"majors": ["CS"],
			"dates": 2003,
			"url": "www.example.com"
		},
		{
			"name": "Stanford University",
			"city": "Stanford, CA, US",
			"degree": "Masters",
			"majors": ["Data Analysis"],
			"dates": 2010,
			"url": "www.example.com"
		}
	],
	"onlineCourses": [
		{
			"title": "Computer Science 101",
			"school": "Stanford University",
			"dates": 2014,
			"url": "class.stanford.edu"
		},
		{
			"title": "Programming Foundations with Python",
			"school": "Udacity",
			"dates": 2014,
			"url": "udacity.com"
		}
	]
} // Valid JSON!





$("#main").append(work["position"]);
$("#main").append(education.name);


