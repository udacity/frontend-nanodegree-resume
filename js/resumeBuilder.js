var bio = {
  "name": "Jason Goldfarb",
  "role": "Web Developer",
  "contacts": {
     "mobile": "(917) 207-1982",
     "email": "jason.r.goldfarb@gmail.com",
     "github": "jgoldfarb",
     "twitter": "jasonrgoldfarb",
     "location": "New York Metro",
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

    var formattedTwitter =
        HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);

    var formattedLocation =
        HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);        

    var formattedPic =
        HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedPic);

    var formattedWelcomeMessage =
        HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMessage);

    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
          $("#skills").append(formattedSkills);
    }
