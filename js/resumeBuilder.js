var p2 = {
		data: /%data%/,
		doms: [
			$('#header'), 
			$('#topContacts'), 
			$('#workExperience'), 
			$('#projects'), 
			$('#education'), 
			$('#skillsChart'), 
			$('#mapDiv'), 
			$('#footerContacts')],
		contactData: [HTMLmobile, HTMLemail, HTMLtwitter, HTMLgithub, HTMLlocation],
		workData: [HTMLworkEmployer, HTMLworkTitle, HTMLworkDates, HTMLworkLocation, HTMLworkDescription],
		projData: [HTMLprojectTitle, HTMLprojectDates, HTMLprojectDescription, HTMLprojectImage],
		schoolData: [HTMLschoolName, HTMLschoolDegree, HTMLschoolDates, HTMLschoolLocation, HTMLschoolMajor],
		onlineSchoolData: [HTMLonlineTitle, HTMLonlineSchool, HTMLonlineDates, HTMLonlineURL],
		addEntry: function(obj, addto, addElem, addElemClass, addData, isOnline) {
				for(var i=0, max=obj.length; i<max; i++){
					addto.append(addElem);
					var ph = $(addElemClass), el = '', elem = '', count = 0;
					for(w in obj[i]){
						if(typeof(obj[i][w]) !== 'string'){
							for(var ib=0, max=obj[i][w].length; ib<max; ib++){
								el += addData[count].replace(p2.data, obj[i][w][ib]);																						
							}
						} else {
							el += addData[count].replace(p2.data, obj[i][w]);														
						}
						count++;
					}
					elem = !isOnline ? $(ph[i]) : $(ph[i + education.schools.length]);
					elem.append(el);
				}
			}	,
		replaceJsonData: function(key, x){
			var elem = "", i = 0;
			for(val in key){
				elem += key[val].replace(p2.data, x[i]);
				i++;
			}
			return elem;
		}	
	},
	work = {
		jobs:  [
			{
				'employer': 'Google',
				'title': 'Researcher',
				'location': 'Mountain View, CA',
				'dates worked': '01/14 ~ Current',
				'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
			},
			{
				'employer': 'Apple',
				'title': 'Researcher',
				'location': 'Cupertino, CA',
				'dates worked': '01/13 ~ 12/13',
				'description': 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
			},
			{
				'employer': 'Microsoft',
				'title': 'Researcher',
				'location': 'Redmond, WA',
				'dates worked': '01/12 ~ 12/12',
				'description': 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
			}
	]},
	projects = {
		project:  [
			{
				'title': 'nliven',
				'dates worked':  '1/13 - current',
				'description': 'A custom CSS framework using SASS/Compass',
				'images': [
					'https://m1.behance.net/rendition/modules/83868489/disp/af52a4f8d6f715a84c01eaf0ce0d5b60.jpg', 
					'https://m1.behance.net/rendition/modules/83868491/disp/7e88e5fd6be4b14fc4f795ba08829e55.jpg', 
					'https://m1.behance.net/rendition/modules/83868493/disp/251a30875956084fc947507979b6960f.jpg'
				]
			},
			{
				'title': 'Logos',
				'dates worked':  '1/12 - 12/12',
				'description': 'A custom CSS framework using SASS/Compass',
				'images': [
					'https://m1.behance.net/rendition/modules/117699543/disp/c6aa64d7c4b32674ad55b6ed3a6f0431.jpg', 
					'https://m1.behance.net/rendition/modules/117699539/disp/a168bf7a3124583211759a19d6c13117.jpg', 
					'https://m1.behance.net/rendition/modules/117699537/disp/82687ca6cc1e8e5a4b1ec458dcfa48f4.jpg'
				]
			}
	]},
	education = {
		schools: [
			{
				'name': 'Massachusetts Institute of Technology',
				'degree': 'MS',
				'dates attended': '09/12 ~ 06/14',
				'location': 'Cambridge, MA',
				'majors': 'Computer Science',
				//'url': 'http://web.mit.edu'
			},
			{
				'name': 'California Institute of Technology',
				'degree': 'BS',
				'dates attended': '09/10 ~ 06/12',
				'location': 'Pasadena, CA',
				'majors': 'Computer Science',
				//'url': 'http://caltech.edu'
			},
		],
		onlineCourses: [
			{
				'title': 'Introduction to CS',
				'school': 'Udacity',
				'dates attended': '8/13-10/13',
				'url': 'http://www.udacity.com'
			}		
	]},
	bio = {
		name:"Peter Chon",
		role:"Front-End Developer",
		welcomeMessage:"Thank you for visiting my page.",
		pic:"https://media.licdn.com/media/p/3/000/1f8/300/266727d.jpg",
		contacts: {
			mobile:"858.761.4372",
			email:"peterchon@gmail.com",
			twitter:"petachon",
			github:"peterchon",
			location:"San Diego, CA"
		},
		skills: ["HTML/CSS", "JavaScript", "PHP", "Python", "Ruby", "Animation"],
		replaceArrayData: function(key){
			var skills = "";
			for(i=0, max=key.length; i<max; i++){
				skills += HTMLskills.replace(p2.data, key[i]);
			}
			return skills;
		},
		myContactData: function(key, myVal){
			var myElem = [];
			for(val in myVal){
				myElem.push(myVal[val]);
			}
			var el = p2.replaceJsonData(key, myElem);
			return el;
		}	
	},
	aboutme = {
		myName: HTMLheaderName.replace(p2.data, bio.name),
		myRole: HTMLheaderRole.replace(p2.data, bio.role),
		myPic: HTMLbioPic.replace(p2.data, bio.pic),
		myWelcomeMsg: HTMLWelcomeMsg.replace(p2.data, bio.welcomeMessage)		
	};
	
	function inName(){
    var inn = ''; 
    n = $('h1').html().trim().split(/\s/);
    for(var i=0,max=n.length;i<max;i++){
      inn += n[(max - 1) - i];
      if(i < max - 1){
        inn += " ";
      }
    }
    return inn;
  };
		
	p2.doms[0].prepend(aboutme.myName, aboutme.myRole);
	p2.doms[0].prepend(internationalizeButton);
	p2.doms[0].append(aboutme.myPic, aboutme.myWelcomeMsg, HTMLskillsStart);
	p2.doms[1].append(bio.myContactData(p2.contactData, bio.contacts));
	$('#skills').append(bio.replaceArrayData(bio.skills));
	p2.addEntry(work.jobs, p2.doms[2], HTMLworkStart, '.work-entry', p2.workData);
	p2.addEntry(projects.project, p2.doms[3], HTMLprojectStart, '.project-entry', p2.projData);
	p2.addEntry(education.schools, p2.doms[4], HTMLschoolStart, '.education-entry', p2.schoolData);
	p2.addEntry(education.onlineCourses, p2.doms[4], HTMLschoolStart, '.education-entry', p2.onlineSchoolData, true);
	p2.doms[6].append(googleMap);
	p2.doms[7].append(bio.myContactData(p2.contactData, bio.contacts));