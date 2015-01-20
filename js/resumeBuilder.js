

var work = {
	"jobs": [
	{
		"employer" : "Self-Employed",
		"titles" : "Consultant",
		"location" : "Bangkok, Thailand",
		"dates" : "2013-2015",
		"description" : "I work with small businesses and give advice on marketing and business strategy"
	},
	{
		"employer" : "Gotham Direct Inc.",
		"titles" : "Strategist/Analyst",
		"location" : "New York, NY, USA",
		"dates" : "2012-2014",
		"description" : "Media Strategy and Planning, Advertising, Business Analytics"
	}
	]
};


var projects = {
	"Projects": [
	{
		"title" : "Udacity Project 1: Mockup to Website (HTML & CSS)",
		"date" : "2015 January",
		"description" : "The first project was really fun. We learned how to create a website using HTML and CSS from a PDF mockup.",
		"images" : "images/page-mock.png"
	},
	{
		"title" : "Udacity Project 2: Javascript and jQuery",
		"date" : "2015 January",
		"description" : "The 2nd project was creating and customizing this online resume using Javascript and jQuery.",
		"images" : "images/resume.png"
	}
	]
};



var bio = {
	"pic" : "https://placekitten.com/g/350/320",
	"name" : "David Tera",
	"role" : "Digital Marketing, Business Strategy & Analytics Consultant",
	"welcomeMessage" : "Currently learning Front-End Web Dev!",
	"skills" : ["Digital Marketing", "Business Strategy", "Analytics", "Advertising", "MySQL"],
	"contacts" : 
	{
		"mobile": "06202510931",
	 	"email" : "teradav@gmail.com",
	  	"github" : "github.com/Terka889",
	   	"twitter" : "twitter.com/iterka",
	    "location" : "Budapest, Hungary"}
	   
	};



var education = {
	"schools": [
	{
		"name" : "University of Glasgow",
		"location" : "Glasgow, Scotland",
		"degree" : "MA with Honours",
		"major" : " Social Sciences",
		"date" : "2008-2012",
		"url" : "http://gla.ac.uk"
	},
	{
		"name" : "University of Miami",
		"location" : "Miami, FL, USA",
		"degree" : "Exchange Year",
		"major" : " Business School",
		"date" : "2010-2011",
		"url" : "http://umiami.edu"

	}
],
	"onlinecourses": [
	{
		"school" : "Udacity",
		"title" : "Front End Nanodegree",
		"dates" : "2015",
		"url" : "https://www.udacity.com/course/nd001"
	}
]
};



//Header

bio.display = function () {

//Name, Role, Pic, Welcome
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcome);
var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
$('#header').append(formattedPic);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

//skills
if (bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);
formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$('#skills').append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$('#skills').append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$('#skills').append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$('#skills').append(formattedSkill);
};

//topContacts
//var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
//$("#topContacts").append(formattedMobile);
//var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
//$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

//footerContacts - this would be nice to combine with topContacts
//var formattedMobileFooter = HTMLmobile.replace("%data%", bio.contacts.mobile);
//$("#footerContacts").append(formattedMobileFooter);
//var formattedEmailFooter = HTMLemail.replace("%data%", bio.contacts.email);
//$("#footerContacts").append(formattedEmailFooter);
var formattedGithubFooter = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(formattedGithubFooter);
var formattedTwitterFooter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#footerContacts").append(formattedTwitterFooter);
var formattedLocationFooter = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(formattedLocationFooter);
};

bio.display();





//Work
work.display = function () {
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].titles);
   	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

  	var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
	};
};
work.display();


//Projects
projects.display = function(){
for (pro in projects.Projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.Projects[pro].title);
		var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.Projects[pro].date);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.Projects[pro].description);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.Projects[pro].images);
	    
	$(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDate);
    $(".project-entry:last").append(formattedProjectDescription);
    $(".project-entry:last").append(formattedProjectImage);
	};
};
projects.display();



//Education
education.display = function(){
for (edu in education.schools) {
	$("#education").append(HTMLschoolStart);   
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
		var formattedDate = HTMLschoolDates.replace("%data%", education.schools[edu].date);
		var formattedSchoolDegree = HTMLschoolName.replace("%data%", education.schools[edu].name) + HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
 
	$(".education-entry:last").append(formattedSchoolDegree);
    $(".education-entry:last").append(formattedSchoolLocation);
    $(".education-entry:last").append(formattedDate);
    $(".education-entry:last").append(formattedMajor);
	}

for (onl in education.onlinecourses) {	
$("#education").append(HTMLonlineClasses); 
$("#education").append(HTMLschoolStart); 
		var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlinecourses[onl].dates);
		var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlinecourses[onl].url);
		var formattedOnlineTitleSchool = HTMLonlineTitle.replace("%data%", education.onlinecourses[onl].title) + HTMLonlineSchool.replace("%data%", education.onlinecourses[onl].school);
		
	$(".education-entry:last").append(formattedOnlineTitleSchool);
	$(".education-entry:last").append(formattedonlineDate);
    $(".education-entry:last").append(formattedonlineURL);

};};
education.display();




//Map Div
$('#mapDiv').append(googleMap);





//Click Pixel
$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

logClicks(x,y);
});




//internationalizer


//function inName(name) {
//    var finalName = name;
//    var splits = name.split(' ', 2);
//    var first = splits[0].toLowerCase();
//    var last = splits [1];
    
//    var firstNameFL = first[0].toUpperCase() + first.slice(1);

//    finalName = firstNameFL +" "+ last.toUpperCase();
    // Don't delete this line!
//    return finalName;
//};

//$('#main').append(internatonalizeButton)



//Menu

(function($) {

  $.fn.menumaker = function(options) {
      
      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {
        cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
        $(this).find("#menu-button").on('click', function(){
          $(this).toggleClass('menu-opened');
          var mainmenu = $(this).next('ul');
          if (mainmenu.hasClass('open')) { 
            mainmenu.hide().removeClass('open');
          }
          else {
            mainmenu.show().addClass('open');
            if (settings.format === "dropdown") {
              mainmenu.find('ul').show();
            }
          }
        });

        cssmenu.find('li ul').parent().addClass('has-sub');

        multiTg = function() {
          cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
          cssmenu.find('.submenu-button').on('click', function() {
            $(this).toggleClass('submenu-opened');
            if ($(this).siblings('ul').hasClass('open')) {
              $(this).siblings('ul').removeClass('open').hide();
            }
            else {
              $(this).siblings('ul').addClass('open').show();
            }
          });
        };

        if (settings.format === 'multitoggle') multiTg();
        else cssmenu.addClass('dropdown');

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($( window ).width() > 768) {
            cssmenu.find('ul').show();
          }

          if ($(window).width() <= 768) {
            cssmenu.find('ul').hide().removeClass('open');
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);

(function($){
$(document).ready(function(){

$(document).ready(function() {
  $("#cssmenu").menumaker({
    title: "Menu",
    format: "multitoggle"
  });

  $("#cssmenu").prepend("<div id='menu-line'></div>");

var foundActive = false, activeElement, linePosition = 0, menuLine = $("#cssmenu #menu-line"), lineWidth, defaultPosition, defaultWidth;

$("#cssmenu > ul > li").each(function() {
  if ($(this).hasClass('active')) {
    activeElement = $(this);
    foundActive = true;
  }
});

if (foundActive === false) {
  activeElement = $("#cssmenu > ul > li").first();
}

defaultWidth = lineWidth = activeElement.width();

defaultPosition = linePosition = activeElement.position().left;

menuLine.css("width", lineWidth);
menuLine.css("left", linePosition);

$("#cssmenu > ul > li").hover(function() {
  activeElement = $(this);
  lineWidth = activeElement.width();
  linePosition = activeElement.position().left;
  menuLine.css("width", lineWidth);
  menuLine.css("left", linePosition);
}, 
function() {
  menuLine.css("left", defaultPosition);
  menuLine.css("width", defaultWidth);
});

});


});
})(jQuery);



