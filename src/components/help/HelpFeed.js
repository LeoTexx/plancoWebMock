import React from "react";
import styled from "styled-components";
import HelpRequest from "./HelpRequest";

const Container = styled.div`
  width: 100%;
  height: 360px;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
  display: flex;
  align-items: center;

  flex-direction: column;
`;

export default function HelpFeed() {
  return (
    <Container>
      <HelpRequest
        name="Elise"
        time="3"
        title="Suche Mathe Nachhilfe"
        description="Ich suche nach einer Mathe Nachhilfe für meinen Sohn (8. Klasse). Hat jemand eine Empfehlung?"
        answers="1"
      />
      <HelpRequest
        name="Tobias"
        time="4"
        title="Garten gießen für 2 Wochen"
        description="Ich werde verreisen und brauche jemanden, der meinen Garten während der zwei Wochen, in denen ich unterwegs bin, bewässert, kann mir jemand helfen?"
        answers="4"
      />
    </Container>
  );
}
