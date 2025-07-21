const map = new maplibregl.Map({
    container: 'map',
    style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${mapToken}`,
    center:listing.geometry.coordinates,//longitude,latitude
    zoom: 9
});


map.on('load', () => {
    const marker = new maplibregl.Marker({color:"red"})
        .setLngLat(listing.geometry.coordinates)
        .setPopup(
            new maplibregl.Popup({ offset: 25 })
                .setHTML(`<h4>${listing.title}</h4><h6>Exact Location will be provided after booking</h6>`)
        )
        .addTo(map);
});

