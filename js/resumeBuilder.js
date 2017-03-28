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
        $("#header").append(formattedName);

        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").append(formattedRole);

    }
};

bio.display();