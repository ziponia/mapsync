import React, { useRef, useState } from "react";
import styled from "styled-components";
import ChatHeader from "../../component/chat/ChatHeader";
import ChatItem from "../../component/chat/ChatItem";
import ChatForm, { State } from "../../component/chat/ChatForm";
import { Connect } from "aws-amplify-react";
import { graphqlOperation } from "aws-amplify";

// import * as queries from "../../graphql/queries";
import * as subscriptions from "../../graphql/subscriptions";
import * as mutations from "../../graphql/mutations";

type Props = {};

const uid = new Date().getTime();

const ChatContainer: React.SFC<Props> = props => {
  const bodyRef = useRef<HTMLDivElement>();
  const onRender = () => {
    bodyRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Container>
      <ChatHeader />
      <ChatBody>
        <Connect
          subscription={graphqlOperation(subscriptions.onChatAdd)}
          onSubscriptionMsg={(prev, { onCreateChatting }: any) => {
            if (!prev.item) {
              prev.item = [];
            }
            const chat = onCreateChatting;
            prev.item.push({
              ...chat
            });
            return prev;
          }}
        >
          {({ data: { item } }) => {
            if (!item) {
              return null;
            }
            return item.map(i => (
              <ChatItem
                key={i.id}
                message={i.message}
                autor={i.autor}
                me={i.autor === uid.toString()}
                createdAt={i.createdAt}
                onMount={onRender}
              />
            ));
          }}
        </Connect>
        <div ref={bodyRef}></div>
      </ChatBody>
      <Connect mutation={graphqlOperation(mutations.createChatting)}>
        {({ mutation }: any) => {
          return (
            <ChatForm
              onSubmit={async input => {
                await mutation({
                  autor: uid.toString(),
                  message: input.message,
                  createdAt: new Date().getTime()
                });
              }}
            />
          );
        }}
      </Connect>
    </Container>
  );
};

const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
`;

const ChatBody = styled.div`
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
  height: 100vh;
  overflow: scroll;
`;

export default ChatContainer;
