"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

type Props = {
  listings: {
    id: string;
    location: { lat: number; lng: number };
  }[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultCenter = {
  lat: 13.7563,
  lng: 100.5018,
};

export default function ComponentsMapView({
  listings,
  selectedId,
  onSelect,
}: Props) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAkTUA1HtNhbluRLoigzT70D-H1_190eao", // 🔑
  });

  if (loadError) return <p className="text-error">โหลดแผนที่ไม่สำเร็จ</p>;
  if (!isLoaded)
    return <p className="text-base-content/60">กำลังโหลดแผนที่...</p>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={listings[0]?.location || defaultCenter}
      zoom={13}
      options={{
        scrollwheel: true,
        gestureHandling: "auto",
      }}
    >
      {listings.map((place) => (
        <Marker
          key={place.id}
          position={place.location}
          onClick={() => onSelect(place.id)}
          icon={{
            url:
              selectedId === place.id
                ? "/icons/marker-selected.svg"
                : "/icons/marker.svg",
            scaledSize: new google.maps.Size(32, 32),
          }}
        />
      ))}
    </GoogleMap>
  );
}
