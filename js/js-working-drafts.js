
$("#main").append("Jo Silverton");

var awesomeThoughts = "I am Jo Silverton and I am AWESOME";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funThoughts);


var formattedName = HTMLheaderName.replace("%data%", "Jo Silverton");
var formattedRole = HTMLheaderRole.replace("%data%", "Technology Consultant");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

audacity to Udacity - remove first a and capitalise

var s = "audicity";

var udacityizer = function(s) {

    s = s.slice(1); //audacity -> udacity
    s = s.replace("u","U"); //udacity --> Udacity

    return s;
}

var skills = ["java", "sql", "OOA/D"]



var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);




console.log(udacityizer(s));

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    newArray = _array;
    var lastItem = newArray[newArray.length-1];
    var newLastItem = lastItem + 1;
    newArray[newArray.length-1] = newLastItem;

    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.

    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];

    // Your code goes in here!


    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

var formatName = function(s) {
	//options - split name into 2, manipulate both separately
	var names = s.split(" ");
	var first = names[0].slice(0,0).toUpperCase() + names[0].slice(1).toLowerCase();
	var last = names[1].toUpperCase;

	return first + " " + last;
}

var education = {
    "schools": [
        {
            "name" : "Purley High School",
            "city" : "Old Coulsdon",
            "majors" : ["english" , "french", "maths"]
        },
        {
            "name" : "Wallington High",
            "city" : "Wallington",
            "majors" : ["english" , "french", "economics"]
        }
    ]
}

//array of locations, use .push
function locationizer(work) {
    var arr = [];

    for(job in work.jobs) {
        arr.push(work.jobs[job].location);
    }
    return arr;
}


//doesn't work
function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    var finalName = name.join(" ");
    return finalName;
}

//turn names international
$("#main").append(internationalizeButton);