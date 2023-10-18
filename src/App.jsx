import { styled } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
import bannerBackground from "./assets/banner.png";
import Gallery from "./components/Gallery";
import fotos from './fotos.json'
import { useState } from "react";




const GradientBackground = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 72px;
`;

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App =() => {
  const [galleryPics, setGalleryPics] = useState(fotos)
  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <SideBar />
          <GalleryContent>
            <Banner backgroundImage={bannerBackground} />
            <Gallery fotos={galleryPics}/>
          </GalleryContent>
        </MainContainer>
      </AppContainer>
    </GradientBackground>
  );
}

export default App;
