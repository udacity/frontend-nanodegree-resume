var internationalizeButtonView = {
    init: function() {
        this.$element = $('#InButton');
        this.render();
    },
    onClick: function() {
        var $name = $('#name');
        var text = $name.text();
        var iName = inName(text);
        $name.html(iName);
    },
    render: function() {
        var $el = this.$element;
        $el.html('<button>Internationalize</button>');
        $el.find('button').click(this.onClick);
    }
};
