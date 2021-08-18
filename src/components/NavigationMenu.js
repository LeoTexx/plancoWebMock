import React from "react";
import styled from "styled-components";
import HomeIcon from "../assets/icons/home.png";
import NotificationsIcon from "../assets/icons/notifications.png";
import AddRequestIcon from "../assets/icons/addRequest.png";
import ChatIcon from "../assets/icons/chat.png";
import MyProfileIcon from "../assets/icons/myProfile.png";

const Container = styled.div`
  border-top: 1px solid #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 50px;
  margin: 0;
`;
const Button = styled.div``;

const Icon = styled.img`
  height: 20px;
`;
const AddRequest = styled.img`
  height: 50px;
  margin-top: -10px;
  position: relative;
`;

export default function NavigationMenu() {
  return (
    <Container>
      <Button>
        <Icon src={HomeIcon} alt="" />
      </Button>
      <Button>
        <Icon src={NotificationsIcon} alt="" />
      </Button>
      <Button>
        <AddRequest src={AddRequestIcon} alt="" />
      </Button>
      <Button>
        <Icon src={ChatIcon} alt="" />
      </Button>
      <Button>
        <Icon src={MyProfileIcon} alt="" />
      </Button>
    </Container>
  );
}
