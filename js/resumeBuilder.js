var bio = {
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
		work = {
			google: {
				title:"user",
				datesWorked:"1/10 to 1/14",
				location:"Mountain View, CA",
				description:"used google for search"
			},
			yahoo: {
				title:"user",
				datesWorked:"1/10 to 1/14",
				location:"Mountain View, CA",
				description:"used yahoo for search"
			},
			microsoft: {
				title:"user",
				datesWorked:"1/10 to 1/14",
				location:"Redmont, WA",
				description:"used bing for search"
			}
		},
		projects = {
			"alpha": {
				datesWorked:"1/10",
				description:"custom CSS framework",
				images:["//peterchondesign.com/alpha/img/alpha.png"]
			},
			"beta": {
				datesWorked:"1/10",
				description:"custom CSS framework",
				images:["//peterchondesign.com/alpha/img/alpha.png"]
			}
		},
		education = {
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
		},
		contactData = [HTMLmobile, HTMLemail, HTMLtwitter, HTMLgithub, HTMLlocation],
		workData = [HTMLworkTitle, HTMLworkDates, HTMLworkLocation, HTMLworkDescription],
		projData = [HTMLprojectTitle, HTMLprojectDates, HTMLprojectDescription, HTMLprojectImage],
		schoolData = [HTMLschoolName, HTMLschoolDegree, HTMLschoolDates, HTMLschoolLocation, HTMLschoolMajor],
		onlineSchoolData = [HTMLonlineTitle, HTMLonlineSchool, HTMLonlineDates, HTMLonlineURL],
		proj = {
			header: $('#header'),
			topContact: $('#topContacts'),
			work: $('#workExperience'),
			proj:$('#projects'),
			edu:$('#education'),
			skillChart:$('#skillsChart'),
			gMap:$('#mapDiv')
		},
		myName = HTMLheaderName.replace(/%data%/, bio.name),
		myRole = HTMLheaderRole.replace(/%data%/, bio.role),
		myPic = HTMLbioPic.replace(/%data%/, bio.pic),
		myWelcomeMsg = HTMLWelcomeMsg.replace(/%data%/, bio.welcomeMessage),
		replaceJsonData = function(key, x){
			var elem = "", i = 0;
			for(val in key){
				elem += key[val].replace(/%data%/, x[i]);
				i++;
			}
			return elem;
		},
		replaceArrayData = function(key){
			var skills = "";
			for(i=0, max=key.length; i<max; i++){
				skills += HTMLskills.replace(/%data%/, key[i]);
			}
			return skills;
		},
		myContactData = function(key, myVal){
			var myElem = [];
			for(val in myVal){
				myElem.push(myVal[val]);
			}
			var el = replaceJsonData(key, myElem);
			return el;
		},
		myWorkData = function(){
			var w = "";
			for(employer in work){
				var we = "<div class='work-entry'><a href='#'>" + employer , i = 0;
				for(detail in work[employer]){
					var detail = work[employer][detail];
					we += workData[i].replace(/%data%/, detail);
					i++;
				}
				we += "</div>";
				w += we;
			}
			return w;
		};

proj.topContact.append(myContactData(contactData, bio.contacts));
proj.header.prepend(myName, myRole);
proj.header.append(myPic, myWelcomeMsg, HTMLskillsStart);
$('#skills').append(replaceArrayData(bio.skills));
proj.work.append(myWorkData());



/*
var HTMLskillsStart = "<h3 id='skillsH3'>Skills at a Glance:</h3><ul id='skills' class='flex-box'></ul>";
var HTMLskills = "<li class='flex-item'><span class='white-text'>%data%</span></li>";
var HTMLworkStart = "<div class='work-entry'></div>";
var HTMLprojectStart = "<div class='project-entry'></div>";
var HTMLschoolStart = "<div class='education-entry'></div>";
var HTMLonlineClasses = "<h3>Online Classes</h3>";
*/