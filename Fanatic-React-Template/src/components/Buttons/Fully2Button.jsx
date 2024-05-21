import React from "react";
import styled from "styled-components";

export default function Fully2Button({ title, action, border, small, background, color }) {
  return (
    <Wrapper
      onClick={action ? () => action() : null}
      border={border}
      small={small} // small prop�� Wrapper�� ����
      background={background}
      color={color}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: ${props => props.border ? "1px solid #707070" : "none"}; // border prop�� ���� ���Ǻ� ��Ÿ��
  background: ${props => props.background ? "white" : "green"};
  width: ${props => props.small ? "50%" : "100%"}; // ��ư�� �ʺ� ���Դϴ�.
  margin: ${props => props.small ? "10px 0" : "0"}; // ��ư �� �Ʒ��� ������ �߰��մϴ�.
  align-self: ${props => props.small ? "flex-end" : "auto"};
  padding: ${props => props.small ? "8px 12px" : "15px 20px"};
  font-size: ${props => props.small ? "14px" : "16px"};
  color: ${props => props.color ? "black" : "#fff"};
  outline: none;
  font-weight:bold;
  border-radius: 25px;

  &:hover {
    background-color: ${props => props.border ? "transparent" : "#8DF689"};
    border: ${props => props.border ? "1px solid #7620ff" : "none"}; // ȣ�� �� �׵θ� ��Ÿ��
    color: ${props => props.border ? "#7620ff" : "#fff"};
  }
`;