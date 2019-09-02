import React from "react";
import MapContainer from "../container/map/MapContainer";
import ChatContainer from "../container/chat/ChatContainer";

type Props = {};

const HomePage: React.SFC<Props> = props => {
  return (
    <>
      <MapContainer />
      <ChatContainer />
    </>
  );
};

export default HomePage;
