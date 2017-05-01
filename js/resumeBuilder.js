/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var awesomeThoughts = "I am Karen and I am AWESOME!";
 var funThoughts = awesomeThoughts.replace("AWESOME", "fun");
 // two ways to use .replace. with the value in the function and...
 var formattedName = HTMLheaderName.replace("%data%", "Karen Dyer");
 // with the varialbe declared outside the function, and the variable name used instead of the value itself.
 var role = "Web Developer"
 var formattedRole = HTMLheaderRole.replace("%data%", role);

 $("#main").append([funThoughts]);
 $("#header").prepend([formattedRole]);
 $("#header").prepend([formattedName]);