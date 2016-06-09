var model, octopus, view;
function main() {
     $.getJSON('./cv.json')
     .done(initialize)
     .fail(function() { console.log('fail', arguments); })
     .always(function() { console.log('always', arguments); });
 }

 function initialize(data) {
     console.log('data', data);
     model = data;
     var bio = model.bio;
     var $div = $('<div>');
     $div.append(
         [
         'name: ' + bio.name,
         'role: ' + bio.role,
         'email: ' + bio.contacts.email,
         'skills: ' + bio.skills,
         'Welcome' + bio.welcomeMsg,
         'Github: ' + bio.contacts.github].join('<br>')
     );
     $div.append('<img src="' + bio.biopic + '"  />');
     $('body').append($div);
    //  octopus.init();
 }

main();
