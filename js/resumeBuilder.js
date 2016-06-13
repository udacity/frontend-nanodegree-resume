var model = null, octopus = null;

view = {
    bio: bioView,
    work: workView,
    projects: projectsView,
    init: function() {
        this.bio.init();
        this.work.init();
        this.projects.init();
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
    },
    getProjects: function() {
        return model.projects;
    }
};

function main() {
     $.getJSON('./data.json').done(initialize);
 }

function initialize(data) {
     octopus.init(data);
 }

main();
