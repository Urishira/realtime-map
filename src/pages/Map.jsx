import React, { useEffect, useRef, useState } from 'react'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = 'pk.eyJ1IjoidXJpNzgwIiwiYSI6ImNrcW9rNWhhNzBsZmMyd3IxOTZvdW12N24ifQ.lYQwBYJF5ieRaKCVYRFphg';



export const Map = () => {
    const [map, setMap] = useState();
    const mapBoxRef= useRef();
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapBoxRef.current, // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9, // starting zoom
            projection: 'globe' // display the map as a 3D globe
        });
        map.on('style.load', () => {
            map.setFog({}); // Set the default atmosphere style
        });

        setMap(map);

    }, [])
    
  return (
    <div className='mapContainer' ref={mapBoxRef}>Map</div>
  )
}
