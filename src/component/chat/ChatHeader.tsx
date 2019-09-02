import React from "react";
import styled from "styled-components";

type Props = {};

const ChatHeader: React.SFC<Props> = props => {
  return (
    <Container>
      <h4>Chat</h4>
    </Container>
  );
};

const Container = styled.div`
  height: 80px;
  background-color: #ff9900;
  line-height: 80px;

  h4 {
    color: #ffffff;
    text-align: center;
    font-weight: 100;
    font-size: 26px;
  }
`;

export default ChatHeader;
