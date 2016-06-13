var workView = {
    init: function() {
        this.$element = $('#workExperience');
        this.template = tmpl('work_template');
        this.render();
    },
    render: function() {
        var workObj = octopus.getWork();
        var html = this.template(workObj);
        this.$element.append(html);
    }
};
