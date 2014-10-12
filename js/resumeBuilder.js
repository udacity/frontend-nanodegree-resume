var formattedName = HTMLheaderName.replace("%data%", "Glenn Cameron");
var formattedRole = HTMLheaderRole.replace("%data%", "Tinkerer");
var bioPic = HTMLbioPic.replace("%data%", "images/fry.jpg");

$(header).append(formattedName);
$(header).append(formattedRole);
$(header).append(bioPic);


var  bio = {
        "name": "Glenn",
        "role": "Tinkerer",
        "contacts": {
            "email" : "glenn@glenncameronjr.com",
            "number" : "424.234.8852",
            "Twitter" : "@glenncameronjr"
        },
        "picture_url": "images/fry.jpg",
        "welcome_message": "Welcome bitches!",
        "skills": [
            "Internet marketing",
            "Web development",
            "Awesomeness",
            "Inventions"
        ]
    }

//JSON format

var education = {
    "schools": [
        {
            "school": "Florida Institute of Technology",
            "city": "Melbourne",
            "degree": "MBA",
            "major": "Internet Marketing",
            "graduated": "2013",
            "online": "True"
        },
        {
            "school": "Univesity of Florida",
            "city": "Gainesville",
            "degree": "BA",
            "major": "Biology",
            "graduated": "2011",
            "online": "False"
        }
    ]
}

//work Json data

var work = {
    "jobs": [
        {
            "job": "Marketing & Events",
            "employer": "The Network",
            "title": "CMO",
            "location": "Gainesville, Florida",
            "dates": "2009-2011",
            "desc_1": "An online and offline social network"
        },
        {
            "job": "Publishing",
            "employer": "Bonnier Corporation",
            "title": "Web Editor",
            "location": "Winter Park, Florida",
            "dates": "2012-2013",
            "desc_1": "One of the largest media companies in the world."
        },
        {
            "job": "Developer Marketing",
            "employer": "Samsung",
            "title": "Sr. Digital Marketing Manager",
            "location": "Winter Park, Florida",
            "dates": "2013-Present",
            "desc_1": "Rebranding Samsung as a developer friendly company."
        }
    ]
}
//projects JSON

var projects = 
{
    "projects": [
        {
            "title": "Samsung Developer Conference i",
            "location": "San Francisco, California",
            "dates": "2013",
            "desc": "Samsungs first international developer conference"
        },
        {
            "title": "Samsung Developer Conference ii",
            "location": "San Francisco, California",
            "dates": "2013",
            "desc": "Samsungs second international developer conference"
        }
    ]
}

/*
$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
*/


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	
	$("#skills").append(formattedSkill);

}

for(job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDesc = HTMLprojectDescription.replace("%data%", work.jobs[job].desc_1);

	var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedDesc;

	$(".work-entry:last").append(formattedEmployerTitle);
}


