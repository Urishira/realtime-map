import React, { useEffect, useRef, useState } from 'react'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = 'pk.eyJ1IjoidXJpNzgwIiwiYSI6ImNrcW9rNWhhNzBsZmMyd3IxOTZvdW12N24ifQ.lYQwBYJF5ieRaKCVYRFphg';

const coorsData = {
  lng:12,
  lat:13,
  zoom:7

}

export const Map = () => {
    const [map, setMap] = useState();
    const [coors,setCoors] = useState(coorsData)
    const mapBoxRef= useRef();
    
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapBoxRef.current, // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9, // starting zoom
            projection: 'globe' // display the map as a 3D globe
        });
        

        setMap(map);

    }, [])

    useEffect(() => {
      
      map.on('move',()=>{
        const {lat,lng}=map.getCenter();
        setCoors({
          lat:lat.toFixed(2),
          lng:lng.toFixed(4),
          zoom: map.getZoom().toFixed(2)
        })

      });
      return () => {
        
      }
    }, [map])
    
     
  return (
    <>
    <div className='my=10 border-2 fixed bg-black-500'/>
    <div className='mapContainer' ref={mapBoxRef}>Map</div></>
  )
}
