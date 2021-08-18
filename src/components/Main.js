import styled from "styled-components";
import Categories from "./Categories";
import HelpFeed from "./help/HelpFeed";

const Container = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
`;
const Title = styled.p`
  font-size: 17px;
  font-family: Roboto, sans-serif;
  color: rgb(60, 60, 67, 0.6);
  padding: 8px 21vw;
`;
const Feed = styled.div`
  display: flex;
  padding: 0px 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Main() {
  return (
    <Container>
      <Title>Erkuden</Title>
      <Feed>
        <Categories />
        <HelpFeed />
      </Feed>
    </Container>
  );
}
