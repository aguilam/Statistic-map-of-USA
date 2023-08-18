'use client'
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';
import Statistic_panel from './statistic-panel';
import './home.css'
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYWd1aWxhbSIsImEiOiJjbGFpNHQ5djUwZ2piNDFtcGs2aWpvemNxIn0.BUSxqZAyOrBKyPzLphCA_A';

export default function Home() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  
  const [lng, setLng] = useState(-100);
  const [lat, setLat] = useState(35);
  const [zoom, setZoom] = useState(1.9);
  
  const onStates = () => {
    console.log("Zoom-")
    setZoom(3.1)
  }
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
    },[zoom, lat, lng]);
  return (
    <main className='mep'>
      <div ref={mapContainer} className="map-container" />
      <Statistic_panel></Statistic_panel>
    </main>
  )
}
