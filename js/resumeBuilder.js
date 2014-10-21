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
				'employer': 'Illumina',
				'title': 'Front-End Developer',
				'location': 'San Diego, CA',
				'dates worked': '07/14 ~ Current',
				'description': 'Design and develop corporate websites for global marketing.'
			},
			{
				'employer': 'Humana',
				'title': 'Front-End Developer',
				'location': 'San Diego, CA',
				'dates worked': '06/13 ~ 07/14',
				'description': 'Design and develop web portals and web applications for healthcare providers.'
			},
			{
				'employer': 'Mellmo, Inc',
				'title': 'Front-End Developer',
				'location': 'San Diego, CA',
				'dates worked': '02/13 ~ 06/13',
				'description': 'Design and develop Wordpress website for global marketing.'
			},
			{
				'employer': 'Anonymizer, Inc',
				'title': 'Front-End Developer',
				'location': 'San Diego, CA',
				'dates worked': '12/09 ~ 02/13',
				'description': 'Design and develop corporate websites and web applications for government agencies.'
			},
			{
				'employer': 'University of California, San Diego',
				'title': 'Front-End Developer',
				'location': 'San Diego, CA',
				'dates worked': '06/09 ~ 12/09',
				'description': 'Design and develop websites and web applications for UCSD.'
			}
	]},
	projects = {
		project:  [
			{
				'title': 'Alpha',
				'dates worked':  '1/13 - current',
				'description': 'A custom CSS framework using SASS/Compass',
				'images': [
					'http://peterchondesign.com/alpha/img/alpha.png', 
					'http://peterchondesign.com/alpha/img/alpha.png', 
					'http://peterchondesign.com/alpha/img/alpha.png'
				]
			},
			{
				'title': 'Beta',
				'dates worked':  '1/12 - 12/12',
				'description': 'A custom CSS framework using SASS/Compass',
				'images': [
					'http://peterchondesign.com/alpha/img/alpha.png', 
					'http://peterchondesign.com/alpha/img/alpha.png', 
					'http://peterchondesign.com/alpha/img/alpha.png'
				]
			}
	]},
	education = {
		schools: [
			{
				'name': 'University of California, San Diego | Digital Art Center',
				'degree': 'Certificate of completion',
				'dates attended': '9/07 - 6/08',
				'location': 'San Diego, CA',
				'majors': 'Graphic & Web Design',
				//'url': 'http://dac.ucsd.edu'
			},
			{
				'name': 'University of California, San Diego | Digital Art Center',
				'degree': 'Certificate of completion',
				'dates attended': '9/08 - 6/09',
				'location': 'San Diego, CA',
				'majors': 'Multimedia Production',
				//'url': 'http://dac.ucsd.edu'
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
		skills: ["HTML/CSS", "JavaScript", "Adobe CS", "3D Animation", "Photography"],
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
