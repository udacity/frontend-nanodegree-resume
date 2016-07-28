// Factory Functions //
/**
* @description Represents a presential education
* @param {string} name - Name of the school
* @param {string} location - City of the school
* @param {string} degree - Official name for the degree
* @param {string} majors - Areas of knowledge of the degree
* @param {string} date - Year when the degree was completed
* @param {string} url - Website of the school
* @return {object} School object -- > Used at var education
*/
function school(name, location, degree, majors, date, url) {
    return {
        name: name,
        location: location,
        degree: degree,
        majors: majors,
        date: date,
        url: url
    };
}

/**
* @description Represents non presential education
* @param {string} title - Course name
* @param {string} school - Name of the school
* @param {string} date - Year when the course was completed
* @param {string} url - Website of the course
* @return {object} Course object -- > Used at var education
*/
function onlineCourse(title, school, date, url) {
    return {
        title: title,
        school: school,
        date: date,
        url: url
    };
}

/**
* @description Represents a job experience
* @param {string} employer - Name of the company
* @param {string} title - Role title
* @param {string} location - City of the office
* @param {string} dates - Start and end date with month and year
* @param {string} description - Explanation of the experience
* @param {string} url - Website of the company
* @return {object} Job object -- > Used at var work

*/
function job(employer, title, location, dates, description, url) {
    return {
        employer: employer,
        title: title,
        location: location,
        dates: dates,
        description: description,
        url: url
    };
}

/**
* @description Represents a work project
* @param {string} title - Name of the project
* @param {string} dates - Start and end date with month and year
* @param {string} description - Explanation of the project
* @param {array} images - Image gallery of the project
* @param {value} category - Reference to the skills object (see var bio)
* @param {value} company - Reference to the employer object (see var work)
* @return {object} Project object -- > Used at var projects
*/
function project(title, dates, description, images, category, company) {
    return {
        title: title,
        dates: dates,
        description: description,
        images: images,
        category: category,
        company: company
    };
}

/**
* @description Utility function to add a DOM Element from a template variable
* @param {value} property - reference to an object property
* @param {value} tag - reference to the template variable
* @param {string} selector - reference to the DOM Element
* @return {Jquery method} Append
*/
function addOne(property, tag, selector) {
    var formatted = tag.replace("%data%", property);
    if (property.length > 0) {
        $(selector).append(formatted);
    }
}

/**
* @description Utility function to add a DOM Element from a template variable and set the attribute value
* @param {value} property - reference to an object property
* @param {value} tag - reference to the template variable
* @param {string} selector - reference to the DOM Element
* @return {Jquery method} Append
*/
function addLink(property, tag, selector) {
    if (property.length > 0) {
        $(selector).append(tag);
        if (property.indexOf("@") !== -1) {
            $("li a:last").attr({
                "href": 'mailto:' + property,
                "alt": tag,
                "target": "_blank"
            });
        } else {
            $("li a:last").attr({
                "href": property,
                "alt": tag,
                "target": "_blank"
            });
        }
    }
}

/**
* @description Utility function to add a DOM Element from two template variables
* @param {value} propertyOne - reference to an object property (First Element)
* @param {value} tagOne - reference to the template variable (First Element)
* @param {value} propertyTwo - reference to an object property (Second Element)
* @param {value} tagTwo - reference to the template variable (Second Element)
* @param {string} selector - reference to the DOM Element
* @return {Jquery method} Append
*/
function addTwo(propertyOne, tagOne, propertyTwo, tagTwo, selector) {
    var firstItem = tagOne.replace("%data%", propertyOne);
    var secondItem = tagTwo.replace("%data%", propertyTwo);
    if (propertyOne.length > 0 && propertyTwo.length > 0) {
        $(selector).append(firstItem + secondItem);
    }
}

/**
* @description Utility function to add a DOM Element from two template variables and set the attribute value
* @param {value} propertyOne - reference to an object property (First Element)
* @param {string} selectorOne- reference to the first DOM Element
* @param {value} propertyTwo - reference to an object property (Second Element)
* @param {string} selector - reference to the second DOM Element
* @return {Jquery method} Append
*/
function addTwoWithLink(propertyOne, selectorOne, propertyTwo, selectorTwo) {
    if (propertyOne.length > 0 && propertyTwo.length > 0) {
        $(selectorOne).append(" " + "<a>" + propertyOne + "</a>");
        $(selectorTwo).attr({
            "href": propertyTwo,
            "alt": propertyOne,
            "target": "_blank"
        });
    }
}


// Data & Presentation//
var bio = {
    "name": "Pablo Picasso",
    "role": "Inventor of Cubism",
    "contacts": {
        "mobile": "",
        "email": "myname@gmail.com",
        "github": "https://github.com",
        "twitter": "https://twitter.com",
        "blog": "",
        "location": "Paris"
    },
    "welcomeMsg": "Pablo Ruiz y Picasso, also known as Pablo Picasso was a Spanish painter, sculptor, printmaker, ceramicist, stage designer, poet and playwright. Regarded as one of the greatest and most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore.",
    "skills": ["Paint", "Sculpture"],
    "bioPic": "images/profileBioPhoto.png",
    "display": function () {
      /**
      * @description Method that represents the presentation of bio's object using factory
      * functions to append DOM Elements
      */
      $("#bio-pic").append(HTMLbioPic);
        $(".bio-pic-cover").css('background-image', 'url(' + this.bioPic + ')');
        addOne(this.name, HTMLheaderName, "#bio-info");
        addOne(this.role, HTMLheaderRole, "#bio-details");
        addOne(this.contacts.location, HTMLlocation, "#bio-details");
        addOne(this.welcomeMsg, HTMLwelcomeMsg, "#bio-details");
        $("#bio-details").append(HTMLcontactGeneric);
        addOne(this.contacts.mobile, HTMLmobile, ".contact-list");
        addLink(this.contacts.email, HTMLemail, ".contact-list");
        addLink(this.contacts.github, HTMLgithub, ".contact-list");
        addLink(this.contacts.twitter, HTMLtwitter, ".contact-list");
        addLink(this.contacts.blog, HTMLblog, ".contact-list");
    }
};

var education = {
    "schools": [
        school(
            "Royal Academy of San Fernando",
            "Madrid",
            "Not finished studies",
            ["Fine arts"],
            "1924",
            "http://www.realacademiabellasartessanfernando.com/es"
        )
    ],
    "onlineCourses": [
        onlineCourse(
            "Meetups in Els 4Gats",
            "Barcelona",
            "1899",
            "https://en.wikipedia.org/wiki/Els_Quatre_Gats"
        ),
        onlineCourse(
            "Meetups in La Rotonde",
            "Paris",
            "1914",
            "https://en.wikipedia.org/wiki/Caf%C3%A9_de_la_Rotonde"
        )
    ],
    "displaySchools": function () {
      /**
      * @description Method that represents the presentation of schools' property
      * using factory functions to append DOM Elements
      */
        this.schools.forEach(function (school) {
            $("#education").append(HTMLschoolStart);
            addOne(school.degree, HTMLschoolDegree, ".education-entry:last");
            addTwoWithLink(school.name, ".education-entry:last h3:last", school.url, ".education-entry a:last");
            addOne(school.location, HTMLschoolLocation, ".education-entry:last");
            addOne(school.date, HTMLschoolDates, ".education-entry span:last");
            $(".education-entry span:last").append(HTMLschoolMajor);
            school.majors.forEach(function (field) {
                $(".education-entry em:last").append(field);
            });

        });
    },
    "displayCourses": function () {
      /**
      * @description Method that represents the presentation of onlineCourses' property
      * using factory functions to append DOM Elements
      */
        this.onlineCourses.forEach(function (course) {
            $("#education").append(HTMLschoolStart);
            addOne(course.title, HTMLschoolDegree, ".education-entry:last");
            addTwoWithLink(course.school, ".education-entry:last h3:last", course.url, ".education-entry a:last");
            addOne(course.date, HTMLonlineDates, ".education-entry:last");
        });
    },
    "display": function () {
      /**
      * @description Represent the presentation of education's object
      */
        this.displaySchools();
        this.displayCourses();
    }
};

var work = {
    "jobs": [
        job(
            "Later Works",
            "Painter and sculptor",
            "Paris",
            "Jan. 1968 - Dec. 1971",
            "Picasso’s final works were a mixture of styles, his means of expression in constant flux until the end of his life. Devoting his full energies to his work, Picasso became more daring, his works more colorful and expressive, and from 1968 to 1971 he produced a torrent of paintings and hundreds of copperplate etchings.",
            "https://en.wikipedia.org/wiki/Pablo_Picasso#Later_works"
        ),
        job(
            "World War II and beyond",
            "Painter and writer",
            "Paris",
            "Sept. 1939 - Sept. 1945",
            "During the Second World War, Picasso remained in Paris while the Germans occupied the city. Picasso’s artistic style did not fit the Nazi ideal of art, so he did not exhibit during this time. He was often harassed by the Gestapo. Retreating to his studio, he continued to paint and he took up writing as an alternative outlet.",
            "https://en.wikipedia.org/wiki/Pablo_Picasso#World_War_II_and_beyond"
        ),
        job(
            "Classicism and surrealism",
            "Painter",
            "Paris",
            "Sept. 1917 - Sept. 1930",
            "In the period following the upheaval of World War I, Picasso produced work in a neoclassical style. This “return to order” is evident in the work of many European artists in the 1920s, including André Derain, Giorgio de Chirico, Gino Severini, Jean Metzinger, the artists of the New Objectivity movement and of the Novecento Italiano movement. Picasso’s paintings and drawings from this period frequently recall the work of Raphael and Ingres.",
            "https://en.wikipedia.org/wiki/Pablo_Picasso#Classicism_and_surrealism"
        ),

        job(
            "Crystal Cubism",
            "Painter",
            "Paris",
            "Jan. 1915 - Dec. 1917",
            "Picasso began a series of paintings depicting highly geometric and minimalist Cubist objects, consisting of either a pipe, a guitar or a glass, with an occasional element of collage. These “little gems” may have been produced by Picasso in response to critics who had claimed his defection from the movement, through his experimentation with classicism within the so-called return to order following the war.",
            "https://en.wikipedia.org/wiki/Pablo_Picasso#Crystal_period"
        ),
        job(
            "Cubism",
            "Painter",
            "Paris",
            "Jan. 1909 - Dec. 1912",
            "It’s a style of painting Picasso developed with Georges Braque using monochrome brownish and neutral colors. Both artists took apart objects and “analyzed” them in terms of their shapes. Picasso and Braque’s paintings at this time share many similarities. Synthetic cubism (1912–1919) was a further development of the genre, in which cut paper fragments – often wallpaper or portions of newspaper pages – were pasted into compositions, marking the first use of collage in fine art.",
            "https://en.wikipedia.org/wiki/Pablo_Picasso#Cubism"
        ),
        job(
            "African-influenced Period",
            "Painter",
            "Paris",
            "Jan. 1907 - Dec. 1909",
            "The African-influenced Period begins with the two figures on the right in his painting, Les Demoiselles d’Avignon, which were inspired by African artefacts. Formal ideas developed during this period lead directly into the Cubist period that follows.",
            "https://en.wikipedia.org/wiki/Pablo_Picasso#African-influenced_Period"
        ),
        job(
            "Rose Period",
            "Painter",
            "Paris",
            "Jan. 1904 - Dec. 1906",
            "The Rose Period is characterized by a more cheery style with orange and pink colors, and featuring many circus people, acrobats and harlequins known in France as saltimbanques. The harlequin, a comedic character usually depicted in checkered patterned clothing, became a personal symbol for Picasso.",
            "https://en.wikipedia.org/wiki/Pablo_Picasso#Rose_Period"
        ),
        job(
            "Blue Period",
            "Painter",
            "Barcelona",
            "Jan. 1901 - July 1904",
            "In his austere use of color and sometimes doleful subject matter – prostitutes and beggars are frequent subjects – Picasso was influenced by a trip through Spain and by the suicide of his friend Carlos Casagemas. Starting in autumn of 1901 he painted several posthumous portraits of Casagemas, culminating in the gloomy allegorical painting La Vie (1903), now in the Cleveland Museum of Art.",
            "https://en.wikipedia.org/wiki/Pablo_Picasso#Blue_Period"
        )
    ],
    "display": function () {
        this.jobs.forEach(function (experience) {
          /**
          * @description Method that represents the presentation of work' object
          * using factory functions to append DOM Elements
          */
            $("#workExperience").append(HTMLworkStart);
            addOne(experience.title, HTMLworkTitle, ".work-entry:last");
            if (experience.employer !== "") {
                addTwoWithLink(experience.employer, ".work-entry:last h3:last", experience.url, ".work-entry a:last");
            }
            addOne(experience.location, HTMLworkLocation, ".work-entry:last");
            addOne(experience.dates, HTMLworkDates, ".work-entry em:last");
            addOne(experience.description, HTMLworkDescription, ".work-entry p:last");
        });
    }
};

var projects = {
    "projects": [
        project(
            "Chicago Picasso",
            "Jan. 2016 - Dec. 2016",
            "The Chicago Picasso (often just The Picasso) is an untitled monumental sculpture by Pablo Picasso in Chicago, Illinois. The sculpture, dedicated on August 15, 1967, in Daley Plaza in the Chicago Loop, is 50 feet (15.2 m) tall and weighs 162 short tons (147 t).The Cubist sculpture by Picasso was the first such major public artwork in Downtown Chicago, and has become a well known landmark.",
            ["images/chicago.png", "images/chicago.png", "images/chicago.png"],
            bio.skills[1],
            work.jobs[0].employer
        ),
        project(
            "Guernica",
            "May 1937 - June. 1937",
            "Guernica is a mural-sized oil painting on canvas by Spanish artist Pablo Picasso completed in June 1937. The painting, which uses a palette of gray, black, and white, is regarded by many art critics as one of the most moving and powerful anti-war paintings in history.Standing at 3.49 metres (11 ft 5 in) tall and 7.76 metres (25 ft 6 in) wide, the large mural shows the suffering of people wrenched by violence and chaos. Prominent in the composition are a gored horse, a bull, and flames.",
            ["images/guernica.png", "images/guernica.png", "images/guernica.png"],
            bio.skills[0],
            work.jobs[1].employer
        ),
        project(
            "Three Musicians",
            "Jan. 1921 - Dec. 1921",
            "Three Musicians is the title of two similar collage and oil paintings by Spanish artist Pablo Picasso. They were both completed in 1921 in Fontainebleau near Paris, France, and exemplify the Synthetic Cubist style; the flat planes of colour and “intricate puzzle-like composition” echoing the arrangements of cutout paper with which the style originated.",
            ["images/threeMusicians.png", "images/threeMusicians.png", "images/threeMusicians.png"],
            bio.skills[0],
            work.jobs[3].employer
        ),
        project(
            "Still Life with a Bottle of Rum",
            "Jan. 1911 - Dec. 1911",
            "Picasso painted this work in Céret, a small town in the foothills of the French Pyrenees, where he worked alongside Georges Braque. Their joint development of the painterly style called Cubism has become the stuff of legend. Made during the most abstract phase of Cubism, known as “high” or Analytic Cubism (1910-12), this work-which depicts a round tabletop with a stemmed glass at left, the bottle of rum at center, and a pipe in the right foreground-is among the first of Picasso’s pictures to include letters.",
            ["images/stillLife.png", "images/stillLife.png", "images/stillLife.png"],
            bio.skills[0],
            work.jobs[4].employer
        ),
        project(
            "Femme assise",
            "Jan. 1909 - Dec. 1909",
            "The artist painted it while travelling to his homeland where he created a series of canvases based on the features of his lover Fernande Olivier.Experts have described the period as being “the most crucial and productive” in his career. The painting, which was last sold publicly in London for £340,000 in 1973, is regarded as one of the artist’s greatest Cubist portraits.",
            ["images/femmeAssise.png", "images/femmeAssise.png", "images/femmeAssise.png"],
            bio.skills[0],
            work.jobs[4].employer
        ),
        project(
            "The Blue Room",
            "Jan. 1901 - Dec. 1901",
            "In The Blue Room we can see Picasso’s blue period being fully developed. His cool hues and strong use of natural light draws the viewer in to see this young idealized woman bathing in a tub in what we can assume is her bedroom. Although the painting could be described as patchy or mildly unclear, the subject and scene are still identifiable. The woman’s figure and small studio background are typical of Picasso’s blue period, as seen in other works such as The Blind Man’s Meal (1903)",
            ["images/blueRoom.png", "images/blueRoom.png", "images/blueRoom.png"],
            bio.skills[0],
            work.jobs[7].employer
        )
    ],
    "display": function () {
        var id = 0;
        this.projects.forEach(function (work) {
          /**
          * @description Method that represents the presentation of projects' object
          * using factory functions to append DOM Elements
          */
            work.id = id;
            // List
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectCover);
            $(".project-bg-image:last").css('background-image', 'url(' + work.images[0] + ')');
            $(".project-entry:last").attr({
                "data-slide-to": "slide" + work.id,
                "alt": work.title
            });
            // Gallery
            $(".carousel-inner:last").append(HTMLprojectSlide);
            $(".project-carrousel:last").addClass("slide" + work.id);
            addOne(work.title, HTMLprojectTitle, ".project-carrousel:last");
            addTwo(work.category, HTMLprojectCategory, work.company, HTMLprojectCompany, ".project-carrousel:last");
            addOne(work.dates, HTMLprojectDate, ".project-carrousel:last");
            addOne(work.description, HTMLprojectDescription, ".project-carrousel:last");
            work.images.forEach(function (img) {
                addOne(img, HTMLprojectImages, ".project-carrousel:last");
                $("img:last").addClass("gallery-images");
            });
            id += 1;
        });
    }
};


bio.display();
education.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);
