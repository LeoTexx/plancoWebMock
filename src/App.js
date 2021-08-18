import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import NavigationMenu from "./components/NavigationMenu";
import Profile from "./components/Profile";
import Search from "./components/Search";
import StatusBar from "./components/StatusBar";

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
  height: 812px;
  min-width: 380px;
  max-width: 100vw;
  flex-direction: column;
  border: 3px solid #000;
  border-radius: 20px;
  padding: 0;
  margin: 0;
  background-color: #fff;
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <Container>
      <Header>
        <StatusBar />
        <Search />
      </Header>
      <Profile />
      <Main />
      <NavigationMenu />
    </Container>
  );
}

export default App;
