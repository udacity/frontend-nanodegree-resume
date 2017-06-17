function displayWork(){
    var name = "Anthony Chen";
    var role = "Resume Test";

    var formatedName = HTMLheaderName.replace("%data%", name);
    var formatedRole = HTMLheaderRole.replace("%data%", role);

    $("#header").append(formatedName);
    $("#header").append(formatedRole);

    var bio= {
        "name": "Anthony Chen",
        "contact": "chen.anthony.1109@gmail.com",
        "skills" :["JQuery", "HTML", "CSS", "JavaScript"]
    };

    var work = {
        "jobs": [
        {
            "employer": "Shine Electronics",
            "position": "IT/MIS Administrator",
            "year": "2016 - present",
            "description": "Lore Ip Sum"
        }
        ]
    };

    var projects = {
        "projects": "JavaScript Resume Project"
    };

    var education = {
        "schools": [
        {
            "name": "Baruch College",
            "city": "New York, NY 10010",
            "degree": "BA",
            "major": "Economics"
        },
        {
            "name": "Queens College",
            "city": "Flushing, NY 11367",
            "degree": "BA",
            "major": "Computer Science"
        }
        ]
    };

// Profile Skills
if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}
// Job history
for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
    $(".work-entry").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry").append(formattedDescription);

} // for
function inName(name){
    var name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

} // displayWork

displayWork();
