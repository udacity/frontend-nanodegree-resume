var work={jobs:[{employer:"Tencent",title:"Product Manager",location:"Shenzhen",dates:"2014-8-1~Pesent",description:"As Product Manager, build the products for teachers and students to improve the efficiency and user-experience of teaching as well as studying.Builded the client for teacher’s teaching ,management background  for school administer managing, tools for student studying."}]},projects={projects:[{title:"Tencent Classroom Question Library",dates:"2016-11-12",description:"As the main person in charge of building the module, covering the Web and APP.Responsible for communication with the organization, the operational side of the collection needs, planning functions and versions, to promote the function of the design and development, and according to user feedback and data to optimize the function.The project won the company's internal “Lightning” award of department .",images:[]},{title:"Tencent Classroom Live Client",dates:"2015-1~2015-12",description:"As the main person in charge of building Tencent Classroom live capabilities, including teachers and students tools, covering the PC client and Web side.Responsible for the development of new functions based on feedback and optimization of existing capacity, with the Basic Support group to enhance performance indicators, including ‘million classroom project team’ has won the company's internal “Lightning” award of department . ",images:[]},{title:"Tencent Classroom Mixed-course System",dates:"2016-11-12",description:'Helped build the mixed-course system, which is responsible for exercises to remind the module construction.With development and design together for a period of 3 months of closed development, the function released as scheduled, "Mixed-course Project Team" won the company\'s internal “Lightning Award” of department .',images:[]}]},bio={name:"Mimotri mo",role:"Front-End Engineer",welcomeMessage:"Hello",biopic:"/images/markersman.png",contacts:{mobile:"18639xxxxxx",email:"XXXXXXX@gmail.com",github:"Mimotri",location:"Shenzhen"},skills:["Product Management","UI Design","HTML/CSS/JavaScript","Python"]},education={schools:[{name:"Xi'an Jiaotong Univercity",location:"Xi'an",degree:"Bachelor",dates:"2010~2014",url:"http://www.xjtu.edu.cn/",major:"Nuclear Engineering",majors:["Seconnd major!","Third major!"]}],onlineCourses:[{title:"Front-End Web Developer Nanodegree",school:"Udacity",dates:"2016-11~Present",url:"https://cn.udacity.com/course/front-end-web-developer-nanodegree--nd001"}]};bio.display=function(){function e(e){var a=e.split(" "),t=a[0].slice(0,1).toUpperCase()+a[0].slice(1).toLowerCase(),n=a[1].toUpperCase(),o=t+" "+n;return o}var a='<h1 id="name">%data%</h1>',t="<span>%data%</span><hr>",n='<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>',o='<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>',i='<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>',s='<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>',r='<img src="%data%" class="biopic">',d='<span class="welcome-message">%data%</span>',l='<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>',c='<li class="flex-item"><span class="white-text">%data%</span></li>',p=a.replace("%data%",e(bio.name)),m=t.replace("%data%",bio.role);$("#header").prepend(p,m);var h=n.replace("%data%",bio.contacts.mobile),u=o.replace("%data%",bio.contacts.email),g=i.replace("%data%",bio.contacts.github),f=s.replace("%data%",bio.contacts.location);$("#topContacts").append(h,u,g,f),$("#footerContacts").append(h,u,g,f);var v=d.replace("%data%",bio.welcomeMessage),b=r.replace("%data%",bio.biopic);$("#header").append(b,v);var y="";if(bio.skills.length>0){$("#header").append(l);for(var x=0;x<bio.skills.length;x++)y=c.replace("%data%",bio.skills[x]),$("#skills").append(y)}},work.display=function(){function e(e){$("#workExperience").append(a);var r=t.replace("%data%",e.employer),d=n.replace("%data%",e.title),l=r+d;$(".work-entry:last").append(l);var c=o.replace("%data%",e.dates);$(".work-entry:last").append(c);var p=i.replace("%data%",e.location);$(".work-entry:last").append(p);var m=s.replace("%data%",e.description);$(".work-entry:last").append(m)}var a='<div class="work-entry"></div>',t='<a href="#">%data%',n=" - %data%</a>",o='<div class="date-text">%data%</div>',i='<div class="location-text">%data%</div>',s="<p><br>%data%</p>";work.jobs.forEach(e)},projects.display=function(){function e(e){$("#projects").append(a);var s=t.replace("%data%",e.title);$(".project-entry:last").append(s);var r=n.replace("%data%",e.dates);$(".project-entry:last").append(r);var d=o.replace("%data%",e.description);$(".project-entry:last").append(d);var l=i.replace("%data%",e.images);$(".project-entry:last").append(l)}var a='<div class="project-entry"></div>',t='<a href="#">%data%</a>',n='<div class="date-text">%data%</div>',o="<p><br>%data%</p>",i='<img src="%data%">';console.log("display!"),projects.projects.forEach(e)},education.display=function(){function e(e){if($("#education").append(t),d=n.replace('#">%data%',e.url+'">'+e.name),l=o.replace("%data%",e.degree),fomattedDates=i.replace("%data%",e.dates),fomattedLocation=s.replace("%data%",e.location),fomattedMajor=r.replace("%data%",e.major),$(".education-entry").append(d,l,fomattedDates,fomattedLocation,fomattedMajor),e.majors.length>0)for(var a=0;a<e.majors.length;a++)fomattedMajors=r.replace("%data%",e.majors[a]),$(".education-entry:last").append(fomattedMajors)}function a(e){b=u.replace('#">%data%',e.url+'">'+e.title),y=g.replace("%data%",e.school),x=f.replace("%data%",e.dates),w=v.replace('#">%data%',e.url+'">'+e.url),$(".education-entry:last").append(b+y,x,w)}var t='<div class="education-entry"></div>',n='<a href="#">%data%',o=" -- %data%</a>",i='<div class="date-text">%data%</div>',s='<div class="location-text">%data%</div>',r="<em><br>Major: %data%</em>",d="",l="",c="",p="",m="",h="<h3>Online Classes</h3>",u='<a href="#">%data%',g=" - %data%</a>",f='<div class="date-text">%data%</div>',v='<br><a href="#">%data%</a>',b="",y="",x="",w="";education.schools.forEach(e),education.onlineCourses.length>0&&($("#education").append(h),$("#education").append(t),education.onlineCourses.forEach(a))},projects.display(),work.display(),bio.display(),education.display(),$("#mapDiv").append(googleMap);