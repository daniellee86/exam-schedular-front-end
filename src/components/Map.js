import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFuaWVsbGVlODYiLCJhIjoiY2xneTZiajdrMDZoYTNucWN0YW5xeG5oayJ9.nKJtveReZo3aKE1Hz8WPzg";

function Map({ data }) {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const uniqueLocations = {};

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [0, 40],
      zoom: 0.5,
      pitch: 0,
    });

    data.forEach((location) => {
      const { Latitude, Longitude, LocationName } = location;

      if (!uniqueLocations[`${Latitude},${Longitude}`]) {
        uniqueLocations[`${Latitude},${Longitude}`] = true;

        new mapboxgl.Marker({
          scale: 0.5,
          color: "grey",
        })
          .setLngLat([Longitude, Latitude])
          .setPopup(new mapboxgl.Popup().setHTML(LocationName))
          .addTo(map);
      }
    });

    // Clean up on unmount
    return () => {
      map.remove();
    };
  }, [data]);

  return (
    <div
      className="map-container h-full w-full rounded-xl"
      ref={mapContainerRef}
    />
  );
}

export default Map;
