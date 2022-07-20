import React from "react";
import { HomeButton } from "../../components/HomeButton";
import { LogoComponent } from "../../components/LogoComponent";
import { Socials } from "../../components/Socials";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 1)`};
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const AboutPage = () => {
  return (
    <MainContainer>
      <Container>
        <HomeButton />
        <LogoComponent />
        <Socials />
      </Container>
      <Center></Center>
    </MainContainer>
  );
};

export default AboutPage;
