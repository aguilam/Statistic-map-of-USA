'use client'
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';
import './home.css'
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYWd1aWxhbSIsImEiOiJjbGFpNHQ5djUwZ2piNDFtcGs2aWpvemNxIn0.BUSxqZAyOrBKyPzLphCA_A';

export default function Home() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  
  const [lng, setLng] = useState(-90);
  const [lat, setLat] = useState(38.5);
  const [zoom, setZoom] = useState(4.3);
  
  useEffect(() => {
    if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [lng, lat],
        zoom: zoom,
        scrollZoom: false,
        dragging:false,
        touchZoom:false,
        doubleClickZoom:false,
        scrollWheelZoom:false,
        keyboard:false,
        dragPan: false
      });
    });
  return (
    <main className='mep'>
      <div ref={mapContainer} className="map-container" />
    </main>
  )
}
