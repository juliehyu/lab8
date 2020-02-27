function initMap() {
	// add your code here
    L.mapquest.key = "HP9VdglpF4hRbKDFJ1dQyAA7GqJGMN7P";

    var map = L.mapquest.map("map", {
        center: [32.88, -117.236],
        layers: L.mapquest.tileLayer("map"),
        zoom: 12,
        zoomControl: false
    });

    L.marker([32.8788033, -117.2359121]).addTo(map);
}