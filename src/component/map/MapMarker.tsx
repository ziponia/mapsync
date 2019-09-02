import React, { useState } from "react";
import { Marker } from "react-map-gl";
import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import Popover, { ArrowContainer } from "react-tiny-popover";

type Props = {
  lat: number;
  lng: number;
  id: string;
  onDelete: (pointId: string) => void;
};

const MapMarker: React.SFC<Props> = props => {
  const [isPopoverOpen, setPopoverOpen] = useState<boolean>(false);
  const [deleting, setDeleting] = useState<boolean>(false);
  return (
    <Marker
      latitude={props.lat}
      longitude={props.lng}
      offsetLeft={-20}
      offsetTop={-10}
    >
      <Popover
        isOpen={isPopoverOpen}
        position={"top"} // preferred position
        content={({ position, targetRect, popoverRect }) => (
          <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
            position={position}
            targetRect={targetRect}
            popoverRect={popoverRect}
            arrowColor={"#fff"}
            arrowSize={10}
            arrowStyle={{ opacity: 0.7 }}
            style={{
              boxShadow:
                "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
            }}
          >
            <PopoverContainer onClick={() => setPopoverOpen(!isPopoverOpen)}>
              <DeleteBtn
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDeleting(true);
                  props.onDelete(props.id);
                }}
                disabled={deleting}
              >
                {deleting ? "삭제 대기중" : "삭제"}
              </DeleteBtn>
            </PopoverContainer>
          </ArrowContainer>
        )}
      >
        <Container
          className="animated rubberBand"
          onClick={() => setPopoverOpen(!isPopoverOpen)}
        >
          <MdLocationOn size={35} />
        </Container>
      </Popover>
    </Marker>
  );
};

const Container = styled.div`
  border: 1px solid #ffffff;
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const PopoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const DeleteBtn = styled.button`
  border: 0;
  padding: 10px;
`;

export default MapMarker;
