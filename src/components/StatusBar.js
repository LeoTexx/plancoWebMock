import React from "react";
import styled from "styled-components";
import ConnectionIcon from "../assets/icons/connection.png";
import WifiIcon from "../assets/icons/wifi.png";
import BatteryIcon from "../assets/icons/battery.png";

const Container = styled.div`
  background-color: #50bfa5;
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`;
const TimeField = styled.div`
  font-size: 15;
  color: #000000;
  font-family: Roboto, sans-serif;
  font-weight: bold;
`;
const IconsField = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  justify-content: space-evenly;
`;
const Icons = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function StatusBar() {
  return (
    <Container>
      <TimeField>9:41</TimeField>
      <IconsField>
        <Icons src={ConnectionIcon} />
        <Icons src={WifiIcon} />
        <Icons src={BatteryIcon} />
      </IconsField>
    </Container>
  );
}
