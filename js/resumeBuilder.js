/*
This is empty on purpose! Your code to build the resume will go here.
 */
var firstName = 'Iván';
var age = 29;
$('#main').append(firstName);

var awesomeThoughts = 'I am Iván and I am AWESOME!';
console.log(awesomeThoughts);

var email = 'ivan@yogome.com';
var newEmail =
  email.replace('yogome', 'lightcheco');

console.log(newEmail);

var funThoughts =
  awesomeThoughts.replace('AWESOME','FUN');

$('#main').append(funThoughts);

var formattedName = HTMLheaderName.replace('%data%', firstName);
var formattedRole = HTMLheaderRole.replace('%data%', 'Web Designer');

$('#header').append(formattedName , formattedRole);
var skills = ['Superhero ',' Designer ',' Self Learner ', ' Runner' ];

var bio = {
  'name' : 'Iván Pacheco',
  'role' : 'Web Designer',
  'contacts' : {
    'email' : 'ivan@lightcheco.com',
    'mobile' : '5536778728',
    'github' : 'lightcheco',
    'twitter' : '@lightcheco',
    'location' : 'CDMX'
  },
  'pictureURL' : 'images/fry.jpg',
  'welcomeMessage' : 'Que hay!',
  'skills' : skills
}

var welcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
var bioPic = HTMLbioPic.replace('%data%' , bio.pictureURL);
var skillsS = HTMLskills.replace('%data%', bio.skills);
var emailL = HTMLemail.replace('%data%', bio.contacts.email);
var mobileL = HTMLmobile.replace('%data%', bio.contacts.mobile);
var githubL = HTMLgithub.replace('%data%', bio.contacts.github);
var twitterL = HTMLtwitter.replace('%data%', bio.contacts.twitter);
var locationL = HTMLlocation.replace('%data%', bio.contacts.location);
$('#header').append(welcomeMessage, bioPic);
$('#topContacts').append(emailL, mobileL, githubL, twitterL, locationL);
