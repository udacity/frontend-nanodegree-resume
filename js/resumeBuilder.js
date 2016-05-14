// $("#main").append(["Madison Hug!"]);  shows in the html body because you're appending (adding) to div #main
 
// var awesomeThoughts = "I am Madison and I am awesome!";
// var funThoughts = awesomeThoughts.replace("awesome", "fun");
// console.log(funThoughts); // shows in the console window of inspect element
var name = "Madison Hug";
var role = "Web Designer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var experience = {
	"experience" : [
			{
			   "employer" : "DietDirect",
		       "title" : "Graphic Designer",
		       "location" : "Wilmington, NC",
		       "dates" : "2015-Present",
		       "description" : "Graphic Designer in the marketing department. Managing, creating, and scheduling emails for 3 company websites."
			},
			{
			   "employer" : "Big Wolf Designs",
		       "title" : "Web and Graphic Designer",
		       "location" : "Wilmington, NC",
		       "dates" : "2014-2015",
		       "description" : "I was the owner of this small company. Designing all graphic and website projects. Focused mainly on logos and custom Wordpress sites for clients."
			},
			{
			   "employer" : "Queensboro Co.",
		       "title" : "Graphic Designer",
		       "location" : "Wilmington, NC",
		       "dates" : "2014",
		       "description" : "Graphic Designer for marketing department. Created banner ads, color correction for product images, emails, and flyers."
			},
			{
			   "employer" : "Huify",
		       "title" : "Graphic Intern",
		       "location" : "Wilmington, NC",
		       "dates" : "2013",
		       "description" : "Graphic Designer with marketing firm. Worked alongside owners and other interns to create SEO eBooks, blog posts, maintain social media accounts."
			}
			]
};

$("#workExperience").append(experience);

var skills = { 
	"skills" : [
		{
			"skills" : "HTML",
			"skills" : " CSS",
			"skills" : " Wordpress",
			"skills" : " Javascript",
			"skills" : " Flash",
			"skills" : " Photoshop",
			"skills" : " Illustrator",
			"skills" : " Magento",
			"skills" : " Email Branding & Management"
		}
		]
};

$("#skills").append(skills);

var education = {

	"schooling":[ 
	{
		"name" : "Full Sail University",
		"major" : "Web Design & Development",
		"gpa" : "3.5" },
		{
			"name" : "Udacity",
			"city" : "Online", 
			"major" : "Javascript"
		},
		{
			"awards" : "Course Directors Award In Flash Animation"
		}
	 ]
};
$("#education").append(education);

var contact = {
	"contact" : [
		{
			"name" : "Madison Hug",
			"phone" : "9102008969",
			"email" : "hug.v.mad2013@gmail.com",
		}
	]
};
$("#footerContacts").append(contact);




