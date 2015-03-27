//var name = "Jason Goldfarb";
//var formattedName =
  //  HTMLheaderName.replace("%data%", name);

//var role = "Web Developer";
//var formattedRole =
//    HTMLheaderRole.replace("%data%", role);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);


//var skills =
//  ["awesomeness", "programming", "teaching", "JS" ];

//$("#main").append(skills.length);

var bio = {
  "name": "Jason Goldfarb",
  "role": "Web Developer",
  "contacts": {
     "mobile": "(917) 207-1982",
     "email": "jason.r.goldfarb@gmail.com",
     "github": "jgoldfarb",
   },
  "welcomeMessage": "This is my Front-End Web Development resume",
  "skills": ["awesomeness", "programming", "teaching", "JS"],
  "bioPic": "images/headshot.jpg"
};

    var formattedRole =
        HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);

    var formattedName =
        HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

    var formattedMobile =
        HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);

    var formattedEmail =
        HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);

    var formattedGithub =
        HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);

    var formattedPic =
        HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedPic);

    var formattedWelcomeMessage =
        HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMessage);

    var formattedSkills =
        HTMLskills.replace("%data%", bio.skills);
        $("#header").append(formattedSkills);
