/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var formattedName = HTMLheaderName.replace("%data%", "Karen Dyer");
 // with the varialbe declared outside the function, and the variable name used instead of the value itself.
 var role = "Web Developer"
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 var work = {
 	"title":"Web Developer &nbsp;",
 	"employer":"MLMIC &nbsp;",
 	"years":"14 &nbsp;",
 	"city" :"Latham &nbsp;"
 }
 // var formattedEmail = HTMLemailEmail.replace("%data%", work.position);
 var projects = {
 	"mlmic":"work project &nbsp;",
 	"uDacityProg":"programming 101 project &nbsp;",
 	"uDacityFront":"front end project &nbsp;"
 }
 var education = {
 	"school":"Marlboro &nbsp;",
	"yearsAttended":"2 &nbsp;",
 	"city":"Marlboro &nbsp;"
 }
 var bio = {
 	"skills":["coding","sleeping","yoga","writing"]
 }

 $("#header").prepend([formattedRole]);
 $("#header").prepend([formattedName]);
 $("#main").append([work.position]);
 $("#main").append([work.employer]);
 $("#main").append([work.years]);
 $("#main").append([work.city]);
 $("#main").append([projects.mlmic]);
 $("#main").append([projects.uDacityProg]);
 $("#main").append([projects.uDacityFront]);
 $("#main").append([education.school]);
 $("#main").append([education.yearsAttended]);
 $("#main").append([education.city]);

 if (bio.skills > 0) {
 	$("#header").prepend([HTMLskillsStart]);
 	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
 	$("#skills").append(formattedSkill);
 	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
 	$("#skills").append(formattedSkill);
 	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
 	$("#skills").append(formattedSkill);
 	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
 	$("#skills").append(formattedSkill);
 }

 for(job in work.jobs) {
 	$("#workExperience").append(HTMLworkStart);
 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
 	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
 	var formattedEmployerTitle = formattedEmployer + " HERE " + formattedTitle;
 	$(".work-entry:last").append(formattedEmployerTitle);
 }