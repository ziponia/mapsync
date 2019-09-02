import React, { useState } from "react";
import styled from "styled-components";
import { IoIosSend } from "react-icons/io";

export type State = {
  message: string;
  id: string;
};

type Props = {
  onSubmit: (message: State) => void;
};

const ChatForm: React.SFC<Props> = props => {
  const [state, setState] = useState<State>({
    message: "",
    id: ""
  });

  const onMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  return (
    <Container
      onSubmit={e => {
        e.preventDefault();
        if (state.message.length < 1) {
          return;
        }
        props.onSubmit(state);
        setState({
          ...state,
          message: ""
        });
      }}
    >
      <input
        type="text"
        name="message"
        className="chat-input"
        placeholder="typings..."
        onChange={onMessageChange}
        value={state.message}
      />
      <button
        type="submit"
        className={`submit-btn`}
        disabled={state.message.length === 0}
      >
        <IoIosSend size={20} />
      </button>
    </Container>
  );
};

const Container = styled.form`
  display: flex;

  .chat-input {
    flex: 1;
    padding: 8px;
    border: 0;
    box-sizing: border-box;
    font-size: 14px;
    &:focus {
      outline: none;
    }
  }

  .submit-btn {
    height: 50px;
    width: 80px;
    border: 0;
    background-color: #ff9900;
    color: #ffffff;

    &:focus {
      outline: none;
    }
    &[disabled] {
      background-color: #dddddd;
    }
  }
`;

export default ChatForm;
