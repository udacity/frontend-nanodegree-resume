var me = [{
			bio: {
				name:"peter chon",
				role:"front-end developer",
				welcomeMessage:"Thank you for visiting my page.",
				pic:"https://media.licdn.com/media/p/3/000/1f8/300/266727d.jpg",
				contacts: {
					mobile:"8587614372",
					email:"peterchon@gmail.com",
					github:"peterchon",
					twitter:"petachon",
					location:"san diego, ca"
				},
				skills: ["html/css", "js", "adobe cs", "3d animation"]
			},
			work:[
				{
					"employer":"google",
					"title":"user",
					"datesWorked":"1/10 to 1/14",
					"location":"Mountain View, CA",
					"description":"used google for search"
				},
				{
					"employer":"yahoo",
					"title":"user",
					"datesWorked":"1/10 to 1/14",
					"location":"Mountain View, CA",
					"description":"used yahoo for search"
				},
				{
					"employer":"microsoft",
					"title":"user",
					"datesWorked":"1/10 to 1/14",
					"location":"Redmont, WA",
					"description":"used bing for search"
				}],	
			projects: [
				{
					project: "alpha",
					datesWorked:"1/10",
					description:"custom CSS framework",
					images:["//peterchondesign.com/alpha/img/alpha.png"]
				},
				{
					project: "beta",
					datesWorked:"1/10",
					description:"custom CSS framework",
					images:["//peterchondesign.com/alpha/img/alpha.png"]
				}
			],
			education: {
				schools:{
					"MIT": {
						location:"ma",
						degree:"na",
						major:"cs",
						datesAttended:"1/10 to 1/14",
						url:"mit.edu"
					}
				},
				onlineCourses: {
					"Udacity": {
						title:"intro to cs",
						datesAttended:"8/10",
						url:"udacity.com"				
					}
				}
			}
		}],
		contactData = [HTMLmobile, HTMLemail, HTMLtwitter, HTMLgithub, HTMLlocation],
		myContactData = [me[0].bio.contacts.mobile, me[0].bio.contacts.email, me[0].bio.contacts.twitter, me[0].bio.contacts.github, me[0].bio.contacts.location],
		projData = [HTMLprojectTitle, HTMLprojectDates, HTMLprojectDescription, HTMLprojectImage],	
		replaceDefaultData = function(el, replaceWith, parentDom, placement){
			el = el.replace(/%data%/, replaceWith);
			if(!placement){
				$(parentDom).append(el);
			} else {
				$(parentDom).prepend(el);				
			}
		},
		createHeader = function(pd){
			replaceDefaultData(HTMLheaderRole, me[0].bio.role, pd, 1);			
			replaceDefaultData(HTMLheaderName, me[0].bio.name, pd, 1);
 		},
 		createContact = function(pd){
			$.each(contactData, function(i){
				replaceDefaultData(contactData[i], myContactData[i], pd);
			});
			replaceDefaultData(HTMLbioPic, me[0].bio.pic, pd);
			replaceDefaultData(HTMLheaderName, me[0].bio.welcomeMessage, pd);
			$(pd).append(HTMLskillsStart);
			$.each(me[0].bio.skills, function(i){
				replaceDefaultData(HTMLskills, me[0].bio.skills[i], '#skills');
			});
 		},
 		createWorkExperience = function(pd){
	 		var	employerData = [HTMLworkEmployer, HTMLworkTitle, HTMLworkDates, HTMLworkLocation, HTMLworkDescription];
 			for(var i=0,max=me[0].work.length;i<max;i++){
	 			$(pd).append(HTMLworkStart);
	 			var that = $('.work-entry'),
	 					myWorkData = '',
	 					works = me[0].work[i],
 						myData = [works.employer, works.title, works.datesWorked, works.location, works.description];
	 			for(var ia=0,max=employerData.length;ia<max;ia++){
	 				myWorkData += employerData[ia].replace(/%data%/, myData[ia]);
	 			}
 				$(that[i]).append(myWorkData);
	 			myWorkData = '';
 			}
 		},
 		createProjects = function(pd){
 			for(var i=0,max=me[0].projects.length;i<max;i++){
	 			$(pd).append(HTMLprojectStart);
	 			var that = $('.project-entry'),
	 					myProjData = '',
 						myData = [me[0].projects[i].project, me[0].projects[i].datesWorked, me[0].projects[i].description, me[0].projects[i].images];
	 			for(var ia=0,max=projData.length;ia<max;ia++){
	 				myProjData += projData[ia].replace(/%data%/, myData[ia]);
	 			}
 				$(that[i]).append(myProjData);
	 			myProjData = '';
 			}
 		},
 		createEducation = function(pd){
	 		
 		};

createHeader('#header');
createContact('#topContacts');
createWorkExperience('#workExperience');
//createProjects('#projects');

/*

var HTMLworkStart = "<div class='work-entry'></div>";
var HTMLworkEmployer = "<a href='#'>%data%";
var HTMLworkTitle = " - %data%</a>";
var HTMLworkDates = "<div class='date-text'>%data%</div>";
var HTMLworkLocation = "<div class='location-text'>%data%</div>";
var HTMLworkDescription = "<p><br>%data%</p>";

var HTMLprojectStart = "<div class='project-entry'></div>";
var HTMLprojectTitle = "<a href='#'>%data%</a>";
var HTMLprojectDates = "<div class='date-text'>%data%</div>";
var HTMLprojectDescription = "<p><br>%data%</p>";
var HTMLprojectImage = "<img src='%data%'>";

var HTMLschoolStart = "<div class='education-entry'></div>";
var HTMLschoolName = "<a href='#'>%data%";
var HTMLschoolDegree = " -- %data%</a>";
var HTMLschoolDates = "<div class='date-text'>%data%</div>";
var HTMLschoolLocation = "<div class='location-text'>%data%</div>";
var HTMLschoolMajor = "<em><br>Major: %data%</em>"

var HTMLonlineClasses = "<h3>Online Classes</h3>";
var HTMLonlineTitle = "<a href='#'>%data%";
var HTMLonlineSchool = " - %data%</a>";
var HTMLonlineDates = "<div class='date-text'>%data%</div>";
var HTMLonlineURL = "<br><a href='#'>%data%</a>";

var internationalizeButton = "<button>Internationalize</button>";
var googleMap = "<div id='map'></div>";
*/