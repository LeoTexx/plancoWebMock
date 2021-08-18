import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #50bfa5;
  height: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 21px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export default function Header({ children }) {
  return <Container>{children}</Container>;
}
