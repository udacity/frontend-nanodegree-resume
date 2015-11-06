$('#main').append('Benjamin Clarke');

var formattedName = HTMLheaderName.replace('%data%', Benjamin Clarke);
var formattedRole = HTMLheaderRole.replace('%data%', Person);

$('header').append(formattedName);
$('header').append(formattedRole);