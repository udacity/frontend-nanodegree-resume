function SkillsView ($element) {
    this.$element = $element;
}
SkillsView.prototype.getHTML = function(value) {
    var html = '<li class="flex-item"><span class="white-text">{{value}}</span></li>';
    return html.replace('{{value}}', value);
};
SkillsView.prototype.render = function() {
    var skills = octopus.getBio().skills;
    var view = this;
    var skillsHTML = skills.reduce(function(html, skill) {
        return html + view.getHTML(skill);
    }, '');
    this.$element.html(skillsHTML);
};
