
//$("#main").append("Sahil Babbar");

//var awesomeThoughts = "AwesomeThoughts";
//var funThoughts = awesomeThoughts.replace("Awesome", "Fun");
//console.log(funThoughts);
////$("#main").append(funThoughts);
//
//var name = "Sahil Babbar"
//var role = "UI/UX Developer";
//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);
//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);
//
//var bio = {
//    "name": "Sahil Babbar",
//    "role": "UI/UX Developer",
//    "contactInfo": "sahilbabbar@live.com",
//    "picURL": "images/img-1.jpeg",
//    "welcomeMessage": "Full of Grace & Happiness",
//    "skills": "JS"
//}
//
//var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
//var formattedContactInfo = HTMLcontactGeneric.replace('%contact%', bio.contactInfo);
//var formattedPicture = HTMLbioPic.replace('%data%', bio.picURL);
//$("#main").append(formattedMessage);
//$("#main").append(formattedContactInfo);
//$("#main").append(formattedPicture);
//
//var work = {}
//work.city = "New Delhi";
//work.workplace = "Ericsson";
//
//var education = {}
//education["city"] = "New Delhi";
//education["schoolName"] = "Oxford Sr. Sec. School";
//
//education = {
//    "adf": "adf",
//    "asdfadsf": "asdfasdf"
//}

var work = {
    jobs: [
        {
            "title": "Intern",
            "employer": "Ericsson",
            "dates": "1 Month",
            "location": "New Delhi",
            "description": "Working with JS, LESS, HTML and more."
        },
        {
            "title": "Assistant Manager",
            "employer": "Systematic System Solutions",
            "dates": "1 Year",
            "description": "Lead UI/UX Unit, Software Engineer"
        }
    ]

};

var projects = {
    'projects': [
        {
            "title": "Job Management System",
            "dates": "Jan'15 - Jun'15",
            "description": "Build on J2EE, Bootstrap Material, MySQL"
        }
    ],
    'images': [
        {
            "jmsImage": "images/img-1.jpeg"
        }
    ]
};

var bio = {
    'name': 'Sahil Babbar',
    'role': 'UI/UX Developer',
    'welcomeMessage': 'Full of Grace & Happiness',
    'contacts': {
        'email': 'sahilbabbar@live.com',
        'mobile': '9999 88 5060',
        'github': 'sahilbabbar',
        'twitter': '@Sahil_Babbar_',
        'location': 'New Delhi, India'
    },
    'skills': [
        'Wanna be Programmer',
        'Software Engineer',
        'System Admin',
        'Security Admin'
    ],
    'bioPic': 'images/img-1.jpeg'
};

var education = {
    'schools': [
        {
            'name': 'Oxford Sr. Sec. School',
            'location': 'West Delhi, New Delhi',
            'degree': 'Higher Secondary',
            'majors': 'Science',
            'dates': '2005-2013',
            'url': 'www.oxfordschoolvp.com'
        },
        {
            'name': 'IIIT-Delhi',
            'location': 'South Delhi, New Delhi',
            'degree': 'B.Tech',
            'majors': 'Computer Science Engineering',
            'dates': '2013-2017',
            'url': 'www.iiitd.ac.in'
        }
    ],
    'onlineCourses': [
        {
            'title': 'JS: For Beginners',
            'school': 'Udacity',
            'dates': 'Feb\'15',
            'url': 'www.udacity.com'
        },
        {
            'title': 'Building RESTful APIs',
            'school': 'Udacity',
            'dates': 'Feb\'15',
            'url': 'www.udacity.com'
        }
    ]
}