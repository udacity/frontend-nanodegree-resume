var role = "Web Developer";

var formattedRole = HTMLheaderRole.replace("%data%", name); //自定义Role规格化文本
var formattedName = HTMLheaderName.replace("%data%", role);
$("#header").prepend(formattedRole); //jQ插入规格化文本
$("#header").prepend(formattedName);

var bio = {
  "name": "Game Boy A",
  "role": "Web Developer",
  "contacts": {
    "mobile": "0710-XXXX",
    "email": "XXX@XXX",
    "github": "rubygba",
    "location": "China"
  },
  "welcomeMessage": "abc bb bb bb bb bb bla bla bla.",
  "skills": [
    "s1", "s2", "s3", "s4", "s5"
  ],
  "bioPic": "images/fry.jpg"
}

var education = {
  "schools": [
    {
      "name": "Southeastern University",
      "location": "Nanjing",
      "degree": "BA",
      "dates": 2010,
      "url": "http://example.com"
    },
    {
      "name": "Xiang Fan No.3 High School",
    }
  ],
  "skills": [
    {
      "title": "Program Languages",
      "name": ["C++", "JavaScript", "HTML", "CSS"],
      "level": "Familiar"
    }
  ]
}
