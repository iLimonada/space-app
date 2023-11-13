import { styled } from "styled-components";
import { useState, useEffect } from "react";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
import bannerBackground from "./assets/banner.png";
import Gallery from "./components/Gallery";
import fotos from './fotos.json'
import ZoomModal from "./components/ZoomModal";
import Footer from "./components/Footer";

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
  gap: 24px;
`

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App =() => {

  const [galleryPics, setGalleryPics] = useState(fotos)
  const [selectedPic, setSelectedPic] = useState(null)
  const [filter, setFilter] = useState('')
  const [tag, setTag] = useState(0)
  // const [picWithZoom, setPicWithZoom] = useState(null)

  const toggleFavorite = (foto) =>
  {
    if(foto.id === selectedPic?.id) 
    {
      setSelectedPic({
        ...selectedPic,
        favorita: !selectedPic.favorita
      })
    }
    setGalleryPics(galleryPics.map(galleryPics => {
      return{
        ...galleryPics,
        favorita: galleryPics.id === foto.id ? !foto.favorita : galleryPics.favorita
      }
    }))
  }

  useEffect(() => {
    const filteredPics = fotos.filter(foto => {
      const filterByTag = !tag || foto.tagId === tag;
      const filterByTitle = !filter || foto.titulo.toLowerCase().includes(filter.toLowerCase())
      return filterByTag && filterByTitle
    })
      setGalleryPics(filteredPics)
  }, [filter, tag])

  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header 
          filter={filter}
          setFilter={setFilter}
        />
        <MainContainer>
          <SideBar />
          <GalleryContent>
            <Banner backgroundImage={bannerBackground} />
            <Gallery 
              fotos={galleryPics}
              isSelectedPic={foto => setSelectedPic(foto)}
              toggleFavorite={toggleFavorite}
              setTag={setTag}
            />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <ZoomModal 
        foto={selectedPic} 
        onClose={() => setSelectedPic(null)}
        toggleFavorite={toggleFavorite}
      />
      <Footer/>
    </GradientBackground>
  );
}

export default App;
