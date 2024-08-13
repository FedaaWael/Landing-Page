navigator.geolocation.getCurrentPosition(success, fail);
function success(position) {
    position.coords.latitude;
    position.coords.longitude;
    initMap(position.coords.latitude, position.coords.longitude);
}
function fail(e) {
    console.log(e);
}
function initMap(x, y) {
    var myLatLng = { lat: x, lng: y };

    var map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        zoom: 4,
    });

    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: "My Location",
    });
}

window.initMap = initMap;