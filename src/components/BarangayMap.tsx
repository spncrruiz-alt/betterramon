'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { barangayInfo, contact } from '@/data/ramon';
import { barangayGeo, municipalOutlineGeo } from '@/data/ramon-geo';
import L from '@/components/L';

// Interactive map of Ramon: OpenStreetMap streets underneath, barangay boundaries
// shaded by 2020 population, the municipal boundary outlined on top.
const shades = ['#dbe5ff', '#b3c8ff', '#7fa1f5', '#4d78e6', '#1e4fd8'];
const limits = [1500, 2500, 4000, 6000];
const shadeOf = (pop: number) => limits.filter((l) => pop >= l).length;
const fmt = (n: number) => n.toLocaleString('en-US');

export default function BarangayMap() {
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: import('leaflet').Map | undefined;
    let cancelled = false;
    import('leaflet').then((Lf) => {
      if (cancelled || !box.current) return;
      map = Lf.map(box.current, {
        scrollWheelZoom: false, // page scrolling keeps working; use +/- or pinch
        zoomSnap: 0.25,
        attributionControl: true,
      });
      Lf.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors · Boundaries: PSA PSGC (2023)',
      }).addTo(map);

      const geo = barangayGeo as unknown as GeoJSON.FeatureCollection;
      const areas = Lf.geoJSON(geo, {
        style: (f) => {
          const info = barangayInfo[f?.properties.name];
          return {
            color: '#ffffff',
            weight: 1.5,
            fillColor: shades[info ? shadeOf(info.population2020) : 0],
            fillOpacity: 0.55,
          };
        },
        onEachFeature: (f, layer) => {
          const name: string = f.properties.name;
          const info = barangayInfo[name];
          layer.bindTooltip(
            `<strong>${name}</strong>${info ? `<br>${fmt(info.population2020)} people (2020)` : ''}`,
            { sticky: true, className: 'barangay-tip', direction: 'top' }
          );
          layer.on({
            mouseover: () =>
              (layer as import('leaflet').Path).setStyle({ fillOpacity: 0.8, weight: 2.5 }),
            mouseout: () => areas.resetStyle(layer),
          });
        },
      }).addTo(map);

      // Municipal boundary: a thick outline drawn over the barangays.
      Lf.geoJSON(municipalOutlineGeo as unknown as GeoJSON.Feature, {
        style: {
          color: '#0f172a',
          weight: 3.5,
          opacity: 0.95,
          lineCap: 'round',
          lineJoin: 'round',
        },
        interactive: false,
      }).addTo(map);

      // Names stay visible once zoomed in enough to fit them.
      const labels = Lf.layerGroup(
        geo.features.map((f) =>
          Lf.marker(Lf.geoJSON(f).getBounds().getCenter(), {
            interactive: false,
            keyboard: false,
            icon: Lf.divIcon({
              className: 'barangay-label',
              html: `<span>${f.properties?.name}</span>`,
              iconSize: [0, 0],
            }),
          })
        )
      );
      const toggleLabels = () => {
        if (!map) return;
        if (map.getZoom() >= 12) labels.addTo(map);
        else labels.remove();
      };
      map.on('zoomend', toggleLabels);
      map.fitBounds(areas.getBounds(), { padding: [12, 12] });
      toggleLabels();
    });
    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);

  return (
    <figure className="barangay-map">
      <div
        ref={box}
        className="barangay-map-canvas"
        role="region"
        aria-label="Map of Ramon, Isabela with barangay boundaries"
      />
      <figcaption>
        <span className="barangay-map-legend" aria-hidden="true">
          <span className="legend-title">
            <L en="Population (2020)" fil="Populasyon (2020)" ilo="Populasion (2020)" />
          </span>
          {shades.map((c, i) => (
            <span key={c}>
              <i style={{ background: c }} />
              {i === 0
                ? `< ${fmt(limits[0])}`
                : i === shades.length - 1
                  ? `${fmt(limits[i - 1])}+`
                  : `${fmt(limits[i - 1])}–${fmt(limits[i] - 1)}`}
            </span>
          ))}
        </span>
        <small>
          <i className="bi bi-geo-alt" aria-hidden="true"></i> {contact.address}.{' '}
          <L
            en="Barangay boundaries from PSA PSGC shapefiles (2023), simplified; approximate, not for legal or survey use."
            fil="Hangganan ng barangay mula sa PSA PSGC shapefiles (2023), pinasimple; tantya lamang, hindi para sa legal o survey na gamit."
            ilo="Beddeng ti barangay manipud PSA PSGC shapefiles (2023), napasimple; pattapatta laeng, saan a para iti legal wenno survey."
          />
        </small>
      </figcaption>
    </figure>
  );
}
