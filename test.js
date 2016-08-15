$(document).ready(function() {



var dragiDare = "Ja sam Dragidare";
console.log(dragiDare);
var email = "darko.antic@hotmail.com";
var newEmail =
    email.replace("hotmail", "gmail");
console.log(newEmail);
var newDragiDare =
    dragiDare.replace("Dragidare", "Superdrag");
$('#header').append(newDragiDare);
console.log(newDragiDare);

});

var cameron ={};
cameron.job = "course dev"

var makeCourse = function(){
  console.log("made a course");
}

var courses = 0;
while (cameron.job === "course dev") {
  makeCourse();
  courses = courses + 1;
  if (courses === 10) {
    cameron.job = "DJ";
  }
}
console.log(cameron.job);

var countries = ["germany", "argentina", "brazil", "netherlands"]

for (blah in countries){
  console.log(countries[blah]);
}
