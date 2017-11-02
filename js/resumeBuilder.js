/*
This is empty on purpose! Your code to build the resume will go here.
 */

const 	name = 'Zachary Butterfield',
	  	role = 'Front-End Developer',
	  	skills = ['HTML', 'JavaScript', 'Python', 'CSS', 'ES6', 'jQuery'],
	  	bio = {
				'name' : name,
				'role' : role,
				'contactInfo' : 'zbutterfield@gmail.com',
				'bioPic' : 'images/moogle.jpg',
				'welcomeMessage' : `Hey there! I'm ${name}. Nice to meet you!`,
				'age' : 31,
				'skills' : skills
			},
		$main = $('#main'),
		$header = $('#header'),
		formattedName = HTMLheaderName.replace('%data%', name),
	  	formattedRole = HTMLheaderRole.replace('%data%', role);
	  	//bioPic = HTMLbioPic.replace('%data%', bio.pictureURL);


$header.prepend(formattedRole);
$header.prepend(formattedName);
$main.append(bio.name);
$main.append(bio.role);
$main.append(bio.contactInfo);
$main.append(bio.bioPic);
$main.append(bio.welcomeMessage);
$main.append(bio.skills);


/*
const awesomeThoughts = `I am ${name} and I am AWESOME!`;
$('#main').append(bio.name);
	  

const funThoughts = awesomeThoughts.replace(['AWESOME'], ['FUN']);
$('#main').append(funThoughts);
$('#main').append(skills);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
*/




