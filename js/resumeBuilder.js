/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var work = {
   "jobs": [
     {
       "employer": "Giant",
       "title": "Web Developer",
       "location": "New York",
       "dates": "2000",
       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a libero nec nulla pulvinar elementum vel ut dolor. Donec semper volutpat malesuada. Aliquam consequat dolor sit amet iaculis sollicitudin. "
     },
     {
       "employer": "Wee",
       "title": "Frontend Developer",
       "location": "London",
       "dates": "2007",
       "description": "Ut porttitor eget ex sed pellentesque. Mauris fringilla arcu at facilisis ullamcorper. Donec aliquam augue sed mattis vehicula. Aenean aliquam sapien id quam varius, ac sollicitudin turpis hendrerit."
     }
   ]
 }

 var projects = {
   "projects": [
     {
       "title": "Earth to Sky",
       "dates": "2004",
       "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
       "images": []
     },
     {
       "title": "Go to Mars",
       "dates": "2030",
       "description": "Donec in purus a risus aliquet posuere vel quis tortor. Vivamus a dolor id eros molestie vehicula. Vivamus imperdiet, leo a tempor sagittis, libero mauris imperdiet ante, quis luctus ex sem quis urna. ",
       "images": []
     }
   ]
 }

 var bio = {
   "name": "aaa",
   "role": "Developer",
   "welcomeMessage": "Hello Hey Hi",
   "biopic": "images/fry.jpg",
   "contacts":
     {
       "mobile": "402-8372-8374",
       "email": "aaa@bbb.com",
       "github": "aaabbb",
       "twitter": "@girlisnoone",
       "location": "Seven Kingdom"
     },
   "skills": ["Eat", "Code", "Sleep", "Coffee"]
 }

 var education = {
   "schools": [
     {
       "name": "lacus feugiat",
       "location": "Nunc",
       "degree": "quis",
       "dates": "1999",
       "url": "",
       "majors": ["Great", "Good", "Fine"]
     },
     {
       "name": "suscipit in",
       "location": "id sem",
       "degree": "Vestibulum",
       "dates": "2004",
       "url": "",
       "majors": ["Cool", "Ok", "Ahh"]
     }
   ],
   "onlineCourses": [
     {
       "title": "Neque porro",
       "school": "DangDangDang",
       "dates": "2006",
       "url": ""
     },
     {
       "title": "est qui dolorem",
       "school": "DingDingDing",
       "dates": "2007",
       "url": ""
     }
   ]
 }

 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
 var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
 var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
 $("#header").append(formattedName);
 $("#header").append(formattedRole);
 $("#header").append(formattedbioPic);
 $("#header").append(formattedwelcomeMsg);

 if(bio.skills.length > 0) {
   $("#header").append(HTMLskillsStart);

   var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
   $("#skills").append(formattedSkill);
   formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
   $("#skills").append(formattedSkill);
   formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
   $("#skills").append(formattedSkill);
   formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
   $("#skills").append(formattedSkill);
 }

 work.jobs.forEach(function(job) {
   $("#workExperience").append(HTMLworkStart);

   var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
   var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
   var formattedEmployerTitle = formattedEmployer + formattedTitle;
   $(".work-entry:last").append(formattedEmployerTitle);

   var formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
   $(".work-entry:last").append(formattedworkDates);

   var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
   $(".work-entry:last").append(formattedworkLocation);

   var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
   $(".work-entry:last").append(formattedworkDescription);
 })
