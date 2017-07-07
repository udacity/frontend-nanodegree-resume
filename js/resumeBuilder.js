// var bio  = {
//   "name":"Anton Jewiss",
//   "job":"Front end web Devloper",
//   "contacts":
//   {
//     "mobile":"022 019 8895",
//     "email":"jondoe.com"
    
//   },
//   "bioPic":"images/fry.jpg"
// }; 



// var work = 
// {
//   "job": "exatus",
//   "cityOfJob":"wellington",
//   "title":"locking clip dispecer",
//   "yearsAtJob":"2011 - 2017",
//   "discription":"dispencing locking clips into packets to be taped and snaped"

// };

// var education = 
// {
//   "school":"Hutt valley high school",
//   "yearsAtSchool":"2011 - 2017",
//   "discription":"dispencing locking clips into packets to be taped and snaped"

// };



// var education =
// {"school": [
//  {
//     "school":"Hutt valley high school",
//     "yearsAtSchool":"2011 - 2017",
//     "discription":"dispencing locking clips into packets to be taped and snaped"

//   },
//   {
//     "school":"Udacity",
//     "dates":"2017 ",
//     "url":"https://classroom.udacity.com/nanodegrees/nd001/parts/9d3a4440-1e65-4fc5-9ac1-b40e401ad069/modules/296281861575460/lessons/1930528550/concepts/19506785590923"
//   }
//   ]
// };






// function displayBio(){
//   var formatedName = HTMLheaderName.replace("%data%",bio.name);
//   var formattedRole =HTMLheaderRole.replace("%data%",bio.job);
//   console.log("my name is" +formatedName);
//   console.log("my role is "+formattedRole);
//   $("#header").prepend(formattedRole);
//     $("#header").prepend(formattedName);
// };
// //var skills= "web devlopment, good comuacator , work well in a team or indervially "
// //for (skills=1;skills<1;skills.5)
// displayBio();

var bio = {

  "name":"Anton Jewiss",

  "job":"Front end web Developer",

  "contacts": {

    "mobile":"022 019 8895",

    "email":"anton@jondoe.com"

  },

  "skills":["AWESOME, HTML5, CSS, JAVASCRIPT"],

  "bioPic":"images/fry.jpg"

};

 

var work = {

  "job":"Exatus",

  "cityOfJob":"Wellington",

  "title":"locking clip dispenser",

  "yearsAtJob":"2011 - 2017",

  "discription":"Dispensing locking clips into packets to be taped and snaped",

 

};

 

var education = {

    "school":"Hutt valley high school",

    "dates":"2011 - 2017",

    "description":"dispencing locking clips into packets to be taped and snapped"

};

 

function displayBio(){

  var formattedName = HTMLheaderName.replace("%data%",bio.name);

  var formattedRole = HTMLheaderRole.replace("%data%",bio.job);

  $("#header").prepend(formattedRole);

  $("#header").prepend(formattedName);

}

 

displayBio()