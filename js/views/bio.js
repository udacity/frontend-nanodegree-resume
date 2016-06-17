var bioView = {
    init: function() {
        this.$element = $('#header');
        this.contactsView = new ContactsView(this.$element.find('#topContacts'));
        this.skillsView = new SkillsView(this.$element.find('#skills'));
        this.render();
    },
    render: function() {
        var bio = octopus.getBio();
        this.$element.find('#name').text(bio.name);
        this.$element.find('#role').text(bio.role);
        this.$element.find('#profileImage').attr('src', bio.biopic);
        this.$element.find('#welcomeMessage').text(bio.welcomeMessage);
        this.contactsView.render();
        this.skillsView.render();
    }
};
