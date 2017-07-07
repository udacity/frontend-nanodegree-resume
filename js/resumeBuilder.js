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
{"school": [
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
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.job);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
};

displayBio();