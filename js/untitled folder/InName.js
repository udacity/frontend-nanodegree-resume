function inName(name){
	var names=name.split(" ");
	console.log(names);
	console.log(names[0]);
	var firstName=names[0];
	var lastName=names[1];
	firstName=firstName.toLowerCase();
	firstName=firstName.charAt(0).toUpperCase()+firstName.slice(1);
	lastName=lastName.toUpperCase();
	return firstName+" "+lastName;
};