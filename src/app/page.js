'use client'
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';
import './home.css'
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYWd1aWxhbSIsImEiOiJjbGFpNHQ5djUwZ2piNDFtcGs2aWpvemNxIn0.BUSxqZAyOrBKyPzLphCA_A';

export default function Home() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  
  const [lng, setLng] = useState(-100);
  const [lat, setLat] = useState(35);
  const [zoom, setZoom] = useState(1.9);
  
  useEffect(() => {
    if (map.current) return;
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/aguilam/cllfciqf0013c01pl9h0zgi6n',
        center: [lng, lat],
        zoom: zoom,
        /*
        scrollZoom: false,
        dragging:false,
        touchZoom:false,
        doubleClickZoom:false,
        scrollWheelZoom:false,
        keyboard:false,
        dragPan: false
        */
      });
      console.log(zoom)
    });
  return (
    <main className='mep'>
      <div ref={mapContainer} className="map-container" />
    </main>
  )
}
