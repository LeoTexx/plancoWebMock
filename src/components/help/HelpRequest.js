import React, { useState } from "react";
import styled from "styled-components";
import MariaImage from "../../assets/images/maria.png";
import OliverImage from "../../assets/images/oliver.png";
import LikeIcon from "../../assets/icons/like.png";
import ShareIcon from "../../assets/icons/share.png";

const Container = styled.div`
  height: 286px;
  margin-bottom: 43px;
`;

const PersonInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;
const PersonImage = styled.img`
  height: 50px;
  margin-right: 10px;
`;
const PersonRequest = styled.p`
  font-size: 15px;
  font-family: Roboto, sans-serif;
  color: #929295;
`;
const RequestField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 290px;
  border-radius: 8px;
  border: 1px solid rgb(60, 60, 67, 0.6);
`;

const RequestElement = styled.div``;

const RequestTitle = styled.p`
  padding: 0px 11px;
  font-size: 20px;
  font-family: Roboto, sans-serif;
  color: #000;
`;
const RequestDescription = styled.p`
  padding: 0px 11px;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  color: #000;
`;
const RequestButton = styled.div`
  padding: 0px 11px;
  margin-bottom: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 226px;
  height: 36px;
  background-color: #134d72;
  border-radius: 10px;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  color: #fff;
`;
const AnswerField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 11px;
  width: 270px;
  border-top: 1px solid rgb(60, 60, 67, 0.6);
  padding-bottom: 5px;
`;

const ActionField = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Icon = styled.img`
  height: 18px; ;
`;

const AnswerAmount = styled.p`
  font-size: 15px;
  font-family: Roboto, sans-serif;
  color: #929295;
`;

export default function HelpRequest(props) {
  const [picture, setPicture] = useState(props.name);

  return (
    <Container>
      <PersonInfo>
        <PersonImage src={picture === "Elise" ? MariaImage : OliverImage} />
        <PersonRequest>
          von {props.name} <br />
          vor {props.time} Stunden{" "}
        </PersonRequest>
      </PersonInfo>
      <RequestField>
        <RequestElement>
          <RequestTitle>{props.title}</RequestTitle>
          <RequestDescription>{props.description}</RequestDescription>
        </RequestElement>
        <RequestButton>Helfen</RequestButton>
        <AnswerField>
          <AnswerAmount>{props.answers} Antwort</AnswerAmount>
          <ActionField>
            <Icon src={LikeIcon} />
            <Icon src={ShareIcon} />
          </ActionField>
        </AnswerField>
      </RequestField>
    </Container>
  );
}
