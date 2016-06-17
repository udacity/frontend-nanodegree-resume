var projectsView = {
    init: function() {
        this.$element = $('#projects');
        this.template = tmpl('projects_template');
        this.render();
    },
    render: function() {
        var projectsObj = octopus.getProjects();
        var html = this.template(projectsObj);
        this.$element.append(html);
    }
};
