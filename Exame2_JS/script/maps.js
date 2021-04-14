'use strict';


// карта в блоке "Contact"
function initMap() {
    let e = new google.maps.Map(document.getElementById("map"),
        {
            center: { lat: 49.61359583151082, lng: 34.566517919623344 },
            zoom: 10,
            styles: [{ elementType: "geometry", stylers: [{ color: "#e7e7e7" }] },
            { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
            { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#73736d" }] },
            { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#0e0e0f" }] },
            { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
            { featureType: "road.arterial", elementType: "labels.text.fill", stylers: [{ color: "#ffffff" }] },
            { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#c8c5c5" }] },
            { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
            { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#8a8888" }] },
            { featureType: "transit.line", elementType: "geometry", stylers: [{ color: "#eeecec" }] },
            { featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#eeecec" }] },
            { featureType: "water", elementType: "geometry", stylers: [{ color: "#c1bfbf" }] },
            { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#999797" }] }]
        });

    const contentString = document.getElementById("content");
    const infowindow = new google.maps.InfoWindow({
        content: contentString,

    });

    const marker = new google.maps.Marker({
        position: { lat: 49.61359583151082, lng: 34.566517919623344 },
        map: e,
        icon: "./image/Comtacs/Pin.png"
    });
    marker.addListener("click", () => {
        infowindow.open(map, marker);
        contentString.style.display = 'block';
    });


} window.initMap = initMap;

