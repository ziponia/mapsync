import React, { useEffect } from "react";
import MapView from "../../component/map/MapView";
import { PointerEvent } from "react-map-gl";
import MapMarker from "../../component/map/MapMarker";
import { Connect } from "aws-amplify-react";
import { graphqlOperation, API } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as subscriptions from "../../graphql/subscriptions";
import * as mutations from "../../graphql/mutations";

type Props = {};

const MapContainer: React.SFC<Props> = props => {
  useEffect(() => {}, []);

  const onMapClickHandler = async (event: PointerEvent) => {
    const { lngLat } = event;
    await API.graphql(
      graphqlOperation(mutations.createPoint, {
        lat: lngLat[1],
        lng: lngLat[0],
        createdAt: new Date().getTime()
      })
    );
  };

  const onDeleteMarker = async (pointId: string) => {
    await API.graphql(
      graphqlOperation(mutations.deletePoint, {
        id: pointId
      })
    );
  };

  return (
    <div style={{ flex: 1, display: "flex" }}>
      <MapView
        center={{ lat: 37.4761172, lng: 126.8791287 }}
        onClick={onMapClickHandler}
      >
        <Connect
          query={graphqlOperation(queries.ListPoint)}
          subscription={graphqlOperation(subscriptions.onChangePoint)}
          onSubscriptionMsg={(prev, { onDeletePoint, onCreatePoint }) => {
            const isDelete = !!onDeletePoint;
            if (isDelete) {
              prev.listPoints.items = prev.listPoints.items.filter(
                i => i.pointId !== onDeletePoint.pointId
              );
            } else {
              prev.listPoints.items.push({
                pointId: onCreatePoint.pointId,
                lat: onCreatePoint.lat,
                lng: onCreatePoint.lng
              });
            }

            return prev;
          }}
        >
          {({ data: { listPoints: points } }) => {
            if (!points) {
              return null;
            }
            return points.items.map(item => (
              <MapMarker
                key={item.pointId}
                lat={item.lat}
                lng={item.lng}
                id={item.pointId}
                onDelete={onDeleteMarker}
              />
            ));
          }}
        </Connect>
      </MapView>
    </div>
  );
};

export default MapContainer;
