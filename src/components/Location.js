import React, { useEffect, useState } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet';
import Leaflet from "leaflet";



export const Location = () => {
    const [position, setPosition] = useState(null);

    const map = useMap();

    const icon = new Leaflet.Icon({
        iconUrl:
          "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
    }, []);

    return position === null ? null : (
      <Marker position={position} icon={icon}>
        <Popup>Current Location</Popup>
      </Marker>
    );
}
