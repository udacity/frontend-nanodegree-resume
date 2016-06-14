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
