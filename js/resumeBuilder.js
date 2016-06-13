var model = null, octopus = null;

var educationView = {
    init: function() {
        this.$element = $('#education');
        this.schoolsTemplate = tmpl('education_schools_template');
        this.onlineCoursesTemplate = tmpl('education_onlineCourses_template');
        this.render();
    },
    render: function() {
        var education = octopus.getEducation();
        this.$element.append(this.schoolsTemplate(education));
        this.$element.append(this.onlineCoursesTemplate(education));
    }
};

view = {
    bio: bioView,
    work: workView,
    projects: projectsView,
    education: educationView,
    init: function() {
        this.bio.init();
        this.work.init();
        this.projects.init();
        this.education.init();
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
     $.getJSON('./data.json').done(initialize);
 }

function initialize(data) {
     octopus.init(data);
 }

main();
