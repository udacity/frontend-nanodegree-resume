/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 // Building JSON 

var skills =
["programming", "teaching", "Android Development", "Web Development"];

var bio = {
  "name" : "Ahmed Saleh",
  "pictureURL" : "images/fry.jpg",
  "role" : "Software Engineer",
  "welcome-message": "welcome to My Resume",
  "contact" : {
    "mobile" : "0591188897",
    "email" : "ahmadssb",
    "location" : "Jeddah"
},
  "skills" : skills
};

var education = {
    "schools": [
        {
            "name": "al-falah",
            "Major": "since",
            "date": 2007
        },
        {
            "name": "MMU",
            "Major": "Software Engineer",
            "date": 2015
        }
    ],
    "online-courses": [
        {
            "name": "Udacity",
            "Major": "Front-End",
            "date": 2015
        },
        {
            "name": "Coursera",
            "Major": "Design Pattrens",
            "date": 2013
        }
    ]
};

var experinceWork = {
    "jobs": [
        {
            "company_name": "Babader",
            "company_link": "www.babadeer.com",
            "company_location" :"Saudi Arabia, Jeddah, Kilo 14",
            "start_job": 2000,
            "end_job": 2007,
            "role": "IT intern",
            "job_description": "job_description job_description job_description job_description job_description" },
        {
            "company_name": "Top Line",
            "company_link": "www.tl4s.com",
            "company_location" :"Saudi Arabia, Jeddah, Khalid Bin Al-waleed",
            "start_job": 2000,
            "end_job": 2007,
            "role": "Script Developer",
            "job_description" :"job_description job_description job_description job_description job_description"
        },
        {
            "company_name": "TapWay",
            "company_link": "www.TapWay.com",
            "company_location" :"Malaysis, Dataran Mentari, Petaling Jaya",
            "start": 2000,
            "end": 2007,
            "role": "web/app Developer ",
            "job_description" :"job_description job_description job_description job_description job_description"
        }
    ]
};

var projects = {
    "projects": [
        {
            "projectName": "Let's Learn Arabic",
            "projectDescription": "Teach Arabic",
            "projectDate": "Sep 2014",
            "projectLink": "http://www.ahmadssb.com",
            "projectPic": "http://www.ahmadssb.com"
        },
        {
            "projectName": "Ozbah",
            "projectDescription": "Ozbah Discription",
            "projectDate": "May 2015",
            "projectLink": "http://www.ahmadssb.com",
            "projectPic": "http://www.ahmadssb.com"
        },
        {
            "projectName": "One KSA",
            "projectDescription": "One App for every mall in Saudi Arabia",
            "projectDate": "Jan 2015",
            "projectLink": "http://www.ahmadssb.com",
            "projectPic": "http://www.ahmadssb.com"
        }
    ]
};

