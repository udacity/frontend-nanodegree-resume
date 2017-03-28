/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "John Doe",
    "role": "Web Developer",
    "contacts": {
        "mobile": "917-555-5555",
        "email": "johndoe@example.com",
        "github": "johndoe",
        "twitter": "@johndoe",
        "location": "New York"
    },
    "welcomeMessage": "Welcome to my online resume.",
    "skills": [
        "HTML", "CSS", "Javascript", "jQuery"
    ],
    "biopic": "images/me",
    display: function () {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

    }
};



var education = {
    "schools": [
        {
            "name": "ph",
            "location": "ph",
            "degree": "ph",
            "majors": "ph",
            "dates": "xxxx-xxxx",
            "url": "http://www.example.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "ph",
            "school": "ph",
            "dates": "xxxx-xxxx",
            "url": "http://www.example.com"
        }
    ],
    display: function () {

    }


};

var work = {
    "jobs": [
        {
            "employer": "placeholder",
            "title": "placeholder",
            "location": "placeholder",
            "dates": "xxxx-xxxx",
            "description": "placeholder"
        }
    ],
    display: function () {
        
    }
};

var projects = {
    "projects": [
        {
            "title": "Sample Project 1",
            "dates": "xxxx-xxxx",
            "description": "in progress",
            "images": [
                "https://www.example.com/p1-1",
                "https://www.example.com/p1-2"
            ]
        }
    ],
    display: function () {
        
    }
};

bio.display();