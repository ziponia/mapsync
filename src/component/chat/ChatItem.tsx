import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import moment from "moment-timezone";
import koLocale from "moment/locale/ko";
import { useInterval } from "../../utils";

moment.locale("ko", koLocale);
moment.tz.setDefault("Asia/Seoul");

type Props = {
  me?: boolean;
  message: string;
  autor: string;
  createdAt: string;
  onMount: () => void;
};

const ChatItem: React.SFC<Props> = props => {
  const [viewCreate, setViewCreate] = useState<string>(
    moment(new Date(Number(props.createdAt))).fromNow()
  );
  useEffect(props.onMount, []);

  useInterval(() => {
    const s = moment(new Date(Number(props.createdAt))).fromNow();

    setViewCreate(s);
  }, 1000);
  return (
    <Container me={props.me}>
      <span className="chat-name">
        {props.me ? "나" : props.autor} {viewCreate}
      </span>
      <div className="chat-content">{props.message}</div>
    </Container>
  );
};

const Container = styled.div<{ me?: boolean }>`
  margin-bottom: 15px;
  .chat-name {
    color: #aaaaaa;
    font-size: 12px;
    display: block;
    margin-bottom: 5px;
  }

  .chat-content {
    font-size: 12px;
    background-color: #eee;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 3px;
  }

  ${props =>
    props.me &&
    css`
      .chat-name {
        text-align: right;
        color: #ff9900;
      }

      .chat-content {
        text-align: right;
        background-color: #ff9900;
      }
    `}
`;

ChatItem.defaultProps = {
  me: false
};

export default ChatItem;
