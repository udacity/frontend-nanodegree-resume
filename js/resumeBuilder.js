/*
This is empty on purpose! Your code to build the resume will go here.
 
 $("#main").append("Vivek M");
 var awesomeThoughts=" I am Vivek and I am Awesome";
 console.log(awesomeThoughts);
 var funThoughts=awesomeThoughts.replace("Awesome","Fun");
 $("#main").append(funThoughts);
 
 var formattedName="Vivek M";
 var formattedRole="Web Developer";
 formattedName=HTMLheaderName.replace("%data%",formattedName);
 formattedRole=HTMLheaderRole.replace("%data%",formattedRole);
 $("#header").prepend(formattedName);
 $("#header").append(formattedRole);
 */
 var skills=["java","c","html","css"];
 var bio={
	 "name":"Vivek",
	 "role":"Web Developer",
	 "contact":{
	  "mobile":8508228567,
	  "email":"mvivek3112@gmail.com",
	  "github":"https://github.com/vivek1996",
	  "twitter":"https://twitter.com/mvivek3112",
	  "location":"Tamil Nadu"
	 },
	 "picture":"images/me.jpg",
	 "message":"Hi there",
	 "skills":skills
	 };
 var name=HTMLheaderName.replace("%data%",bio.name);
 var role=HTMLheaderRole.replace("%data%",bio.role);
var con1=HTMLmobile.replace("%data%",bio.contact.mobile);
  var con2=HTMLemail.replace("%data%",bio.contact.email);
   var con3=HTMLgithub.replace("%data%",bio.contact.github);
    var con4=HTMLtwitter.replace("%data%",bio.contact.twitter);
	 var con5=HTMLlocation.replace("%data%",bio.contact.location);
 var pic=HTMLbioPic.replace("%data%",bio.picture);
 var msg=HTMLwelcomeMsg.replace("%data%",bio.message);
 var skil=HTMLskills.replace("%data%",bio.skills);
 $("#header").prepend(name);
 $("#header").append(role);
  
   $("#header").append(con1);
    $("#header").append(con2);
	 $("#header").append(con3);
	  $("#header").append(con4);
	   $("#header").append(con5);
 $("#header").append(pic);
   $("#header").append(msg);
 $("#header").append(skil);