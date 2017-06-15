var bio= {
    "name": "Anthony Chen",
    "contact": "chen.anthony.1109@gmail.com",
    "skills" :["JQuery", "HTML", "CSS", "JavaScript"]
};

var work = {
    "name": "Shine Electronics",
    "position": "IT/MIS Administrator",
    "year": "February 2016 to present"
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
