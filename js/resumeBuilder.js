var name = "Sameera C.";
var role = "Frontend Developer"

var formattedName = HTMLheaderName.replace ("%data%", name);
var formattedRole = HTMLheaderRole.replace ("%data%", role);

$('#header').prepend (formattedName);
$('#header').append (formattedRole);
