/*
*  TODO
*  namespace
*  bundle - Webpack
*  minify
*  ES2015
*  translations support
*  React
*  Redux
*  express - heroku deploy
*  DB - mongodb / redis
*  replace jQuery with a lighter library e.g zepto, dom
*/

var model = null;

var view = {
    bio: bioView,
    work: workView,
    projects: projectsView,
    education: educationView,
    map: mapView,
    internationalizeButtonView: internationalizeButtonView,
    init: function() {
        this.bio.init();
        this.work.init();
        this.projects.init();
        this.education.init();
        this.map.init();
        this.internationalizeButtonView.init();
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
    },
    getEducation: function() {
        return model.education;
    }
};

function main() {
     $.getJSON('./data.json').done(function initialize(appData) {
         octopus.init(appData);
         hideEmptySections();
     });
}

main();
