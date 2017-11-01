/*
This is empty on purpose! Your code to build the resume will go here.
 */

const name = 'Zachary Butterfield';
const role = 'Front-End Developer';
const awesomeThoughts = `I am ${name} and I am AWESOME!`;
console.log(awesomeThoughts);

const funThoughts = awesomeThoughts.replace(['AWESOME'], ['FUN']);
console.log(funThoughts);
$('#main').append(funThoughts);

const formattedName = HTMLheaderName.replace('%data%', name);
const formattedRole = HTMLheaderRole.replace('%data%', role);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
