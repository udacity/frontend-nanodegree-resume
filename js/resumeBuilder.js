var bio = {
	"name" : "Sergio Rincón",
	"role" : "Student",
	"contacts" :{
		"mobile": "628-293-024",
		"email":"sergiorincon89@gmail.com",
		"github":"sergiorincon",
		"twitter": "@sergiosanes",
		"location": "Madrid"
	},
	"picture" : "images/fry.jpg",
	"welcomeMessage" : "\n Hey, I´m using JavaScript!",
	"skills": ["C","C++", "Eagle" , "JavaScript"]
} 
var education = {
    "schools": [
        {
            "name": "IES La Rambla",
            "location": "San Esteban de Gormaz",
            "degree": "Bachiller",
			"dates" : "2001-2007",
            "major": [
                "CompScy",
                "English"
            ],
			"url": "http://ieslarambla.centros.educa.jcyl.es/sitio/"
        },
        {
            "name": "EUITI",
            "location": "ETSIDI Madrid",
            "degree": "Grado",
			"dates" : "2007-2015",
            "major": [
                "CompScy"
            ],
			"url": "http://www.etsidi.upm.es/ETSIDI"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com/course/ud804"
        }
    ]
}
var work = {
    "jobs": [
        {
            "employer": "SmallSignall",
            "title": "Desarrollador",
            "dates": "2015",
			"location": "Madrid",
            "descripcion": "Beca curricular de 594 horas en Smallsignals. Desarrollo de un sistema de medida de conductividad con comunicaciones inalámbricas. Tecnologías relacionadas: Stm32fxx, C, eagle, wifi, http, tcp/ip."
        }
    ]
}
var projects = {
    "projects": [
        {
            "title": "Conductivimetro",
            "dates": "2015 - Present",
			"location": "Madrid",
            "description": "Desarrollo de un sistema de medida de conductividad con comunicaciones inalámbricas. Tecnologías relacionadas: Stm32fxx, C, eagle, wifi, http, tcp/ip.",
            "images": [
                "images/Conduct1.jpg",
				"images/Conduct2.jpg"
            ]
        }
    ]
}


bio.displayContact = function (ContactPlace) {
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile)
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email)
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter)
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github)
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location)
var formattedContact = formattedMobile +  formattedEmail +  formattedTwitter + formattedGithub + formattedLocation ;
	$(ContactPlace).append(formattedContact);
}
bio.display = function () {
		
	$("#main").append(internationalizeButton);
	//bio.name = bio.inName(bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
		$("#header").prepend(formattedName);
	
	bio.displayContact("#topContacts");
	bio.displayContact("#footerContacts");	
	
	var formattedPic = HTMLbioPic.replace("%data%",bio.picture)
		$("#header").append(formattedPic);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage)
		$("#header").append(formattedMsg);
		
	if(bio.skills.lenght != 0){
		$("#header").append(HTMLskillsStart);	
				for (skill in bio.skills){
				var formattedskill = HTMLskills.replace("%data%",bio.skills[skill]);	
				$("#header").append(formattedskill);				
				}
}
}
work.display = function (){
for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);	
	
var formattedemployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);		
var formattedtitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);			
var formattedEmployerTitle = formattedemployer + formattedtitle;
	$(".work-entry:last").append(formattedEmployerTitle);

var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);		
	$(".work-entry:last").append(formattedDates);


var formattedLocation = HTMLworkLocation .replace("%data%",work.jobs[job].location);		
	$(".work-entry:last").append(formattedLocation);


var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].descripcion)	;
	$(".work-entry:last").append(formattedDescription);
}

}
bio.inName = function(name) {
	name = bio.name.trim().split(' ');
	name[0] = name[0].slice(0,1).toUpperCase()+
					(name[0].slice(1)).toLowerCase();
	name[1] = name[1].toUpperCase();	
	return name[0] + " " +name[1];
	}
projects.display = function() {
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		if (projects.projects[project].images.length > 0){
			
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
	
}
education.display = function(){
	for (school in education.schools){
		
	$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("%url%", education.schools[school].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
			$(".education-entry:last").append(formattedNameDegree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
		var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedCity);
		
		if ( education.schools[school].major.length > 0){	
			for (maj in education.schools[school].major){
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[maj]);
				$(".education-entry:last").append(formattedMajor);
			}
		
		}
	
	}	
	for (onlineCourse in education.onlineCourses ){
			
			$(".education-entry:last").append(HTMLonlineClasses);
			
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
			
		var formattedTitleSchool = formattedTitle + formattedSchool;
			$(".education-entry:last").append(formattedTitleSchool);
			
		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].dates);
			$(".education-entry:last").append(formattedDates);
			
		var formattedURL = HTMLonlineURL.replace(/%data%/g, education.onlineCourses[onlineCourse].url);
			$(".education-entry:last").append(formattedURL);
           
}	
}


bio.display();
work.display();
projects.display();	
education.display();	
	
$("#mapDiv").append(googleMap);