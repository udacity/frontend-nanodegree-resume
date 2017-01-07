/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Doug");

//var firstName = "Doug";
//var age = 43;
//console.log(firstName,age);

var awesomeThoughts = "I am Doug and I am AWESOME!"
console.log(awesomeThoughts);

var funThoughts = 
    awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funThoughts);

// [string].replace([old]),[new])

var email = "doug.lavainc@gmail.com";

var newEmail = 
    email.replace("doug.lavainc@gmail.com", "doug@lavainc.com");

console.log(email);
console.log(newEmail);

// the above should be what's needed to update the height with height + x pixels

