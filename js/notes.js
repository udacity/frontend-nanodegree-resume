<!-- Notes -->

/*

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray = newArray.push(lastNumber + 1);
    return newArray;
}

function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
}

*/ 'I learned that you can use a new variable with a "modifier" and that allows you to "return"
something to the variable'

//-------------------------------------------------------------------------

/*


var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    
    var nameArray = finalName.split([' ']);
    nameArray = nameArray[0].toLowerCase() + ' ' + nameArray[1].toUpperCase();
    var capitalizeFirst = nameArray.charAt(0);
    capitalizeFirst = capitalizeFirst.toUpperCase();
    nameArray = capitalizeFirst + nameArray.slice(1);
    finalName = nameArray;
    
    
    console.log(nameArray);
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));

*/ 'I learned about someArray.join, and using several "modifiers" such as'
names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
--then followed by--
finalName = names.join(" ");

//-----------------------------------------------------------------------

'Below is a copy & pasted clean-up of resumeBuilder.js, just for reference'
/*
/*
This is empty on purpose! Your code to build the resume will go here.
 /*

 // $("#main").append("Corey Kovalik");

 var name = "Corey Kovalik";

 var role = "Junior Software Developer";

 var awesomeThoughts = "I am Corey and I am awesome!";

 console.log(awesomeThoughts);

 var funThoughts = awesomeThoughts.replace("awesome","fun");

 // $("#main").append(funThoughts);

 var formattedName = HTMLheaderName.replace("%data%",name);

 var formattedRole = HTMLheaderRole.replace("%data%",role);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

var myArray = ["your", "the", "man", "now", "dawg"]

//console.log(myArray.length);


/*$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts);
$("#main").append(bio.biopic);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.skills);

$("#main").append(work["position"]);
$("#main").append(education.name);

var education = {}

education["name"] = "University of South Florida";
education["yearsAttended"] = "2012 - 2015";
education["city"] = "Tampa, Florida";

var work = {}

work.position = "Waiter";
work.employer = "TGI Fridays";
work.yearsWorked = "2014 - present";
work.city = "Tampa, Florida";



*/


Removed bottom of index.html script because it was not necessary.

/*

    <script type="text/javascript">

    if(document.getElementsByClassName('flex-item').length === 0) {
    document.getElementById('topContacts').style.backgroundColor = "black";
    }
    if(document.getElementsByTagName('h1').length === 0) {
    document.getElementById('header').style.backgroundColor = "black";
    }
    if(document.getElementsByClassName('work-entry').length === 0) {
    document.getElementById('workExperience').style.backgroundColor = "black";
    }
    if(document.getElementsByClassName('project-entry').length === 0) {
    document.getElementById('projects').style.backgroundColor = "black";
    }
    if(document.getElementsByClassName('education-entry').length === 0) {
    document.getElementById('education').style.backgroundColor = "black";
    }
    if(document.getElementsByClassName('flex-item').length === 0) {
    document.getElementById('lets-connect').style.backgroundColor = "black";
    }
    if(document.getElementById('map') === null) {
    document.getElementById('mapDiv').style.backgroundColor = "black";
    }

    </script>

*/

//-----------------------------------------------------------------------


Webcast Notes
March 9th, 2016


##### ---About Project 2 Rubric--- #####

var thisFunction =function(){

};

function thisFunction2(){

}

//var has semicolon

-------------------------------------





/*

## TO-DO ##

/*

[ x] all of HTMLcontactGeneric....
[ x] HTMLmobile
[ x] email
[ x] twitter
[ x] github
[ --] blog??....no
[ x] location

[ ] colors
[ x] add more skills

[ x] biopic
[ x] welcomeMsg

[ ] encapsulation
    [ x] projects
    [ x] work
    [ ] education
    [ x] bio? maybe?

[ ] All of Education display, HTMLschool.... (schools)
[ ] all of online classes display?  HTMLonlineclasses (onlineCourses)




[ ] consider any final touch ups?


*/








