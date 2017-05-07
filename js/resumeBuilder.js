/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var formattedName = HTMLheaderName.replace("%data%", "Karen Dyer");
 // with the varialbe declared outside the function, and the variable name used instead of the value itself.
 var role = "Web Developer"
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 var work = {
 	"position":"Web Developer &nbsp;",
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