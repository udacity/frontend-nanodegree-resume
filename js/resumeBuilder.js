
// var awesomeThoughts = "I am Andy and I am AWESOME!"
// var funThoughts =
//     awesomeThoughts.replace("AWESOME", "FUN");

// console.log(awesomeThoughts);

// $("#main").append(funThoughts);

// var email = "zacknafain@gmail.com";
// var newEmail =
//     email.replace("zacknafain", "apanasiuk00");

// console.log(email);
// console.log(newEmail);

// var name = "Andy Panasiuk";
// var formattedName = HTMLheaderName.replace("%data%", name);

// var role = "Web Developer";
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// var skills =
//     ["HTML", "CSS", "JS", "jQuery"]

// $("#main").prepend(skills.length);


// var bio = {
//   "name": "Andy Panasiuk",
//   "role": "Web Developer",
//   "contacts": {
//     "mobile": "07507111029",
//     "email": "apanasiuk@gmail.com",
//     "github": "Androsh",
//     "twitter": "@apanasiuk",
//     "location": "London"
//   },
//   "welcomeMessage": "Hello World!",
//   "skills": [
//     "HTML", "CSS", "JavaScript", "jQuery"
//   ],
//   "bioPic": "images/logo.jpg"

// };

// $(main).append(bio.bioPic);

// bio.city = "London";
// bio.email = "zacknafain@gmail.com";

// $(main).append(bio.city);

  var work = {}
  work.position = "ATP";
  work.employer = "NHS";
  work.years = 4;

  var education = {}
  education["name"] = "WSHGiT";
  education["years"] = "2009-2012";
  education["city"] = "Warsaw, Poland";

  $("#main").append(work["position"]);
  $("#main").append(education.name);
