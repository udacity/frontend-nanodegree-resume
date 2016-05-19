/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = [
      {
      "employer":"Jabil",
      "title":"Engineer",
      "location":"Guangzhou, Guangdong Province, CHINA",
      "dates":"2007-2009",
      "description":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
      }
    ];


var projects =[{

  "title": "Machine Learning Nano Degree",
  "dates":"2015.06- Present",
  "picture":"images/project.jpg",
  "description":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  
     }]

     //var HTMLprojectImage = '<img src="%data%">';



var bio ={
	"name": "Fish Wang",
	"role": "Web Developer",
	"welcomeMessage":"Hi there, how are you doing today?",
	"contacts": {"Tel":"123112313" , "Email":"asdfdsa@ads.com" ,"Location":"Guangzhou,Guangdong"},
  "skills":["Excel","SolidWorks","Javascript","Python","Machine Learning","Front End Development"],
  "biopic": "images/fry.jpg"

};

var education ={

	"schools": [{
          "name":"Guangdong University of Technology",
          "location":"Guangzhou, Guangdong Province, CHINA",
          "degree": "Bachelor",
          "major": "Mechanical Engineering",
          "dates":"2003.09 - 2007.07",
          "schoolURL":"www.gdut.edu.cn"
	}],

	"onlineCourses":[{

		"title":"Machine Learning",
		"school":"Georgia Institute of Technology",
		"dates":"2015 - 2016",
		"courseURL":"http://www.udacity.com"

	}]

};


// bio
if (bio.length !== 0){

    var formattedName = HTMLheaderName.replace("%data%", bio["name"]);

    var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);

    var formattedPic= HTMLbioPic.replace("%data%",bio.biopic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

    var formattedSkills ="";

    bio["skills"].forEach(function(skill){

           formattedSkills = formattedSkills.concat(HTMLskills.replace("%data%",skill)) ;


        });

    formattedSkills =  formattedSkills;
    console.log(formattedSkills);

    //$("#header").append(formattedSkills);

     var formattedBio = formattedName + formattedRole + formattedPic +
              formattedWelcomeMsg ;

    $("#header").append(formattedBio);
    $("#header").append(HTMLskillsStart);
    $("#skills").append(formattedSkills);


  //work on contacts

    contacts = bio["contacts"];

    for (var key in contacts){

      if (contacts.hasOwnProperty(key)){

        var formattedContact = HTMLcontactGeneric.replace("%contact%",key);
        formattedContact = formattedContact.replace("%data%", contacts[key]);

        $("#topContacts").append(formattedContact);
        $("#footerContacts").append(formattedContact);
      }
    }// contacts loop



}// if bio statement

if (work.length !== 0){

    work.forEach(function(val){

       for (key in val){
            var formattedWork ="";

            if (key == "employer"){
                var formatttedEmployer = HTMLworkEmployer.replace("%data%",val["employer"]);
                continue;
            }else if (key === "title"){
               var formattedTitle = HTMLworkTitle.replace("%data%",val["title"]);
                continue;
            }else if (key==="dates"){
            var formattedDates = HTMLworkDates.replace("%data%",val["dates"]);
             continue;
            }else if (key =="location") {
              var formatedLocation = HTMLworkLocation.replace("%data%",val["location"]);
               continue;
            }else if(key =="description") {
            var formattedDescription = HTMLworkDescription.replace("%data%", val.description);
             continue;
            }

       }// for loop

    formattedWork = HTMLworkStart+formatttedEmployer+formattedTitle+formattedDates+formatedLocation +formattedDescription;

    $("#workExperience").children().append(formattedWork);

    })// forEach loop

}// end of work



// project

if (projects.length !==0){

    projects.forEach(function(project){

        var formattedProject =""

        for (key in project) {

            if (key ==="title"){

                 var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
                 continue;


            }else if(key ==="dates") {

                 var formattedDates = HTMLprojectDates.replace("%data%",project.dates);
                 continue;


            }else if(key === "description") {

                 var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
                 continue;


            }else if (key === "picture"){

              var formattedProjectPic = HTMLprojectImage.replace("%data%",project.picture);
              continue;



            }
            //var HTMLprojectImage = '<img src="%data%">';

        }// end for loop

       formattedProject = HTMLprojectStart + formattedTitle +formattedDates + formattedDescription+formattedProjectPic;

       $("#projects").children().append(formattedProject);

    }) // end forEach

};


// education

if (education !== 0){

    var schools = education.schools;

    if (schools.length !==0){
        schools.forEach(function(val){
            var formattedSchool = "";
            for (key in val){
                if (key === "name"){
                  var formattedSchoolName = HTMLschoolName.replace("%data%",val.name);
                  continue;
                } else if (key === "degree"){
                  var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",val.degree);
                  continue;
                } else if (key === "dates"){
                  var formattedSchoolDates = HTMLschoolDates.replace("%data%",val.dates);
                  continue;
                } else if (key === "location"){
                 var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",val[key]);
                 continue;
                } else if (key === "major") {
                 var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",val[key]);
                }
             };// end for loop
         formattedSchool = HTMLschoolStart + formattedSchoolName+
                        formattedSchoolDegree+formattedSchoolDates+
                        formattedSchoolLocation +formattedSchoolMajor;

         $("#education").children().append(formattedSchool);

       }); //end forEach
    } // end of schools



    onlineCourses = education.onlineCourses;
    if (onlineCourses.length !== 0){

      onlineCourses.forEach(function(val){
            var formattedOnline = "";
            for (key in val){
                if (key === "title"){
                  var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",val[key]);
                  continue;
                } else if (key === "school"){
                  var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",val[key]);
                  continue;
                } else if (key === "dates"){
                  var formattedOnlineDates = HTMLonlineDates.replace("%data%",val[key]);
                  continue;
                } else if (key === "courseURL"){
                 var formattedOnlineURL = HTMLonlineURL.replace("%data%",val[key]);
                 continue;
                }
             };// end for loop
         formattedOnline = HTMLonlineClasses + formattedOnlineTitle+
                        formattedOnlineSchool+formattedOnlineDates+
                        formattedOnlineURL;

         $("#education").children().append(formattedOnline);

       }); //end forEach
    } // end of schools



    } // if education.length !===0
