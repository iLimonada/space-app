import { styled } from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import SideBar from "./components/SideBar"

const GradientBackground = styled.div`
background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
`

function App() {


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
