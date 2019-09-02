import React, { useState } from "react";
import ReactMapGL, {
  ViewState,
  PointerEvent,
  GeolocateControl
} from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const mapStyle: MapStyle = "mapbox://styles/mapbox/streets-v10";

type OwnProps = {
  center: {
    lat: number;
    lng: number;
  };
  onClick: (event: PointerEvent) => void;
};
type Props = OwnProps;

const MapView: React.SFC<Props> = props => {
  const [viewPort, setViewPort] = useState<ViewState>({
    latitude: props.center.lat,
    longitude: props.center.lng,
    zoom: 12
  });
  return (
    <ReactMapGL
      {...viewPort}
      width="100%"
      height="100%"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      onViewportChange={viewport => setViewPort(viewport)}
      onClick={props.onClick}
      mapStyle={mapStyle}
      reuseMaps={true}
    >
      <>{props.children}</>
    </ReactMapGL>
  );
};

export default MapView;
