var bio = {
	"name": "Chuiwen Ma",
	"role": "Software Engineer",
	"contacts": {
		"mobile": "650-796-0930",
		"email": "chuiwenm@stanford.edu",
		"github": "machuiwen",
		"location": "Stanford"
	},
	"welcomeMessage": "Die luft der Freiheit weht.",
	"skills": [
		"Software Engineering", "Computer Vision", "Virtual Reality", 
		"Machine Learning", "Electronics", "C", "C++", "Java", "Python",
		"JavaScript", "Matlab", "LaTeX", "Linux", "Bash", "Git"
	],
	"bioPic": "images/me.jpg"
};

// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

var education = {
	"schools": [
		{
			"name": "Stanford University",
			"location": "Stanford, CA, US",
			"degree": "MS",
			"majors": ["EE"],
			"GPA": 4.0,
			"dates": "2014 - 2016",
			"url": "http://www.stanford.edu"
		},
		{
			"name": "Beihang University",
			"location": "Beijing, China",
			"degree": "BA",
			"majors": ["EE"],
			"GPA": 3.92,
			"dates": "2010 - 2014",
			"url": "http://ev.buaa.edu.cn"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": 2014,
			"url": "http://www.udacity.com/course/ud804"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "zSpace, Inc.",
			"title": "Software Engineer Internship",
			"dates": "June 2015 - Present",
			"description": "foo"
		},
		{
			"employer": "Uber",
			"title": "Driver",
			"dates": "July 2015 - Present",
			"description": "foo"
		}		
	]
};

var project = {
	"projects": [
		{
			"title": "3D Reconstruction from Full-view Fisheye Camera",
			"dates": "March 2015",
			"description": "Proposed a full-view scene reconstruction algorithm based on Ricoh Theta fisheye camera. Developed the fisheye camera model, epipolar geometry and triangulation method. Reconstructed the 360 degree scene with only two captures. Generalized the method to multi-camera reconstruction, also proposed a dense reconstruction approach on rectified images. Developed a Matlab GUI.",
			"images": [
			],
			"report": "http://arxiv.org/pdf/1506.06273v1.pdf",
		}
	]
};
