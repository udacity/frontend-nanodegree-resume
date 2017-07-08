var bio  = {
  "name":"Anton Jewiss",
  "job":"Front end web Devloper",
  "contacts":
  {
    "mobile":"022 019 8895",
    "email":"jondoe.com"   
  },
  "bioPic":"images/fry.jpg"
}; 

var work = 
{
  "job": "exatus",
  "cityOfJob":"wellington",
  "title":"locking clip dispecer",
  "yearsAtJob":"2011 - 2017",
  "discription":"dispencing locking clips into packets to be taped and snaped"

};

var education =
{"schools": [
 {
    "school":"Hutt valley high school",
    "yearsAtSchool":"2011 - 2017",
    "discription":"dispencing locking clips into packets to be taped and snaped"

  },
  {
    "school":"Udacity",
    "dates":"2017 ",
    "url":"https://classroom.udacity.com/nanodegrees/nd001/parts/9d3a4440-1e65-4fc5-9ac1-b40e401ad069/modules/296281861575460/lessons/1930528550/concepts/19506785590923"
  }
  ]
};

function displayBio(){
  var formattedName = HTMLheaderName.replace("%data%",work.job);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.job);
  var formattedContacts = HTMLcontactGeneric.replace("%data%",bio.contacts.email);
  var formattedContacts = formattedContacts.replace("%contact%","email");
  var formattedbioPic =  HTMLbioPic.replace("%data%",bio.bioPic);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedContacts);
  $("#header").append(formattedbioPic);

};  
  displayBio();

function displayWork(){
  var formattedCityOfJob = HTMLworkEmployer.replace("%data%",work.job);
  var formattedTitle = HTMLworkStart.replace("%data%",work.title);
  var formattedCityOfJob = HTMLworkDates.replace("%data%",work.yearsAtJob);
  var formattedTitle = HTMLworkDescription.replace("%data%",work.discription);
  $("#workExperience").append(formattedJob);
  $("#workExperience").append(formattedCityOfJob);
  $("#workExperience").append(formattedTitle);
  $("#workExperience").append(formattedYearsAtjob);
  $("#workExperience").append(formattedDiscripton);
  
};

displayEducation();
function displayEducation(){
  var formattedSchool = HTMLSchoolStart.replace("%data%",education.school);
  
  $("#education").append(formattedSchool);
};

displayEducation();