/*
bio object
*/
var bio = {
	"name" : "Chris Clemons",
	"role" : "Visual Designer and Web Developer",
	"contacts" : {
		"email" : '<a href="mailto:info@phonofidelic.com">@phonofidelic.com</a>',
		"mobile" : "555-555-5555",
		"location" : "Ft. Lauderdale",
		"twitter" : '<a href="http://twitter.com/Phonofidelic", target="blank">@ phonofidelic</a>',
		"github" : '<a href="http://github.com/phonofidelic", target="blank">github/phonofidelic</a>',
		"blog" : '<a href="http://www.phonofidelic.tumblr.com", target="blank">phonofidelic.tumblr</a>'
	},
	"welcomeMessage" : "Welcome! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis tristique magna. Sed et iaculis est. Morbi at lectus blandit, elementum sapien a, volutpat ante. Aliquam porta elementum nulla ac facilisis. Phasellus volutpat sed enim nec tincidunt. Aenean molestie interdum urna ut pellentesque. Phasellus suscipit est ut tellus varius varius. Donec sed orci et neque semper elementum.",
	"skills" : ["design", "printing", "art", "web development"],
	"bioPic" : "images/me.jpg"
}

/*
education object
*/
var education = {
	"schools" : [
		{
			"name" : "Stockholm University",
			"location" : "Stockholm, Sweden",
			"area" : "Philosophy and linguistics",
			"years" : "2011-2013",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum libero ipsum, at blandit ante tempus eu. Maecenas tempor bibendum odio. Praesent maximus luctus auctor. Praesent lorem massa, lobortis sed aliquet at, mollis at metus. Suspendisse ut purus vel odio vulputate venenatis vitae in ante. Curabitur faucibus in nulla ut aliquet. Curabitur vitae tortor at massa varius suscipit. Morbi sem augue, laoreet at efficitur in, molestie non enim. Nullam risus velit, consectetur semper purus eu, pharetra vestibulum velit. Vestibulum nec condimentum mauris. Nunc eleifend accumsan condimentum. Maecenas ullamcorper lectus non nulla tempus, eu mattis lacus sollicitudin. Vivamus ultrices sed purus posuere scelerisque. Aliquam eget facilisis leo, vitae sollicitudin ipsum. Nulla eleifend nulla sit amet tincidunt dapibus. Fusce bibendum efficitur libero, at pretium est.",
			"url" : "http://www.philosophy.su.se/english"
		},
		{
			"name" : "College of Printmaking Arts",
			"location" : "Stockholm, Sweden",
			"area" : "Print making",
			"years" : "2009-2011",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat laoreet purus et laoreet. Donec at ultrices nibh, non pellentesque mauris. Nam pharetra, urna nec feugiat tristique, diam tortor porttitor urna, a mollis odio dolor quis nulla. Sed interdum tellus ac lectus eleifend mattis. In congue, urna ut ultricies scelerisque, risus tortor malesuada velit, sed dictum leo quam ut nisi. Nunc ut posuere velit. Donec eleifend risus eget semper egestas. Morbi lacinia tortor eget enim varius placerat. Nulla facilisi. Phasellus cursus turpis sit amet eros aliquam, sed sodales urna volutpat. Nulla facilisi. Quisque mattis maximus sapien id malesuada. Praesent quis elit ut eros feugiat iaculis. Maecenas massa arcu, hendrerit a porttitor id, mollis in dolor.",
			"url" : "http://www.grafikskolan.se/article.asp?kat=13&id=48"
		}
	],
	"onlineCourses" : [
		{
			"name" : "Udacity",
			"title" : "Front-end web development",
			"dates" : "2014-2015",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum lectus at lorem sagittis, at euismod orci ornare. Nam porta, neque et ullamcorper vestibulum, ex felis luctus nisl, et aliquam erat tortor ut orci. Quisque sed erat et odio sodales lobortis sed quis leo. Proin blandit metus id malesuada hendrerit. Nulla luctus mauris eget rhoncus placerat. Quisque eleifend massa et porta pulvinar. In hac habitasse platea dictumst. Vestibulum vulputate est in tristique ornare.",
			"url" : "http://www.udacity.com"
		}
	]
}

/*
work object
*/
var work = {
	"jobs" : [
		{
			"employer" : "Phonofidelic",
			"title" : "Graphic designer",
			"location" : "Stockholm, Sweden & Ft Lauderdale, FL",
			"dates" : "2006-2015",
			"description" : " 	Phonofidelic is a design project started by Chris Clemons and is dedicated to making quality design for bands, booking agencies and clubs. The main focus is on screen-printed concert posters and flyers, album art, illustrations etc.",
			"url" : "http://www.phonofidelic.com"
		},
		{
			"employer" : "Imperial Recordings",
			"title" : "Graphic artist, printer",
			"location" : "Stockholm, Sweden",
			"dates" : "2012",
			"description" : "Swedish record label founded in the fall of 2002. The first release on the label was the Crosses EP with José González. Since then albums has been released with José González, Promise and the Monster, Melpo Mene, Eskju Divine, Martin McFaul, Samuraj Cities, Gustaf Spetz, TLS, Paper and Zeigeist. Imperial Recordings is based in Stockholm, Sweden.",
			"url" : "http://imperialrecordings.se/"
		}
	]
}

/*
projects object
*/
var projects = {
	"projects" : [
		{
			"title" : "This Works For Now",
			"dates" : 2012,
			"description" : "Graphic prints and instalation shown att Grafiska Sälskapet.",
			"images" : ["images/proj1_1s.jpg", "images/proj1_2s.jpg"],
			"modals" : [ 
				{
					"id" : "proj1_1",
					"title" : "Project 1, image 1",
					"header" : "-describe-",
					"image" : "images/proj1_1.jpg",
					"footer" : ""
				},
				{
					"id" : "proj1_2",
					"title" : "Project 1, image 2",
					"header" : "-describe-",
					"image" : "images/proj1_2.jpg",
					"footer" : ""
				}
			]
		},
		{
			"title" : "Container Club",
			"dates" : 2012,
			"description" : "Graphic prints for live event.",
			"images" : ["images/proj2_1s.jpg", "images/proj2_2s.jpg", "images/proj2_3s.jpg"],
			"modals" : [
				{
					"id" : "proj2_1",
					"title" : "Project 2, image1",
					"header" : "Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis velit ac diam eleifend faucibus. Nullam non nibh non velit vestibulum ullamcorper. Sed in euismod quam. Sed auctor vestibulum metus id porta. Vivamus auctor in sem ut porttitor. Nulla facilisi. Integer sagittis, mi quis luctus luctus, est sapien cursus enim, volutpat iaculis eros nulla lacinia tortor. Curabitur molestie nisi non augue pellentesque, pharetra consectetur enim malesuada. Integer pulvinar libero id ornare suscipit. Morbi ac tincidunt libero, ac dapibus ex. Nam rhoncus risus vitae sapien iaculis, a vulputate lectus tincidunt. Phasellus consequat tortor a fermentum laoreet.",
					"image" : "images/proj2_1.jpg",
					"footer" : ""
				},
				{
					"id" : "proj2_2",
					"title" : "Project 2, image 2",
					"header" : "Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis faucibus aliquam. Duis eu elementum odio, ut facilisis lacus. Ut ac nunc sit amet lacus elementum venenatis eu sit amet odio. Sed ac lectus eu nisl dictum blandit. Curabitur eros massa, molestie vel convallis eget, hendrerit eu ligula. Ut pulvinar, ante quis aliquet laoreet, tellus leo condimentum nisl, sit amet mollis dolor erat ac dolor. Fusce vitae ullamcorper lorem. Suspendisse aliquam diam eu suscipit vehicula. Nulla viverra augue non odio faucibus egestas ut non leo. Pellentesque sed iaculis ligula. Aenean dolor erat, consequat sed faucibus eget, euismod eu quam.",
					"image" : "images/proj2_2.jpg",
					"footer" : ""
				}, 
				{
					"id" : "proj2_3",
					"title" : "Project 2, image 3",
					"header" : "Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida lorem eget mauris varius, sed lacinia nibh suscipit. Aliquam quis venenatis quam. Donec pretium felis at facilisis laoreet. Mauris sagittis aliquet velit non ultrices. Suspendisse vitae pharetra nulla. Ut turpis enim, accumsan ac sollicitudin vitae, cursus id arcu. Morbi finibus nulla elit, suscipit lobortis leo dictum et. Suspendisse non lectus varius, tincidunt nisi a, condimentum urna. Praesent ut tempor justo, quis porta mi. Sed malesuada, massa quis molestie feugiat, ex elit lacinia nunc, id vulputate augue ligula et elit. Integer non tellus fringilla, faucibus arcu non, dictum mi. Nulla facilisi.",
					"image" : "images/proj2_3.jpg",
					"footer" : ""
				}
			]
		}
	]
}


/*
name, role start
*/
var formattedNameRole = HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", "Design & Printing");
$("#header").prepend(formattedNameRole);

/*
biopic start
*/
var formattedBioPic = HTMLbioPic.replace("%data%", "images/me.jpg");
$("#header").append(formattedBioPic);

/*
welcomeMsg start
*/
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

/*
contact start
*/
bio.contacts.display = function() {

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#topContacts, #footerContacts").append(formattedEmail);
	$("#topContacts, #footerContacts").append(formattedMobile);
	$("#topContacts, #footerContacts").append(formattedTwitter);
	$("#topContacts, #footerContacts").append(formattedBlog);
	$("#topContacts, #footerContacts").append(formattedGithub);
	$("#topContacts, #footerContacts").append(formattedLocation);
}
bio.contacts.display();

/*
skills start
*/
bio.skills.display = function() {
	if (bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
	}
}
bio.skills.display();

/*
work experience start
*/
function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("%link%", work.jobs[job].url);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

displayWork();

/*
click tracker
*/
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

/*
international name changer
*/
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

/* 
projects start 
*/
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image])
				.replace("%modalId%", projects.projects[project].modals[image].id);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

/*
modals start
*/
modals.append = function() {
	if (projects.projects[project].modals.length > 0) {

		for (modal in projects.projects[project].modals) {
			$("#modals").append(HTMLmodalStart);

			var formattedModal = HTMLmodal
			.replace("%modalId%", projects.projects[project].modals[modal].id)
			.replace("%modalTitle%", projects.projects[project].modals[modal].title)
			.replace("%modalDescribe%", projects.projects[project].modals[modal].header)
			.replace("%modalImage%", projects.projects[project].modals[modal].image);

			$(".modal-entry:last").append(formattedModal);
			console.log(projects.projects[project].modals[0]);
		}
	}
}

modals.append();

/*
education start
*/
education.display = function() {
	$("#education").append(HTMLschools);
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("%link%", education.schools[school].url);
		var formattedSchoolArea = HTMLschoolDegree.replace("%data%", education.schools[school].area);
		var formattedSchoolNameArea = formattedSchoolName + formattedSchoolArea;

		var formattedSchoolDescription = HTMLschoolDescription.replace("%data%", education.schools[school].description);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].years);

		$(".education-entry:last").append(formattedSchoolNameArea);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolDescription);
	}
	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		$("#education").append(HTMLonlineStart);

		var formattedOnlineName = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].name);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("%link%", education.onlineCourses[course].url);
		var formattedOnlineNameTitle = formattedOnlineTitle + formattedOnlineName;

		var formattedOnlineDescrition = HTMLonlineDescription.replace("%data%", education.onlineCourses[course].description);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%link%", education.onlineCourses[course].url);

		$(".online-entry").append(formattedOnlineNameTitle);
		$(".online-entry").append(formattedOnlineDates);
		$(".online-entry").append(formattedOnlineDescrition);	
		$(".online-entry").append(formattedOnlineURL);
	}
}
education.display();

/*
map start
*/
$("#mapDiv").append(googleMap);