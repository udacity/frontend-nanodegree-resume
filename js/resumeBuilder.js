var model = null, octopus = null;

view = {
    bio: bioView,
    work: workView,
    init: function() {
        this.bio.init();
        this.work.init();
    }
};
var octopus = {
    init: function(appData) {
        model = appData;
        view.init();
    },
    getBio: function() {
        return model.bio;
    },
    getWork: function() {
        return model.work;
    }
};
function main() {
     $.getJSON('./data.json').done(initialize);
 }

function initialize(data) {
     octopus.init(data);
 }

main();
