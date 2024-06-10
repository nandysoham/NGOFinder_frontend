import React, { useRef, useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function ContactMaps(props) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    // eslint-disable-next-line 
    const [lng, setLng] = useState(79.47502519716696);
    // eslint-disable-next-line 
    const [lat, setLat] = useState(13.630144890871433);
    // eslint-disable-next-line 
    const [zoom, setZoom] = useState(9);
    
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/satellite-v9',
          center: [lng, lat],
          zoom: zoom
        });
      });

      return (
        <div className="container">
          <div ref={mapContainer} className="map-container" />

        </div>
      );
}
