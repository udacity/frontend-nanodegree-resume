var model = null, octopus = null;

view = {
    bio: bioView
    init: function() {
        this.bio.init();
    }
};
var octopus = {
    init: function(appData) {
        model = appData;
        view.init();
    },
    getBio: function() {
        return model.bio;
    }
};
function main() {
     $.getJSON('./data.json').done(initialize);
 }

function initialize(data) {
     octopus.init(data);
 }

main();
