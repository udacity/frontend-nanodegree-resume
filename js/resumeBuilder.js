var firstName = "Stephani";
var fullName = "Stephani McGrath";
var jobTitle = " Web Developer";
var fullName = HTMLheaderName.replace("%data%", fullName);
$("#header").append(fullName);
var role = HTMLheaderRole.replace("%data%", jobTitle);
$("#header").append (jobTitle);
var skills = ["Apiarist", "Web Developer", "Jill of all trades", "Production Manager"];
var bio = {
  "name": "Stephani",
  "age": 39,
  "role": "Web Developer",
  "contacts": {
    "mobile": "415-846-4913",
    "email": "silentsoundz1977@gmail.com",
    "Location": "Oakland"
  },

  "welcome":"Greetins and salutations",
  "skills": skills
};
$("#main").append (bio.name);
$("#main").append (bio.age);
$("#main").append (bio.role);
$("#main").append (bio.contacts);
$("#main").append (bio.welcome);
$("#main").append (bio.skills);
