import React, { useRef } from "react";
import Leaflet from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-control-geocoder";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png"
import markerRetina from "leaflet/dist/images/marker-icon-2x.png"
import { Location } from "./Location";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { notImplementedYet } from "../App";



const attractionIcon = new Leaflet.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconRetinaUrl: markerRetina,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


const MapComponent = () => { 
    const mapRef = useRef();
    const zoom = 14;
    const containerStyle = {
        width: "100%",
        height: "600px"
    }
    const center = {
        lat: 39.285844306987876,
        lng: 34.68185442032032
    }
    
    const attractions = useSelector(state => state.attractions);

    
    const mapClicked = async (event) => {
        console.log("lat : "+event.latlng.lat+" lng: "+event.latlng.lng)
    }

    const markerClicked = (marker, index) => {
      console.log(marker.position.lat, marker.position.lng)
    }

    const markerDragEnd = (event, index) => {
        console.log(event.latlng.lat, event.latlng.lng)
    }

    return (
        <MapContainer
            style={containerStyle}
            center={center}
            zoom={zoom}
            scrollWheelZoom={true} 
            ref={mapRef}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapContent
                onClick={mapClicked}
            />
            <Location/> 
            {attractions.map((attraction, index) => (
                <MarkerContent
                    key={index} 
                    address = {attraction.name}
                    position={attraction.position}
                    draggable={attraction.draggable} 
                    desc = {attraction.desc}
                    onMarkerClick={event => markerClicked(attraction, index)}
                    onDragEnd={event => markerDragEnd(event, index)} 
                    addMarker = {event => mapClicked(event)}
                />
            ))}
        </MapContainer>
    );
};

const MapContent = ({ onClick }) => {  
    const map = useMapEvents({
        click: event => onClick(event)
    }) 
    return null;
}

const MarkerContent = (props) => {
    const markerRef = useRef();
    const { position, draggable, onMarkerClick, onDragEnd, address, desc } = props; 
    
    return <Marker
        icon={attractionIcon}
        position={position}
        draggable={draggable}
        eventHandlers={{
            click: event => onMarkerClick(event),
            dragend: () => onDragEnd(markerRef.current.getLatLng())
        }}
        ref={markerRef}
    >
        <Popup style = {{}}>
            <h5 className="text-center text-dark">{address}</h5>
            <p>{desc}</p>
            <Link className="btn btn-outline-primary" onClick={notImplementedYet}>More Info</Link>
        </Popup>
    </Marker>
}

export default MapComponent;