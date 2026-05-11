import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/coverage.css';

import moscow from '../data/moscow.json';
import mo from '../data/mo.json';

const Coverage = () => {
  return (
    <section className="coverage">
      <div className="coverage-info">
        <h1>Территория покрытия</h1>
        <p>
          Выполняем монтаж заборов и кровли
          <br />
          по Москве и всей Московской области
        </p>
      </div>
      

      <MapContainer
        center={[55.75, 37.6]}
        zoom={7}
        scrollWheelZoom={false}
        className="coverage-map"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <GeoJSON
          data={mo}
          style={{
            color: '#ff4d4f',
            weight: 2,
            fillOpacity: 0.25,
          }}
        />

        <GeoJSON
          data={moscow}
          style={{
            color: '#ff4d4f',
            weight: 2,
            fillOpacity: 0.6,
          }}
        />
      </MapContainer>
    </section>
  );
};

export default Coverage;
