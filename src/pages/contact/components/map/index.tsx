import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

function Map() {
  const containerStyle = {
    width: "100%",
    height: "300px",
  };
  const defaultCenter = {
    lat: 7.111320987207769,
    lng: 80.03861755092447,
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });
  console.log("ssd", import.meta.env.VITE_GOOGLE_API_KEY);

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <div className="mt-[20px] px-[20px]">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={15}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </div>
  );
}

export default Map;
