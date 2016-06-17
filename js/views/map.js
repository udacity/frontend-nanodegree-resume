var mapView = {
    init: function() {
        this.$element = $('#mapDiv');
        this.render();
    },
    render: function() {
        this.$element.append('<div id="map"></div>');
    }
};
