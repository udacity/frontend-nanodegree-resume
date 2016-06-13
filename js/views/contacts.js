function ContactsView ($element) {
    this.$element = $element;
}
ContactsView.prototype.getHTML = function(type, value) {
    var html = '<li class="flex-item"><span class="orange-text">{{type}}</span><span class="white-text">{{value}}</span></li>';
    return html.replace('{{type}}', type).replace('{{value}}', value);
};
ContactsView.prototype.render = function() {
    var bio = octopus.getBio();
    var view = this;
    var contactTypes = Object.keys(bio.contacts);
    var contactsHTML = contactTypes.reduce(function(html, type) {
        return html + view.getHTML(type, bio.contacts[type]);
    }, '');
    this.$element.html(contactsHTML);
};
