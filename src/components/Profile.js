import React from "react";
import styled from "styled-components";
import ProfileImage from "../assets/images/profile.png";

const Container = styled.div`
  background-color: #134d72;
  height: 81px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

const Image = styled.img`
  width: 57px;
`;

const TextField = styled.div`
  color: #fff;
  font-family: Roboto, sans-serif;
  height: 100%;
  padding: 17px;
`;

const Title = styled.h1`
  font-size: 16px;
`;
const Note = styled.p`
  font-size: 10px;
`;

export default function Profile() {
  return (
    <Container>
      <Image src={ProfileImage} alt="Profile Image" />
      <TextField>
        <Title>Hi Maria!</Title>
        <Note>
          Vervollständige dein Profil und erhalte deine ersten PlanCo Punkte!
        </Note>
      </TextField>
    </Container>
  );
}
