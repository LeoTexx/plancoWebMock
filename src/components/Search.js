import React from "react";
import styled from "styled-components";
import searchIcon from "../assets/icons/search.png";

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 10px;
`;
const Image = styled.img`
  position: absolute;
  left: 11px;
  top: 5px;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  border: none;
  border-radius: 10px;
  font-family: Roboto, sans-serif;
  font-size: 17px;
  color: rgb(60, 60, 67, 0.6);
  width: 100%;
  height: 100%;
  padding-left: 48px;
  text-decoration: none;
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(60, 60, 67, 0.6);
  }
`;

export default function Search() {
  return (
    <Container>
      <Image src={searchIcon} alt="" />
      <Input type="text" placeholder="Suche" />
    </Container>
  );
}
